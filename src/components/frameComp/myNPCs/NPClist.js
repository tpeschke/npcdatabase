import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import LevelDrop from './LevelDrop'

export default class NPClist extends Component {

    createNPC = (id, level) => {
        var tempArr = [id, +level]

        this.props.SETNPC(tempArr)
    }

    render() {
        var { npcs } = this.props

        if (npcs) {
            var list = npcs.map((d, i) => {
                return <div className="tableComp"
                    id={i % 2 === 1 ? 'odd' : null}
                    key={d.id}>
                    <p className="tableBox">{d.charactername}</p>
                    <p className="tableBox">{d.gamesystem}</p>
                    <p className="tableBox">{d.background}</p>
                    <p className="tableBox">{d.race}</p>
                    <div className="tableBox"> 
                        <LevelDrop id={d.id} setLevel={this.props.setLevel}/> </div>
                    <Link style={{ textDecoration: 'none' }} to={`/${d.charactername}`}>
                        <button className="tableBox"
                            onClick={_=> this.createNPC(d.id, d.level)}
                            >View</button> </Link>
                </div>
            })
        }

        return (
            <div className="tableBottom">
                {list}
            </div>
        )
    }
}