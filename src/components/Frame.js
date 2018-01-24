import React, { Component } from 'react'

import NavBar from './frameComp/navBar/NavBar'
import mainAppRoutes from '../routes'

export default class Frame extends Component {

    render() {
        return (
            <div>
                <NavBar />
        
                <mainAppRoutes />
            </div>
        )
    }
}