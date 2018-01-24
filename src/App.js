import React, { Component } from 'react'

import './App.css'
import './reset.css'

import Routes from './routes'
import NavBar from './components/navBar/NavBar'

export default class App extends Component {

    render() {

        return (
            <div>
                <NavBar />

                <Routes />
            </div>
        )
    }
}