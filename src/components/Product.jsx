import React from 'react';

export const Product = ({ product }) => {
	const { name, price } = product;
	return (
		<tr className="text-center">
			<td>
				{' '}
				<span className="font-weight-bold">{name}</span>
			</td>
			<td>$ {price}</td>
			<td>
				<button className="btn btn-info mr-2">Editar</button>
				<button className="btn btn-danger">Eliminar</button>
			</td>
		</tr>
	);
};
