import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

import Page1 from './Page1'
import Page2 from './Page2'

class ViewNPC extends Component {
    constructor() {
        super()

        this.state = {
            page: true,
            id: null,
            level: null,
            infoNPC: {},
            levelNPC : {}
        }
    }

    componentDidMount() {
        var { npc } = this.props
        if (!npc[1]) {
            axios.get('/api/usercharacter/default/' + npc[0]).then((req, res) => {
                this.setState({ level: req.data[0].charlevel, id: npc[0] })
                axios.patch('/api/viewNPC', this.state).then((req, res) => {
                    this.setState({ infoNPC: req.data[0][0], levelNPC: req.data[1][0] })
                })
            })
        } else {
            this.setState({ level: npc[1], id: npc[0] })
            axios.patch('/api/viewNPC', { id: npc[0], level: npc[1] }).then((req, res) => {
                this.setState({ viewedNPC: req.data[0] })
            })
        }
    }

    changePlay = () => {
        if (this.state.page) {
            return <Page1
            levelNPC={this.state.levelNPC} 
            infoNPC={this.state.infoNPC}/>
        } 
            return <Page2
            levelNPC={this.state.levelNPC} 
            infoNPC={this.state.infoNPC}/>
    }

    render() {

        return (
            <div className="OuterComp">
                <div>
                    <button 
                        onClick={_=>this.setState({page:!this.state.page})}>
                        {this.state.page?'2nd Page':'1st Page'}</button>
                    <button>Edit</button>
                </div>

                {this.changePlay()}
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