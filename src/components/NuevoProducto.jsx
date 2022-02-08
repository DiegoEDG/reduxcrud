import React from 'react';

export const NuevoProducto = () => {
	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-3 font-weight-bold">Agregar Nuevo Producto</h2>
						<form>
							<div className="form-group">
								<label htmlFor="name">Nombre Producto</label>
								<input type="text" name="name" className="form-control" placeholder="Nombre Producto" />
							</div>
							<div className="form-group">
								<label htmlFor="price">Nombre Producto</label>
								<input type="number" name="price" className="form-control" placeholder="Precio Producto" />
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
