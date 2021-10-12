import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HOMEPAGE_ROUTE } from "../utils/consts";
import { authRoutes, publicRoutes } from './../routes';

function AppRouter() {
    let isAuth = true;
    return (
        <Switch>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOMEPAGE_ROUTE} />
        </Switch>
    )
}

export default AppRouter;