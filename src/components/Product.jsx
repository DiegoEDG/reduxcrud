import React from 'react';
import { deleteProductAction } from '../actions/productAction';
import { useDispatch } from 'react-redux';

export const Product = ({ product }) => {
	const { id, name, price } = product;

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteProductAction(id));
	};

	return (
		<tr className="text-center">
			<td>
				{' '}
				<span className="font-weight-bold">{name}</span>
			</td>
			<td>$ {price}</td>
			<td>
				<button className="btn btn-info mr-2">Editar</button>
				<button className="btn btn-danger" onClick={() => handleDelete(id)}>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
