import React from 'react'

import homeImage from '../images/manada.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <>
            <div className='main__image-container'>
                <img className='home-image' src={ homeImage } alt="Página de inicio"/>
            </div>
        </>
    )
}

export default Home