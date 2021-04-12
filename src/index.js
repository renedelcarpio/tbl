import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import App from './components/App'

const container = document.getElementById('app')

//ReactDom.render (--qué--,--dónde--)

ReactDOM.render(<App />, container)