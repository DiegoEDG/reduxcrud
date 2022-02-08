import React, { useState } from 'react';
//actions
import { newProductAction } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

export const NuevoProducto = () => {
	const [product, setProduct] = useState({
		name: '',
		price: 0
	});
	const dispatch = useDispatch();

	const handleProduct = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		product.price = Number(product.price);
		dispatch(newProductAction(product));
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-3 font-weight-bold">Agregar Nuevo Producto</h2>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="form-group">
								<label htmlFor="name">Nombre Producto</label>
								<input
									type="text"
									name="name"
									className="form-control"
									placeholder="Nombre Producto"
									value={product.name}
									onChange={(e) => handleProduct(e)}
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
									onChange={(e) => handleProduct(e)}
								/>
							</div>
							<button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
								Agregar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
