import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../elements/menuItems';
import tblLogo from '../images/tbl_sin_fondo.png';
import styled from 'styled-components';
import theme from '../theme';
import '../styles/Navbar.css';

const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
	background: ${theme.white};
	align-items: center;
	box-shadow: 0.1rem 0.5rem 1rem ${theme.shadow};
	max-height: 8rem;
	width: 100vw;
`;

const LogoNameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:hover {
		transform: scale(1.15);
		transition: all 500ms;
	}
`;

const ThunderboltLogo = styled.img`
	max-height: 5rem;
	margin-left: 2rem;
	margin-right: 1rem;

	@media (max-width: 800px) {
		max-height: 3.5rem;
	}
`;

const ThunderboltTitle = styled.h1`
	color: ${theme.black};

	&:hover {
		color: ${theme.pink};
		text-decoration: none;
	}
`;

const BurgerMenuContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	display: none;

	@media (max-width: 800px) {
		display: block;
	}
`;

const BurgerMenu = styled.i`
	color: ${theme.purple};

	&:hover {
		color: ${theme.pink};
	}
`;

const Menu = styled.ul`
	display: flex;
	list-style: none;
	margin-right: 2rem;

	@media (max-width: 800px) {
		position: absolute;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 317px;
		top: 5rem;
	}
`;

const List = styled.li`
	padding: 1rem;
	font-size: 2rem;
	background: ${theme.white};
`;

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<NavBar>
			<LogoNameContainer>
				<ThunderboltLogo src={tblLogo} alt='' />
				<Link to='/'>
					<ThunderboltTitle>Thunderbolt-Labs</ThunderboltTitle>
				</Link>
			</LogoNameContainer>
			<BurgerMenuContainer onClick={handleClick}>
				<BurgerMenu
					className={openMenu === false ? 'fas fa-times' : 'fas fa-bars'}
				></BurgerMenu>
			</BurgerMenuContainer>
			<Menu>
				{window.screen.width > 800 && openMenu === true}
				{openMenu === false &&
					MenuItems.map((item, index) => {
						return (
							<List key={index}>
								<Link className={item.cName} to={item.url}>
									{item.title}
								</Link>
							</List>
						);
					})}
			</Menu>
		</NavBar>
	);
};

export default Navbar;
