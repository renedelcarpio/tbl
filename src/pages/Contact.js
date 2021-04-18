import React from 'react'
import { Link } from 'react-router-dom'

import Map from '../components/Map'
import '../styles/Contact.css'

function Contact() {
    return (
        <>
            <div className='map-container'>
                <Map />
            </div>
            <div className='social-media-container'>
                <h1>Síguenos en nuestras redes sociales:</h1>
                <ul>
                    <li><a href='https://www.facebook.com/search/top?q=Thunderbolt-Labs'><i className='fab fa-facebook-square'></i></a></li>
                    <li><a href='https://www.instagram.com/thunderbolt_labs/?hl=es-la'><i className="fab fa-instagram-square"></i></a></li>
                    <li>Email: thunderbolt-labs@gmail.com</li>
                    <li>Teléfonos: (+591) 713 56163 / (+591) 709 38732</li>
                </ul>
            </div>
        </>
    )
}

export default Contact
