import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {

        const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>)

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={props.modalClosed} btnType='Danger'>CANCEL</Button>
                <Button clicked={props.ordered} btnType='Success'>CONTINUE</Button>
            </>
        );
    };

export default OrderSummary;