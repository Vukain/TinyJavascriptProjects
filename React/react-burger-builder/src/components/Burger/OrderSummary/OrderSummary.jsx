import React, { Component } from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {

    ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>)

    render() {
        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {this.ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={this.props.modalClosed} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.ordered} btnType='Success'>CONTINUE</Button>
            </>
        );
    }

}

export default OrderSummary;