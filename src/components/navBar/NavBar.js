import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class NavBar extends Component {

    render() {

        if (this.props.page) {
            return (
                <div className="OuterNav">
                    <Link to='/home'><div>My NPCs</div></Link>
                    <Link to='/addnew'><div>Add New</div></Link>
                    <Link to='/search'><div>Search</div></Link>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    var { page } = state
    return {
        page
    }
}

export default connect(mapStateToProps)(NavBar)