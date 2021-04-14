import React from 'react'
import { BrowserRouter, ReactRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Dogs from '../pages/Dogs'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/About-us' component={ AboutUs} />
                    <Route exact path='/Ejemplares' component={ Dogs } />
                    <Route exact path='/Servicios' component={ Services } />
                    <Route exact path='/Contacto' component={ Contact } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App
