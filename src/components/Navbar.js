import React from 'react'

import '../styles/Navbar.css'
import { MenuItems } from './MenuItems'
import tblLogo from '../images/tbl_sin_fondo.png'

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <>
                <nav className='NavbarItems'>
                    <img className='navbar-img' src={ tblLogo } alt=""/>
                    <h1 className='navbar-logo'>Thunderbolt-labs</h1>
                    <div className='menu-icon' onClick={ this.handleClick }>
                        <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                    </div>
                    <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                        { MenuItems.map((item, index) => {
                            return(
                                <li key={ index }>
                                    <a className={ item.cName } href={ item.url }>
                                        { item.title }
                                    </a>
                                </li>
                            )
                        }) }
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar