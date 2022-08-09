const {createStore, applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT"

// Product state
const initialProductState = {
	products: ["Ball", "Bat"],
	numberofproducts: 2
}
// get Product action
const getProductsAction = () => {
	return {
		type: GET_PRODUCTS,
	}
}
// add Product action
const addProductAction = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: product
	}
}

const productReducer = (state=initialProductState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state
			};
		case ADD_PRODUCT:
			return {
				products: [...state.products, action.payload],
				numberofproducts: state.numberofproducts + 1
			};
	
		default:
			return state;
	}
}

// store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(()=> {
	console.log(store.getState());
})

store.dispatch(getProductsAction());
store.dispatch(addProductAction('basketball'));