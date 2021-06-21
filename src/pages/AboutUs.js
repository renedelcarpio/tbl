import React from 'react';
import styled from 'styled-components';
import labrador2 from '../images/labrador2.jpg';
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
	width: 50%;
	border-radius: 5px;
`;

const AboutUsImage = styled.img`
	width: 100%;
	border-radius: 10px;
`;

const ContentContainer = styled.div`
	width: 80%;
`;

const Title = styled.h1`
	font-size: 5rem;
	font-weight: bold;
	color: ${theme.purple};
`;

const Info = styled.p`
	font-size: 2rem;
`;

function AboutUs() {
	return (
		<AboutContainer>
			<ImageContainer className='about__image-container'>
				<AboutUsImage src={labrador2} alt='Foto de un labrador' />
			</ImageContainer>
			<ContentContainer>
				<Title>Thunderbolt-Labs</Title>
				<Info>
					Nuestra familia lleva más de cinco años criando esta maravillosa raza
					y compartiendo con ellos muchas alegrías, tanto en competencias como
					sabiendo que son pilares en sus hogares, donde son cuidados con mucho
					amor.
				</Info>
				<Info>
					Un criador no es algien que tiene 60 perros en un lugar sin espacio,
					criando en todos los celos, es un delincuente, no un criador.
				</Info>
				<Info>
					La realidad es que un buen criador se preocupa por la salud y
					bienestar de sus perros. Un criador busca la familia idónea para
					conformar un hogar que les brinde seguridad y al mismo tiempo
					compartar una vida de alegría. Un criador siempre estará pendiente de
					cada cachorro o adulto así esté en otro hogar para tener la seguridad
					que es bien cuidado.
				</Info>
			</ContentContainer>
		</AboutContainer>
	);
}

export default AboutUs;
