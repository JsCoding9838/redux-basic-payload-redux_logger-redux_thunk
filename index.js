// state -- count: 0
// action - increment, decrement, reset
// reducer
// store
const {createStore} = require('redux');
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
	count: 0,
}
const incrementCounterAction = () => {
	return {
		type: INCREMENT,
	}
}
const decrementCounterAction = () => {
	return {
		type: DECREMENT,
	}
}
const resetCounterAction = () => {
	return {
		type: RESET,
	}
}
const incrementCounterByValue = (value) => {
	return {
		type: INCREMENT_BY_VALUE,
		payload: value
	}
}

const actionReducer = (state=initialState, action) =>{
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1
			}
		case RESET:
			return {
				...state,
				count: 0
			}
		case INCREMENT_BY_VALUE:
			return {
				...state,
				count: state.count + action.payload
			}
		default:
			return state;
	}
}
// store
const store = createStore(actionReducer);

store.subscribe(()=> {
	console.log(store.getState())
})

store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(10))