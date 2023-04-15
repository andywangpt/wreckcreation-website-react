import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-sm py-0">

				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="navbar-collapse collapse" id="navbarCollapse">
					<ul className="nav navbar-nav mr-auto text-uppercase">
						<li className="navbar-item m-1">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="navbar-item m-1">
							<Link className="nav-link" to="/training">
								Training
							</Link>
						</li>
						<li className="navbar-item m-1">
							<Link className="nav-link" to="/webdev">
								Web Development
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default NavBar;