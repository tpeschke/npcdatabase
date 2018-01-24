import React, { Component } from 'react'

import { connect } from 'react-redux'
import { SETPAGE } from '../../../ducks/reducer'

class Search extends Component {

    componentDidMount() {
        this.props.SETPAGE(this.props.match.url)
    }

    render() {
        return (
            <div>
                Search
            </div>
        )
    }
}


export default connect(null, {SETPAGE}) (Search)