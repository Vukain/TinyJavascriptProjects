import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(decodeURIComponent(this.props.location.search));
        let pricey = 0;
        const ingredients = {};

        for (let param of query.entries()) {
            if (param[0] === 'price') {
                pricey = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            };
            this.setState({ ingredients: ingredients, price: pricey });
        };
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        console.log(this.state.price)
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.price} />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>} />
            </div>
        );
    };
}

export default Checkout;