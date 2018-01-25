import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class NavBar extends Component {

    render() {

        if (this.props.page) {
            return (
                <div className="OuterNav">
                    <div className="InnerNavLeft">
                        <Link style={{ textDecoration: 'none' }}
                            to='/home'>
                                <h1 id={this.props.page==='/home'?'active':null}>
                                    Home</h1></Link></div>
                    <div className="InnerNavRight">
                        <Link style={{ textDecoration: 'none' }}
                            to='/addnew'>
                                <h1 id={this.props.page==='/addnew'?'active':null}>
                                    Add New</h1></Link>
                        <h1>|</h1>
                        <Link style={{ textDecoration: 'none' }}
                            to='/search'>
                                <h1  id={this.props.page==='/search'?'active':null}>Search</h1></Link>
                    </div>
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