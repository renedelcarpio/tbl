import React from 'react';
import styled from 'styled-components';
import labrador6 from '../images/labrador6.jpg';
import theme from '../theme';

const AboutContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
	background: ${theme.white};
	margin-top: 3rem;
	margin-bottom: 3rem;
	max-width: 80%;
	border-radius: 10px;
	box-shadow: 0.1rem 0.5rem 1rem ${theme.shadow};
`;

const ImageContainer = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
	width: 36%;
	border-radius: 5px;

	@media (max-width: 900px) {
		width: 80%;
	}
`;

const AboutUsImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

const ContentContainer = styled.div`
	width: 65%;

	@media (max-width: 1025px) {
		width: 90%;
	}
`;

const Title = styled.h1`
	font-size: 5rem;
	font-weight: bold;
	color: ${theme.purple};

	@media (max-width: 900px) {
		font-size: 3.5rem;
	}

	@media (max-width: 450px) {
		font-size: 3rem;
	}
`;

const Info = styled.p`
	font-size: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 900px) {
		font-size: 1.5rem;
	}
`;

function AboutUs() {
	return (
		<AboutContainer>
			<ImageContainer className='about__image-container'>
				<AboutUsImage src={labrador6} alt='Foto de un labrador' />
			</ImageContainer>
			<ContentContainer>
				<Title>Thunderbolt-Labs</Title>
				<Info>
					Un criador es quien con amor y dedicación, vela por el bienestar de
					sus ejemplares. No olvidemos que los animales necesitan mucha
					dedicación ya que ellos son como niños pequeños, seres llenos de amor,
					y lealtad infinita.
				</Info>
				<Info>
					Nuestra familia lleva más de cinco años criando esta maravillosa raza
					y compartiendo con ellos muchas alegrías, tanto en las competencias en
					las que participamos como en los hogares a los que van nuestros
					cachorros, donde sin lugar a dudas dan y reciben amor.
				</Info>
				<Info>
					Nosotros, como buenos criadores nos preocupamos por la salud y
					bienestar de nuestros ejemplares, buscamos la familia idónea que les
					brinde seguridad y con la que puedan compartir una vida llena de
					alegría. Un buen criador siempre estará pendiente de sus ejemplares,
					no importa dónde se encuentren o qué edad tengan, porque nuestras
					mascotas merecen siempre lo mejor.
				</Info>
			</ContentContainer>
		</AboutContainer>
	);
}

export default AboutUs;
