import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import React from 'react'

export default function AppRouter() {
    return (
        <div style={{ width: "100%" }}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
            </Switch>
        </div>
    )
}
