import React from 'react'

import '../styles/AboutUs.css'
import labrador2 from '../images/labrador2.jpg'

function AboutUs() {
    return (
        <>
            <div className='about__main-container'>
                <div className='about__image-container' >
                    <img className='about__image' src={ labrador2 } alt="Foto de un labrador"/>
                </div>
                <div className='about__description-container'>
                    <h1 className='about__title'>Thunderbolt-labs</h1>
                    <h3 className='about__pedigree'>Quienes somos</h3>
                    <p className='about__about-dog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus voluptatum commodi dolorem, magni enim quia ab quod itaque eum explicabo similique eius, architecto veritatis accusantium corporis. Asperiores, explicabo obcaecati?
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs
