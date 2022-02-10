import React from 'react';
import { deleteProductAction, getEditProductAction } from '../actions/productAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Product = ({ product }) => {
	const { id, name, price } = product;

	const dispatch = useDispatch();
	const history = useHistory();

	const handleDelete = (id) => {
		dispatch(deleteProductAction(id));
	};

	const handleEdit = (product) => {
		dispatch(getEditProductAction(product));
		history.push(`/productos/editar/${product.id}`);
	};

	return (
		<tr className="text-center">
			<td>
				{' '}
				<span className="font-weight-bold">{name}</span>
			</td>
			<td>$ {price}</td>
			<td>
				<button className="btn btn-info mr-2" onClick={() => handleEdit(product)}>
					Editar
				</button>
				<button className="btn btn-danger" onClick={() => handleDelete(id)}>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
