import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

//crear productos
export function newProductAction(product) {
	return (dispatch) => {
		dispatch(addNewProduct());

		try {
			dispatch(addProductSuccess(product));
		} catch (error) {
			dispatch(addProductError(true));
		}
	};
}

const addNewProduct = () => ({
	type: ADD_PRODUCT,
	payload: true
});

const addProductSuccess = (product) => ({
	type: ADD_PRODUCT_SUCCESS,
	payload: product
});

const addProductError = (payload) => ({
	type: ADD_PRODUCT_ERROR,
	payload
});
