import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_DELETE_PRODUCT,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_ERROR,
	GET_EDIT_PRODUCT,
	EDITING_PRODUCT,
	EDIT_PRODUCT_SUCCESS,
	EDIT_PRODUCT_ERROR
} from '../types';
//cada reducer tiene su propio state
const initialState = {
	products: [],
	error: null,
	loading: false,
	productToDelete: null,
	productToEdit: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT:
		case GET_PRODUCTS:
		case EDITING_PRODUCT:
			return {
				...state,
				loading: action.payload
			};

		case ADD_PRODUCT_ERROR:
		case GET_PRODUCTS_ERROR:
		case DELETE_PRODUCT_ERROR:
		case EDIT_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
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

		case GET_DELETE_PRODUCT:
			return {
				...state,
				loading: false,
				productToDelete: action.payload
			};

		case DELETE_PRODUCT_SUCCESS:
			return {
				...state,
				products: state.products.filter((product) => product.id !== state.productToDelete),
				productToDelete: null
			};

		case GET_EDIT_PRODUCT:
			return {
				...state,
				productToEdit: action.payload
			};

		case EDIT_PRODUCT_SUCCESS:
			return {
				...state,
				productToEdit: null,
				products: state.products.map((product) =>
					product.id === action.payload.id ? (product = action.payload) : product
				)
			};

		default:
			return state;
	}
}
