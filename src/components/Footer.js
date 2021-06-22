import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: baseline;
	width: 100%;
	height: 5rem;
	background: ${theme.white};
	color: ${theme.purple};
	border-top: 2px solid ${theme.purple};
`;

const FooterText = styled.h5`
	background: ${theme.white};
	font-size: 1.8rem;

	@media (max-width: 900px) {
		font-size: 1.2rem;
	}

	@media (max-width: 450px) {
		font-size: 0.8rem;
	}
`;

function Footer() {
	return (
		<FooterContainer className='footer__container'>
			<FooterText>
				© Thunderbolt-Labs. El contendio de esta página web no es de dominio
				público. Todos los derechos reservados.
			</FooterText>
		</FooterContainer>
	);
}

export default Footer;
