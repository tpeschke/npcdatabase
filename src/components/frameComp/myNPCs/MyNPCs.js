import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { SETPAGE } from '../../../ducks/reducer'

class MyNPCs extends Component {

    componentDidMount() {
        this.props.SETPAGE(this.props.match.url)
    }

    test = () => {
        axios.get('/api/test').then((req, res) => {
            console.log(req)
        })
    }

    render() {
        return (
            <div className="OuterComp">

                <button id="middleOptions"
                    onClick={_=>this.test()}
                    >Search My Characters</button>
                
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