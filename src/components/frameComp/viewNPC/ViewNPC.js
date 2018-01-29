import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

class ViewNPC extends Component {
    constructor() {
        super()

        this.state = {
            id: null,
            level: null
        }
    }

    componentDidMount() {
        var {npc} = this.props
        if (!npc[1]) {
            axios.get('/api/usercharacter/default/' + npc[0]).then((req, res) => {
                this.setState({ level : req.data[0].charlevel, id: npc[0]})
            })
        } else {
            this.setState({level: npc[1], id: npc[0]})
        }
    }

    render(){

        return (
            <div className="OuterComp">
                hello, {this.props.match.params.name}
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