import React from 'react'

import Map from '../components/Map'
import '../styles/Contact.css'

function Contact() {
    return (
        <>
            <div className='map-container'>
                <Map />
            </div>
            <div className='social-media-container'>
                <h1>Contácta con nosotros:</h1>
                <ul className='list-container'>
                    <li>
                        <i className="fas fa-envelope"></i>
                        Email: thunderbolt-labs@gmail.com
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        Teléfonos: (+591) 713 56163 / (+591) 709 38732
                    </li>
                    <li>
                        <a href='https://www.facebook.com/search/top?q=Thunderbolt-Labs'>
                            <i className='fab fa-facebook-square'></i>Thunderbolt-Labs
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/thunderbolt_labs/?hl=es-la'>
                            <i className="fab fa-instagram-square"></i>thunderbolt_labs
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contact
