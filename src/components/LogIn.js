import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LogIn extends Component {

    render() {
        return (
            <div className='OuterComp' id="login">
                <Link to='/home'><button>log in</button></Link>
            </div>
        )
    }
}