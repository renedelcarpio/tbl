import React from 'react'
import { Link } from 'react-router-dom'

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
                    <h1 className='navbar-logo'><Link className='navbar-logo' to="/">Thunderbolt-labs</Link></h1>
                    <div className='menu-icon' onClick={ this.handleClick }>
                        <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                    </div>
                    <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                        { MenuItems.map((item, index) => {
                            return(
                                <li key={ index }>
                                    <Link className={ item.cName } to={ item.url }>
                                        { item.title }
                                    </Link>
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