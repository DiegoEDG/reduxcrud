import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productAction';
import { Product } from './Product';

export const Productos = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAction());
	}, []);

	const products = useSelector((state) => state.products.products);
	console.log(products);

	return (
		<>
			<h2 className="text-center my-3">Listado de productos</h2>
			<table className="table table-striped">
				<thead className="bg-primary table-dark text-center">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{products.lenght === 0
						? 'No Existen productos'
						: products.map((product) => <Product key={product.id} product={product} />)}
				</tbody>
			</table>
		</>
	);
};
