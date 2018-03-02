import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class Page1 extends Component {

    render() {
        var {infoNPC, levelNPC} = this.props

        var handi = function () {
            if (+infoNPC.handi === 1) {
                return 'Right'
            } else if (+infoNPC.handi === 2) {
                return 'Left'
            } else { return 'Ambi'}
        }

        return (
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

                        <h1 className="character Gawd">{infoNPC.god}</h1>                        
                        <h1 className="character Handi">{handi()}</h1>                                             
                    </div>

                    <div className="characterAbilities">
                    </div>

                    <div className="characterWeapons">
                    </div>

                    <div className="characterRoseArea">
                    </div>

                    <div className="characterSpells">
                    </div>
                </div>
        )
    }
}