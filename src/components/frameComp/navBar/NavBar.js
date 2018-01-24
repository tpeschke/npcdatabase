import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    render() {
        return (
            <div>
                <Link to='/home'><div>My NPCs</div></Link>
                <Link to='/home/addnew'><div>Add New</div></Link>
                <Link to='/home/search'><div>Search</div></Link>
            </div>
        )
    }
}