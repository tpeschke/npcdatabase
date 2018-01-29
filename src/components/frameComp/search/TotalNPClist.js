import React, {Component} from 'react'

export default class TotalNPClist extends Component {
    render() {
        var {npcs} = this.props

        if (npcs) {
            var list = npcs.map((d,i) => {
                return  <div className="tableComp"
                            id={i%2 === 1 ? 'odd': null}
                                key={d.id}>
                        <p className="tableBox">{d.charactername}</p>
                        <p className="tableBox">{d.gamesystem}</p>
                        <p className="tableBox">{d.background}</p>
                        <p className="tableBox">{d.race}</p>
                        <h1 className="tableBox">level</h1>
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