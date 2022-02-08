import React from 'react';

export const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
			<div className="container">
				<h1> Redux Crud </h1>
			</div>
			<a href="/productos/nuevo" className="btn btn-danger nuevo-post d-block d-md-inline-block">
				Agregar Producto &#43;
			</a>
		</nav>
	);
};