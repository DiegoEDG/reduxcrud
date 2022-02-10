import axiosClient from '../config/axios';
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

//Delete product
export function deleteProductAction(id) {
	return async (dispatch) => {
		dispatch(getProductIdToDelete(id));

		try {
			await axiosClient.delete(`/productos/${id}`);
			dispatch(deleteProductSuccess());
			Swal.fire('Correcto', 'El producto se eliminó correctamente', 'success');
		} catch (error) {
			dispatch(deleteProductError(true));
			Swal.fire({
				title: 'Error!',
				text: 'Ocurrió un error, por favor vuelve a intentarlo',
				icon: 'error'
			});
		}
	};
}

const deleteProductSuccess = () => ({
	type: DELETE_PRODUCT_SUCCESS
});

const deleteProductError = (payload) => ({
	type: DELETE_PRODUCT_ERROR,
	payload
});

const getProductIdToDelete = (id) => ({
	type: GET_DELETE_PRODUCT,
	payload: id
});

export function getEditProductAction(product) {
	return (dispatch) => {
		dispatch(getProductToEdit(product));
	};
}

const getProductToEdit = (product) => ({
	type: GET_EDIT_PRODUCT,
	payload: product
});

export function editProductAction(product) {
	return async (dispatch) => {
		dispatch(editingProduct());
		try {
			await axiosClient.put(`/productos/${product.id}`, product);
			dispatch(editProduct(product));
			Swal.fire('Correcto', 'El producto se editó correctamente', 'success');
		} catch (error) {
			dispatch(editProductError(true));
			Swal.fire({
				title: 'Error!',
				text: 'Ocurrió un error, por favor vuelve a intentarlo',
				icon: 'error'
			});
		}
	};
}

const editProduct = (product) => ({
	type: EDIT_PRODUCT_SUCCESS,
	payload: product
});

const editingProduct = () => ({
	type: EDITING_PRODUCT,
	payload: true
});

const editProductError = (payload) => ({
	type: EDIT_PRODUCT_ERROR,
	payload
});
