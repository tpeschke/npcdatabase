import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

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
        var {npc} = this.props
        if (!npc[1]) {
            axios.get('/api/usercharacter/default/' + npc[0]).then((req, res) => {
                this.setState({ level : req.data[0].charlevel, id: npc[0]})
                axios.patch('/api/viewNPC', this.state).then((req,res) => {
                    this.setState({viewedNPC:req.data[0]})
                })
            })
        } else {
            this.setState({level: npc[1], id: npc[0]})
            axios.patch('/api/viewNPC', {id: npc[0], level: npc[1]}).then((req,res) => {
                this.setState({viewedNPC:req.data[0]})
            })
        }
    }

    componentWillUnmount() {
        this.setState({id: null, level: null})
    }

    render(){

        console.log(this.state.viewedNPC)
        
        var {charactername, honor, fame, charlevel} = this.state.viewedNPC

        return (
            <div className="OuterComp">
                hello, {charactername}
                Level: {charlevel}
                Honor: {honor}
                Fame: {fame}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        npc: state.npc
    }
}

export default connect(mapStateToProps, null) (ViewNPC)