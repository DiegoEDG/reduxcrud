import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productAction';
import { useHistory } from 'react-router-dom';

export const EditarProducto = () => {
	const [product, setProduct] = useState({
		name: '',
		price: ''
	});
	const dispatch = useDispatch();
	const history = useHistory();
	const productToEdit = useSelector((state) => state.products.productToEdit);

	useEffect(() => {
		setProduct(productToEdit);
	}, [productToEdit]);

	const handleChange = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		product.price = Number(product.price);
		dispatch(editProductAction(product));
		history.push('/');
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-3 font-weight-bold">Editar Producto</h2>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="form-group">
								<label htmlFor="name">Nombre Producto</label>
								<input
									type="text"
									name="name"
									className="form-control"
									placeholder="Nombre Producto"
									value={product.name}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="price">Nombre Producto</label>
								<input
									type="number"
									name="price"
									className="form-control"
									placeholder="Precio Producto"
									value={product.price}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
