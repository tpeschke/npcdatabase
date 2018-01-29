import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { SETPAGE } from '../../../ducks/reducer'

import NPClist from './NPClist'

class MyNPCs extends Component {
    constructor() {
        super()

        this.state = {
            npcs: []
        }
    }

    componentDidMount() {
        this.props.SETPAGE(this.props.match.url)
        axios.get('/api/usercharacter').then((req,res) => {
            this.setState({npcs: req.data})
        })
    }

    componentWillUnmount() {
        this.setState({npcs: []})
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
                    >Refine List</button>
                
                <div className="tableComp headingComp">
                    <h1 className="tableBox" id="headerFirst">Name</h1>
                    <h1 className="tableBox">System</h1>
                    <h1 className="tableBox">Class/Background</h1>
                    <h1 className="tableBox">Race</h1>
                    <h1 className="tableBox">level(s)</h1>
                    <h1 className="tableBox"></h1>
                </div>
                <div>
                    <NPClist 
                        npcs = {this.state.npcs}/>
                </div>
            </div>
        )
    }
}


export default connect(null, {SETPAGE}) (MyNPCs)