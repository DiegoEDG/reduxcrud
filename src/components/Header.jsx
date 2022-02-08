import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
			<div className="container">
				<h1>
					<Link to={'/'} className="text-light">
						Redux Crud
					</Link>
				</h1>
			</div>
			<Link to={'/productos/nuevo'} className="btn btn-danger nuevo-post d-block d-md-inline-block">
				Agregar Producto &#43;
			</Link>
		</nav>
	);
};
