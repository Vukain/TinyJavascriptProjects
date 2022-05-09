import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

const BurgerBuilder = props => {
    
    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch();

    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients
    });
    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice
    });
    const error = useSelector(state => {
        return state.burgerBuilder.error
    });
    const isAuthenticated = useSelector(state => {
        return state.burgerBuilder.error
    });

    const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
    const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients])

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => { return ingredients[igKey] })
            .reduce((sum, el) => { return sum + el }, 0);
        return sum > 0;
    }

    const purchaseHandler = () => {
        if (isAuthenticated) {
            setPurchasing(true);
        } else {
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push({ pathname: '/checkout' }
        );
    }

    const disabledInfo = {
        ...ings
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (ings) {
        burger = (
            <>
                <Burger ingredients={ings} />
                <BuildControls
                    ingredientsAdded={onIngredientAdded}
                    ingredientsRemoved={onIngredientRemoved}
                    purchaseable={updatePurchaseState}
                    ordered={() => purchaseHandler(ings)}
                    price={price}
                    disabled={disabledInfo}
                    isAuth={isAuthenticated} />
            </>
        );
        orderSummary = <OrderSummary
            price={price}
            ingredients={ings}
            modalClosed={purchaseCancelHandler}
            ordered={purchaseContinueHandler}
        />
    };

    return (
        <>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </>
    );
}

export default withErrorHandler(BurgerBuilder, axios);