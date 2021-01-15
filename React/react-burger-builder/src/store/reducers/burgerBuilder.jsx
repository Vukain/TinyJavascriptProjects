import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngredien = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngrediens = updateObject(state.ingredients, updatedIngredien);
    const updatedStat = {
        ingredients: updatedIngrediens,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedStat);
};

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
            salad: action.ingredients.salad
        },
        totalPrice: 4,
        error: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state
    };
};

export default reducer;