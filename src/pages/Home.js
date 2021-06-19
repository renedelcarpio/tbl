import React from 'react';
import styled from 'styled-components';
import wideImage from '../images/manada.jpg';
import tallImage from '../images/labrador.jpg';

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	margin-top: 3rem;
	margin-bottom: 3rem;
	border-radius: 10px;
	width: 80%;
	max-height: 90rem;
	overflow: hidden;
	box-shadow: 0.3rem 0.5rem 0.5rem #888888;

	@media (max-width: 1025px) {
		margin: auto;
	}

	@media (max-width: 800px) {
		max-width: 60rem;
	}

	@media (max-width: 450px) {
		margin-top: 3rem;
		margin-bottom: 3rem;
		max-width: 40rem;
		max-height: 69rem;
	}
`;

const MainImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

const Home = () => {
	const windowWidth = window.screen.width;
	const wide = wideImage;
	const tall = tallImage;
	return (
		<ImageContainer>
			<MainImage
				src={windowWidth <= 450 ? tall : wide}
				alt='Página de inicio'
			/>
		</ImageContainer>
	);
};

export default Home;
