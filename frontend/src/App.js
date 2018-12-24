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


import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

import HomePageLayout from './layouts/HomepageLayout';
import SearchPageLayout from './layouts/SearchPageLayout';
import SignInPageLayout from './layouts/SignInPageLayout';
import SignUpPageLayout from './layouts/SignUpPageLayout';
import FAQPageLayout from './layouts/FAQPageLayout';
import TermsPageLayout from './layouts/TermsPageLayout';
import StylistPortfolioLayout from './layouts/StylistPortfolioLayout';
import DashboardPageLayout from './layouts/DashboardPageLayout';
import Error404 from './components/Error404';

import {CLIENT_ROUTES} from './common/commonVarList'

import './App.scss';
import connect from "react-redux/es/connect/connect";


//
// const AppRouter = () => (
//     <Provider store={store}>
//         <Router>
//             <Switch>
//                 <Route exact path={CLIENT_ROUTES.HOME} component={HomePageLayout}/>
//                 <Route path={CLIENT_ROUTES.SEARCH} component={SearchPageLayout}/>
//                 <Route path={CLIENT_ROUTES.SIGN_IN} component={SignInPageLayout}/>
//                 <Route path={CLIENT_ROUTES.SIGN_UP} component={SignUpPageLayout}/>
//                 <Route path={CLIENT_ROUTES.FAQ} component={FAQPageLayout}/>
//                 <Route path={CLIENT_ROUTES.TERMS} component={TermsPageLayout}/>
//                 <Route path={CLIENT_ROUTES.STYLIST} component={StylistPortfolioLayout}/>
//                 <Route path={CLIENT_ROUTES.DASHBOARD} component={DashboardPageLayout}/>
//                 <Route exact path={CLIENT_ROUTES.DASHBOARD}
//                        render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
//                 <Route path='*' component={Error404}/>
//
//
//             </Switch>
//         </Router>
//     </Provider>
// );
//
// export default AppRouter;


class App extends Component {

    // componentWillMount() {
    //     if(localStorage.getItem('user')){
    //         // this.props.state.user = sessionStorage.getItem('user');
    //         console.log(localStorage.getItem('user'));
    //         this.setState({user: localStorage.getItem('user')})
    //     }
    // }
    //
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     // if (this.props.userID !== prevProps.userID) {
    //     //     this.fetchData(this.props.userID);
    //     // }
    //
    //     if (this.props.state.user !== prevProps.state.user) {
    //             localStorage.setItem('user', this.props.state.user);
    //             console.log("App", this.props.state.user)
    //     }
    //
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.state.user !== prevState.state.user) {
    //         //         // return { user: nextProps.state.user};
    //         //sessionStorage.setItem('auth', data);
    //         console.log("App", this.state.user)
    //     }
    // }

    state = {}

    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState(JSON.parse(localStorage.getItem('state')));
        }
        console.log("componentDidMount")
    }



    render() {

        let user = this.props.state.user;

        // console.log(JSON.parse(localStorage.getItem('user')))


        // return (
        //
        //     <Router>
        //         <Switch>
        //             <Route exact path={CLIENT_ROUTES.HOME} component={HomePageLayout}/>
        //             <Route path={CLIENT_ROUTES.SEARCH} component={SearchPageLayout}/>
        //             {!user.isAuth && <Route path={CLIENT_ROUTES.SIGN_IN} component={SignInPageLayout}/>}
        //             {!user.isAuth && <Route path={CLIENT_ROUTES.SIGN_UP} component={SignUpPageLayout}/>}
        //             <Route path={CLIENT_ROUTES.FAQ} component={FAQPageLayout}/>
        //             <Route path={CLIENT_ROUTES.TERMS} component={TermsPageLayout}/>
        //             <Route path={CLIENT_ROUTES.STYLIST} component={StylistPortfolioLayout}/>
        //
        //
        //             {user.isAuth && <Route path={CLIENT_ROUTES.DASHBOARD} component={DashboardPageLayout}/>}
        //             {user.isAuth && <Route exact path={CLIENT_ROUTES.DASHBOARD}
        //                                    render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>}
        //
        //             <Route path='*' component={Error404}/>
        //
        //
        //         </Switch>
        //     </Router>
        // );

        return (

            <Router>
                <Switch>
                    <Route exact path={CLIENT_ROUTES.HOME} component={HomePageLayout}/>
                    <Route path={CLIENT_ROUTES.SEARCH} component={SearchPageLayout}/>
                    <Route path={CLIENT_ROUTES.SIGN_IN} component={SignInPageLayout}/>
                    <Route path={CLIENT_ROUTES.SIGN_UP} component={SignUpPageLayout}/>
                    <Route path={CLIENT_ROUTES.FAQ} component={FAQPageLayout}/>
                    <Route path={CLIENT_ROUTES.TERMS} component={TermsPageLayout}/>
                    <Route path={CLIENT_ROUTES.STYLIST} component={StylistPortfolioLayout}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD} component={DashboardPageLayout}/>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>

                    <Route path='*' component={Error404}/>

                </Switch>
            </Router>
        );
    }
}

// export default App;


function mapStateToProps(state) {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(App);