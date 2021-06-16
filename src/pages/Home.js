import React from 'react';
import styled from 'styled-components';
import wideImage from '../images/manada.jpg';
import tallImage from '../images/labrador.jpg';

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: auto;
	margin-top: 3rem;
	margin-bottom: 3rem;
	border-radius: 10px;
	width: 80%;
	max-height: 80%;
	overflow: hidden;

	@media (max-width: 800px) {
		max-width: 60rem;
	}

	@media (max-width: 450px) {
		max-width: 40rem;
	}
`;

const MainImage = styled.img`
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
