import React, { useState } from 'react';
//actions
import { newProductAction } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const NuevoProducto = ({ history }) => {
	const [product, setProduct] = useState({
		name: '',
		price: 0
	});
	const dispatch = useDispatch();

	const loading = useSelector((state) => state.products.loading);
	const error = useSelector((state) => state.products.error);

	const handleProduct = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (product.name === '' || product.price <= 0) {
			Swal.fire({
				title: 'Datos no validos',
				text: 'Los datos del formulario no son validos, por favor revisalos.',
				icon: 'error'
			});
			return;
		}

		product.price = Number(product.price);
		dispatch(newProductAction(product));

		history.push('/');
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

						{loading ? <p className="alert alert-info text-center mt-3">Cargando...</p> : null}
						{error ? <p className="alert alert-danger text-center mt-3">Ocurrió un error</p> : null}
					</div>
				</div>
			</div>
		</div>
	);
};
