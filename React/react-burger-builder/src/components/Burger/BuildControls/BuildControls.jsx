import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [{ label: 'Salad', type: 'salad' },
{ label: 'Bacon', type: 'bacon' },
{ label: 'Cheese', type: 'cheese' },
{ label: 'Meat', type: 'meat' }];

const buildConrols = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}$</strong></p>
            {
                controls.map(ctrl => (<BuildControl
                    key={ctrl.label}
                    label={ctrl.label}

                    added={() => props.ingredientsAdded(ctrl.type)}
                    removed={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />))
            }
            <button
                onClick={props.ordered}
                className={classes.OrderButton}
                disabled={!props.purchaseable}>{props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'}</button>
        </div>
    );
}

export default buildConrols;