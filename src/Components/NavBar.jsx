import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<nav className="bg-gray-800 p-2 rounded-md">
				<div className="flex items-center justify-between">
					<ul className="flex items-center space-x-4 text-white uppercase">
						<li className="px-3 py-2 rounded-md hover:bg-gray-700">
							<Link to="/">
								Home
							</Link>
						</li>
						<li className="px-3 py-2 rounded-md hover:bg-gray-700">
							<Link to="/training">
								Training
							</Link>
						</li>
						<li className="px-3 py-2 rounded-md hover:bg-gray-700">
							<Link to="/webdev">
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
