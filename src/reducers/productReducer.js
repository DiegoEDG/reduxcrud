import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR
} from '../types';
//cada reducer tiene su propio state
const initialState = {
	products: [],
	error: null,
	loading: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT:
		case GET_PRODUCTS:
			return {
				...state,
				loading: action.payload
			};

		case ADD_PRODUCT_ERROR:
		case GET_PRODUCTS_ERROR:
			return {
				...state,
				loading: true,
				error: action.payload
			};

		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload]
			};

		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				products: action.payload
			};

		default:
			return state;
	}
}
