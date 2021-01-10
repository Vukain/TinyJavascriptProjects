import React from 'react';
import { withRouter } from 'react-router';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />);
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);


    if (transformIngredients.length === 0) {
        transformIngredients = "Add ingredients"
    };

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default withRouter(burger);