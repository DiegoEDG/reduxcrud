import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';
//cada reducer tiene su propio state
const initialState = {
	products: [],
	error: null,
	loading: false
};

export default function (state = initialState, action) {
	switch (action.typa) {
		default:
			return state;
	}
}
