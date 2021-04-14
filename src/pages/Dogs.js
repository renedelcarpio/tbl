import React from 'react'

import labrador1 from '../images/labrador.jpg'

function Dogs() {
    return (
        <>
            <div className='badge__main-container' >
                <img className='badge__image-container' src={ labrador1 } alt=""/>
                    <h2 className='badge__title'>Nombre del perro</h2>
                    <h3 className='badge__pedigree'>Pedigree</h3>
                    <p className='badge__about-dog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus voluptatum commodi dolorem, magni enim quia ab quod itaque eum explicabo similique eius, architecto veritatis accusantium corporis. Asperiores, explicabo obcaecati?
                    </p>
            </div>
        </>
    )
}

export default Dogs
