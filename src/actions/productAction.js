import axiosClient from '../config/axios';
import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR
} from '../types';
import Swal from 'sweetalert2';

//crear productos
export function newProductAction(product) {
	return async (dispatch) => {
		dispatch(addNewProduct());

		try {
			await axiosClient.post('/productos', product);
			dispatch(addProductSuccess(product));
			Swal.fire('Correcto', 'El producto se agregó correctamente', 'success');
		} catch (error) {
			dispatch(addProductError(true));
			Swal.fire({
				title: 'Error!',
				text: 'Ocurrió un error, por favor vuelve a intentarlo',
				icon: 'error'
			});
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

//Get products action
export function getProductsAction() {
	return async (dispatch) => {
		dispatch(getProducts());

		try {
			const products = await axiosClient.get('/productos');
			dispatch(getProductsSuccess(products.data));
		} catch (error) {
			dispatch(getProductsError(true));
		}
	};
}

const getProducts = () => ({
	type: GET_PRODUCTS,
	payload: true
});

const getProductsError = (payload) => ({
	type: GET_PRODUCTS_ERROR,
	payload
});

const getProductsSuccess = (payload) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload
});
