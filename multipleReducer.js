const {createStore, combineReducers} = require('redux');
// user constants
const GET_USER = "GET_USER";
const ADD_USER = "ADD_USER";

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT"

// User State
const initialUserState = {
	name: ["jubayer", "Milon"],
	count: 2
}

/// Product state
const initialProductState = {
	products: ["Ball", "Bat"],
	numberofproducts: 2
}
// get user action
const getUser = () => {
	return {
		type: GET_USER,
	}
}
// add user action
const addUser = (user) => {
	return {
		type: ADD_USER,
		payload: user
	}
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

const userReducer = (state=initialUserState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state
			};
		case ADD_USER:
			return {
				name: [...state.name, action.payload],
				count: state.count + 1
			};
	
		default:
			return state;
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

// rootReducer
const rootReducer = combineReducers({
	userReducer: userReducer,
	productR: productReducer,

})

// store
const store = createStore(rootReducer);
store.subscribe(()=> {
	console.log(store.getState());
})

store.dispatch(getUser());
store.dispatch(addUser("Uzzal"));
store.dispatch(getProductsAction());
store.dispatch(addProductAction('basketball'));