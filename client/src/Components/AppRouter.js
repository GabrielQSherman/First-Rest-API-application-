import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import React from 'react'

export default function AppRouter() {
    return (
        <div
            style={{
                textAlign: 'center',
            }}
        >
            <NavBar />
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