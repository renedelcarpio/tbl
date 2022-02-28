import './Navbar.scss';

import Button from '../Button/Button';
import TBLImage from '../../images/tbl_sin_fondo.png';
import { useState } from 'react';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img src={TBLImage} className='navbar__image' alt='Thunderbolt Logo' />
				<h1>
					<a className='navbar__name' href='/'>
						Thunderbolt-Labs
					</a>
				</h1>
			</div>

			<ul
				className={isMobile ? 'navbar__list--mobile' : 'navbar__list'}
				onClick={() => setIsMobile(false)}
			>
				<li className='navbar__item'>
					<a className='navbar__link' href='/aboutUs'>
						Nosotros
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='/dogs'>
						Ejemplares
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='/puppies'>
						Cachorros
					</a>
				</li>
				<li className='navbar__item'>
					<a className='navbar__link' href='/contact'>
						Contacto
					</a>
				</li>
				<li className='navbar__item'>
					<Button className={'btn btn-primary'}>Login</Button>
				</li>
			</ul>
			<button
				className='navbar__mobile--icon'
				onClick={() => setIsMobile(!isMobile)}
			>
				{isMobile ? (
					<i className='fas fa-times'></i>
				) : (
					<i className='fas fa-bars'></i>
				)}
			</button>
		</div>
	);
};

export default Navbar;
