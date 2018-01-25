import React, { Component } from 'react'

import { connect } from 'react-redux'
import { SETPAGE } from '../../../ducks/reducer'

class MyNPCs extends Component {

    componentDidMount() {
        this.props.SETPAGE(this.props.match.url)
    }

    render() {
        return (
            <div className="OuterComp">
                <h1 id="middleOptions">Search My Characters</h1>
                <div className="tableComp headingComp">
                    <h1 id="headerFirst">Name</h1>
                    <h1>System</h1>
                    <h1>Class/Background</h1>
                    <h1>Race</h1>
                    <h1>Export</h1>
                </div>
                <div>

                </div>
            </div>
        )
    }
}


export default connect(null, {SETPAGE}) (MyNPCs)