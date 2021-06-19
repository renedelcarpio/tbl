import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import { MenuItems } from './MenuItems';
import tblLogo from '../images/tbl_sin_fondo.png';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			<nav className='NavbarItems'>
				<img className='navbar-img' src={tblLogo} alt='' />
				<h1 className='navbar-logo'>
					<Link className='navbar-logo navbar-logo-link' to='/'>
						Thunderbolt-Labs
					</Link>
				</h1>
				<div className='menu-icon' onClick={handleClick}>
					<i
						className={openMenu === false ? 'fas fa-times' : 'fas fa-bars'}
					></i>
				</div>
				<ul className={openMenu === true ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<Link className={item.cName} to={item.url}>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
