import React, { Component } from 'react'

import LevelDrop from './LevelDrop'

export default class NPClist extends Component {
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
                    <div className="tableBox"> <LevelDrop id={d.id}/> </div>
                    <button className="tableBox">View</button>
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