import React, { Component } from 'react'

import axios from 'axios'

export default class LevelDrop extends Component {
    constructor() {
        super()

        this.state = {
            level: []
        }
    }

    componentDidMount() {
        axios.get('/api/usercharacter/level/' + this.props.id).then((req, res) => {
            this.setState({level: req.data})
        })
    }

    render() {
        var {level} = this.state

        if (level) {
            var options = level.map((d,i) => {
                return (
                    <option key={d.charlevel.toString() + this.props.id.toString()}>
                    {d.charlevel}</option>)
            })
        }

        return (
            <div>
                <select>
                    {options}
                </select>
            </div>
        )
    }
}