import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LogIn from './components/LogIn'
import Frame from './components/Frame'

import AddNew from './components/frameComp/addNew/addNew'
import MyNPCs from './components/frameComp/myNPCs/MyNPCs'
import Search from './components/frameComp/search/Search'

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact path='/' component={LogIn} />
                    <Route
                        path='/home' component={Frame} />
                </Switch>
            </div>
        )
    }
}

export class mainAppRoutes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={MyNPCs} />
                    <Route path='/home/search' component={Search} />
                    <Route path='/home/addnew' component={AddNew} />
                </Switch>
            </div>
        )
    }
}