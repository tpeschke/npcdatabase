import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

import Page1 from '../viewNPC/Page1'
import Page2 from '../viewNPC/Page2'

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