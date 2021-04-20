import React from 'react'

import '../styles/AboutUs.css'
import labrador2 from '../images/labrador2.jpg'

function AboutUs() {
    return (
        <div className='about__main-container'>
            <div className='about__image-container' >
                <img className='about__image' src={ labrador2 } alt="Foto de un labrador"/>
                <h1 className='about__title'>Thunderbolt-Labs</h1>
                <p className='about__about-dog'>
                    Nuestra familia lleva más de cinco años criando esta maravillosa raza y compartiendo con ellos muchas alegrías, tanto en competencias como sabiendo que son pilares en sus hogares, donde son cuidados con mucho amor.
                </p>
                <p className='about__about-dog'>
                    Un criador no es algien que tiene 60 perros en un lugar sin espacio, criando en todos los celos, es un delincuente, no un criador.
                </p>
                <p className='about__about-dog'>
                    La realidad es que un buen criador se preocupa por la salud y bienestar de sus perros. Un criador busca la familia idónea para conformar un hogar que les brinde seguridad y al mismo tiempo compartar una vida de alegría. Un criador siempre estará pendiente de cada cachorro o adulto así esté en otro hogar para tener la seguridad que es bien cuidado.
                </p>
            </div>
        </div>
    )
}

export default AboutUs
