import React from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import logo from "./Assets/logo.png";


function NavBar() {
	return (
		<>
			<nav className="bg-white p-0">
            <div className="flex items-center justify-start">
               
               <li className="p-2 rounded-md hover:bg-gray-700">
						<Link to="/">
                     <img id="logo" className='logo w-8' src={logo} alt="Wreckcreation Banner" />
						</Link>
               </li>
					
               <ul className="flex items-center space-x-8 text-black uppercase">
                  <li className="p-2 rounded-md hover:bg-gray-700">
							<Link to="/">
								Home
                     </Link>
                  </li>
                  <li className="p-2 rounded-md hover:bg-gray-700">
							<Link to="/creative">
								Creative
                     </Link>
                  </li>
						
                  <li className="p-2 rounded-md hover:bg-gray-700">
							<Link to="/training">
								Fitness
							</Link>
                  </li>
						
                  <li className="p-2 rounded-md hover:bg-gray-700">
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
