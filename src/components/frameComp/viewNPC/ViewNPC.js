import React, { Component } from 'react'


export default class ViewNPC extends Component {

    render(){
        return (
            <div className="OuterComp">
                hello, {this.props.match.params.name}
            </div>
        )
    }
}