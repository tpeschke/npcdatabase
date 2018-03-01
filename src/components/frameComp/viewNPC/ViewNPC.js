import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

import Viewer from './WarriorPDF'

class ViewNPC extends Component {
    constructor() {
        super()

        this.state = {
            id: null,
            level: null,
            infoNPC: {
                agenum:16,
                alignment:"CG",
                background:"Bard",
                charactername:"Almog",
                eyes:"green",
                gamesystem:"HackMaster",
                god:null,
                hair:"brown",
                handi:"3",
                heightnum:"68in",
                mass:"165lbs",
                race:"Half-Elf",
                sex:"Male"
            },
            levelNPC : {
                charis:null,
                charlevel:3,
                con:null,
                dex:null,
                fame:10,
                honor:8,
                idcharacters:2,
                idleveltable:7,
                intel:null,
                lks:null,
                str:null,
                wis:null
            }
        }
    }

    componentDidMount() {
        var { npc } = this.props
        if (!npc[1]) {
            axios.get('/api/usercharacter/default/' + npc[0]).then((req, res) => {
                this.setState({ level: req.data[0].charlevel, id: npc[0] })
                axios.patch('/api/viewNPC', this.state).then((req, res) => {
                    console.log(req.data)
                    // this.setState({ viewedNPC: req.data[0] })
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

        console.log(this.state.infoNPC)

        var {infoNPC, levelNPC} = this.state

        return (
            <div className="OuterComp">
                <div className="characterSheet">
                    <div className="characterInfo">
                        <h1 className="character Name">{infoNPC.charactername}</h1>
                        <h1 className="character Background">{infoNPC.background}</h1>
                        <h1 className="character Level">{levelNPC.charlevel}</h1>
                        <h1 className="character Alignment">{infoNPC.alignment}</h1>

                        <h1 className="character Race">{infoNPC.race}</h1>
                        <h1 className="character Sex">{infoNPC.sex}</h1>
                        <h1 className="character Age">{infoNPC.agenum}</h1>
                        <h1 className="character Height">{infoNPC.heightnum}</h1>
                        <h1 className="character Weight">{infoNPC.mass}</h1>
                        <h1 className="character Hair">{infoNPC.hair}</h1> 
                        <h1 className="character Eyes">{infoNPC.eyes}</h1>
                                               
                    </div>
                </div>
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