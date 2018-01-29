import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LogIn from './components/LogIn'

import AddNew from './components/frameComp/addNew/addNew'
import MyNPCs from './components/frameComp/myNPCs/MyNPCs'
import Search from './components/frameComp/search/Search'
import ViewNPC from './components/frameComp/viewNPC/ViewNPC'

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact path='/' component={LogIn} />
                    <Route 
                        path='/home' component={MyNPCs} />
                    <Route 
                        path='/search' component={Search} />
                    <Route 
                        path='/addnew' component={AddNew} />
                    <Route 
                        path='/:name' component={ViewNPC} />
                </Switch>
            </div>
        )
    }
}
