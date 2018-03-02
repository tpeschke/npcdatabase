import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { SETPAGE, SETNPC } from '../../../ducks/reducer'

import NPClist from './NPClist'
import SearchList from './SearchList'

class MyNPCs extends Component {
    constructor() {
        super()

        this.state = {
            npcs: [],
            search: false
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

    setLevel = (id, level) => {
        this.state.npcs.forEach(d => {
            if (d.id === id) {
                return Object.assign(d, {level : level})
            }
        })
    }

    render() {
        return (
            <div className="OuterComp">

                <button id="middleOptions"
                    onClick={_=>this.setState({search:!this.state.search})}
                    >Refine List</button>
                
                <SearchList 
                    show={this.state.search}/>

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
                        npcs = {this.state.npcs}
                        setLevel = {this.setLevel}
                        SETNPC = {this.props.SETNPC}/>
                </div>
            </div>
        )
    }
}


export default connect(null, {SETPAGE, SETNPC}) (MyNPCs)