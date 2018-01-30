import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

import Viewer from './WarriorPDF'
import './ViewNPC.css'

class ViewNPC extends Component {
    constructor() {
        super()

        this.state = {
            id: null,
            level: null,
            viewedNPC: []
        }
    }

    componentDidMount() {
        var { npc } = this.props
        if (!npc[1]) {
            axios.get('/api/usercharacter/default/' + npc[0]).then((req, res) => {
                this.setState({ level: req.data[0].charlevel, id: npc[0] })
                axios.patch('/api/viewNPC', this.state).then((req, res) => {
                    this.setState({ viewedNPC: req.data[0] })
                })
            })
        } else {
            this.setState({ level: npc[1], id: npc[0] })
            axios.patch('/api/viewNPC', { id: npc[0], level: npc[1] }).then((req, res) => {
                this.setState({ viewedNPC: req.data[0] })
            })
        }
    }

    render() {

        console.log(this.state.viewedNPC)

        return (
            <div className="OuterComp">
                
                {/* <Viewer 
                    NPC = {this.state.viewedNPC}/> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        npc: state.npc
    }
}

export default connect(mapStateToProps, null)(ViewNPC)