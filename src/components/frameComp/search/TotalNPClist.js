import React, {Component} from 'react'

export default class NPClist extends Component {
    render() {
        var {npcs} = this.props
        console.log(npcs)

        if (npcs) {
            var list = npcs.map((d,i) => {
                return  <div className="tableComp"
                            id={i%2 === 1 ? 'odd': null}
                                key={d.id}>
                        <p className="tableBox">{d.charactername}</p>
                        <p className="tableBox">{d.gamesystem}</p>
                        <p className="tableBox">{d.background}</p>
                        <p className="tableBox">{d.race}</p>
                        <button className="tableBox">Export</button>
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