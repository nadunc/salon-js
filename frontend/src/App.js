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
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePageLayout from  './layouts/HomepageLayout';
import SearchPageLayout from './layouts/SearchPageLayout';
import SignInPageLayout from './layouts/SignInPageLayout';
import SignUpPageLayout from './layouts/SignUpPageLayout';
import FAQPageLayout from './layouts/FAQPageLayout';
import TermsPageLayout from './layouts/TermsPageLayout';

import {CLIENT_ROUTES} from './commonVarList'

import './App.scss';




const AppRouter = () => (
    <Router>
        <div>
            <Route path={CLIENT_ROUTES.HOME} exact component={HomePageLayout} />
            <Route path={CLIENT_ROUTES.SEARCH} component={SearchPageLayout} />
            <Route path={CLIENT_ROUTES.SIGN_IN} component={SignInPageLayout} />
            <Route path={CLIENT_ROUTES.SIGN_UP} component={SignUpPageLayout} />
            <Route path={CLIENT_ROUTES.FAQ} component={FAQPageLayout} />
            <Route path={CLIENT_ROUTES.TERMS} component={TermsPageLayout} />
        </div>
    </Router>
);

export default AppRouter;