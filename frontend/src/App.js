// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.scss';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
// import HomePageLayout from './layouts/HomepageLayout'
//
// class App extends Component {
//     render() {
//         return (
//
//             <HomePageLayout/>
//         );
//     }
// }
//
// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import HomePageLayout from  './layouts/HomepageLayout';
import SearchPageLayout from './layouts/SearchPageLayout';
import SignInPageLayout from './layouts/SignInPageLayout';
import SignUpPageLayout from './layouts/SignUpPageLayout';
import FAQPageLayout from './layouts/FAQPageLayout';
import TermsPageLayout from './layouts/TermsPageLayout';
import StylistPortfolioLayout from './layouts/StylistPortfolioLayout';
import DashboardPageLayout from './layouts/DashboardPageLayout';
import Error404 from './components/Error404';

import Review from './components/Review';

import {CLIENT_ROUTES} from './commonVarList'

import './App.scss';




const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path={CLIENT_ROUTES.HOME} component={HomePageLayout} />
            <Route path={CLIENT_ROUTES.SEARCH} component={SearchPageLayout} />
            <Route path={CLIENT_ROUTES.SIGN_IN} component={SignInPageLayout} />
            <Route path={CLIENT_ROUTES.SIGN_UP} component={SignUpPageLayout} />
            <Route path={CLIENT_ROUTES.FAQ} component={FAQPageLayout} />
            <Route path={CLIENT_ROUTES.TERMS} component={TermsPageLayout} />
            <Route path={CLIENT_ROUTES.STYLIST} component={StylistPortfolioLayout} />
            <Route path={CLIENT_ROUTES.DASHBOARD} component={DashboardPageLayout}/>
            <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME} />)} />
            <Route path='*' component={Error404} />


        </Switch>
    </Router>
);

export default AppRouter;