import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

//crear productos
export function newProductAction() {
	return () => {
		console.log('Desde newProductAction');
	};
}
