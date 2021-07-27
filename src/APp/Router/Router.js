import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostView from './../component/PostView/PostView';
import Detail from './../component/PostDetail/Detail';
import Form from './../component/PostForm/Form';

export default function Router() {
    return (
        <>
            <Switch>
                <Route path="/" component={PostView} exact={true} ></Route>
                <Route  path="/detail/:id" component={Detail} />
                <Route path="/form/:id" component={Form} />
            </Switch>
        </>
    )
}

