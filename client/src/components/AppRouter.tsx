import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { HOMEPAGE_ROUTE } from "../utils/consts";
import { adminRoutes, publicRoutes, privateRoutes } from './../routes';


function AppRouter({ isLogged }: any) {
    let role = 'USER';
    return (
        <Switch>
            {role === 'ADMIN' && adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {isLogged && privateRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={HOMEPAGE_ROUTE} />
        </Switch>
    )
}

function mapStateToProps(state: any): any{
    return {
        isLogged: state.isLogged.isLogged
    }
}

export default connect(mapStateToProps, null)(AppRouter);