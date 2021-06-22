import React from 'react';
import styled from 'styled-components';
import { tblDogs } from '../elements/tblDogs';
import theme from '../theme';

const BadgeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 10rem;
	margin-bottom: 10rem;

	@media (max-width: 1025px) {
		margin-top: 3rem;
		margin-bottom: 3rem;
	}
`;

const DogBadge = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem;
	box-shadow: 0.1rem 0.5rem 1rem ${theme.shadow};
	border-radius: 10px;
	width: 30%;

	@media (max-width: 1025px) {
		width: 60%;
		flex-wrap: no-wrap;
	}

	@media (max-width: 900px) {
		flex-wrap: wrap;
	}

	@media (max-width: 450px) {
		width: 90%;
		height: 45rem;
		flex-direction: column;
	}
`;

const DogImageContainer = styled.div`
	max-width: 50%;
	max-height: 30rem;
	margin: 2rem;
	border-radius: 10rem;
`;

const DogImage = styled.img`
	width: 100%;
	object-fit: cover;
`;

const DogInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	width: 50%;
	margin-right: 2rem;

	@media (max-width: 1025px) {
		flex-direction: column;
		width: 80%;
	}
`;

const DogName = styled.h1`
	font-size: 5rem;
	font-weight: bold;
	color: ${theme.purple};

	@media (max-width: 1025px) {
		font-size: 3rem;
	}
`;

const Pedigree = styled.h3`
	font-size: 2rem;
	color: ${theme.pink};
`;

const Gender = styled.h3`
	display: block;
	font-size: 2rem;
	color: ${theme.purple};
`;

const Champ = styled.p`
	display: block;
	font-size: 1.5rem;
	color: ${theme.purple};
`;

function Dogs() {
	return (
		<BadgeContainer>
			{tblDogs.map((dog, index) => {
				return (
					<DogBadge key={index}>
						<DogImageContainer className='badge__image-container'>
							<DogImage src={dog.photo} alt={dog.name} />
						</DogImageContainer>
						<DogInfo>
							<DogName>{dog.name}</DogName>
							<Pedigree>{dog.pedigree}</Pedigree>
							<Gender>{dog.gender}</Gender>
							<Champ>{dog.wins.champ1}</Champ>
							<Champ>{dog.wins.champ2}</Champ>
						</DogInfo>
					</DogBadge>
				);
			})}
		</BadgeContainer>
	);
}

export default Dogs;
