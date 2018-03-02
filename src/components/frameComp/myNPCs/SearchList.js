import React, { Component } from 'react'


export default class SearchList extends Component {

    render() {
        var { show } = this.props

        return (
            <div className={show?"searchDropdown": "searchDropdown closed"}>
                <div className="searchInner">
                </div>
            </div>
        )
    }
}