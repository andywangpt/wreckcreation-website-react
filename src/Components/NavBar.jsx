import React from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';


function NavBar() {
	return (
		<>
			<nav className="bg-from-white p-2 rounded-md">
				<div className="flex items-center justify-start">
					<ul className="flex items-center space-x-4 text-white uppercase">
						<li className="px-5 py-2 rounded-md hover:bg-gray-700">
							<Link to="/">
								Home
							</Link>
						</li>
						<li className="px-5 py-2 rounded-md hover:bg-gray-700">
							<Link to="/training">
								Training
							</Link>
						</li>
						<li className="px-5 py-2 rounded-md hover:bg-gray-700">
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
