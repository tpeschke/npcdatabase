import React, { Component } from 'react'

import { connect } from 'react-redux'
import { SETPAGE } from '../../../ducks/reducer'

class AddNew extends Component {

    componentDidMount() {
        this.props.SETPAGE(this.props.match.url)
    }

    render() {

        return (
            <div className="OuterComp">
                <div className="bucketComp">
                AddNew
                </div>
            </div>
        )
    }
}

export default connect(null, {SETPAGE}) (AddNew)