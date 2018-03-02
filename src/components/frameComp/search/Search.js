import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { SETPAGE } from '../../../ducks/reducer'

import TotalNPClist from './TotalNPClist'
import SearchList from '../myNPCs/SearchList'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            npcs: [],
            search: false
        }
    }

    componentDidMount() {
        this.props.SETPAGE(this.props.match.url)
        axios.get('/api/character').then((req,res) => {
            this.setState({npcs: req.data})
        })
    }

    componentWillUnmount() {
        this.setState({npcs: []})
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
                    <TotalNPClist 
                        npcs = {this.state.npcs}/>
                </div>
            </div>
        )
    }
}


export default connect(null, {SETPAGE}) (Search)