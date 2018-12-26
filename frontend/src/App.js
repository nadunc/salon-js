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
import * as authActions from "./actions/authActions";
import {AuthenticationTypes} from "./types";


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

    // componentDidMount() {
    //     if (localStorage.getItem('state')) {
    //         this.setState(JSON.parse(localStorage.getItem('state')));
    //     }
    //     console.log("componentDidMount")
    // }

    // state = {
    //     isAuth: false,
    //     user : null,
    // };
    //
    // setAuthState(authenticated, user){
    //     this.setState({isAuth: authenticated, user:user})
    // }

    // childProps = {
    //     isAuth: this.state.isAuth,
    //     user: this.state.user,
    //     setAuthState : this.setAuthState
    // }

    constructor(props){
        super(props)
        this.state = {
            fetchingLocalStorage : false,
        }
    }

    componentWillMount(){
        console.log('componentWillMount: App')
        console.log('App props state auth:', this.props.state.auth)

        if(!this.props.state.auth.isAuth){
            this.setState({fetchingLocalStorage:true})
            this.props.dispatch(authActions.getAuthFromLocalStorage())
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: App')
        console.log('App nextProps.state:', nextProps.state)

        if (nextProps.state.auth.action === AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_SUCCESS) {
            console.log('Local storage fetch success')
            this.setState({fetchingLocalStorage:false})
            console.log('App nextProps.state.auth:', nextProps.state.auth)
        }

        if (nextProps.state.auth.action === AuthenticationTypes.GET_AUTH_FROM_LOCAL_STORAGE_FAILED) {
            this.setState({fetchingLocalStorage:false})
        }
    }

    handleLogout(){
        this.props.dispatch(authActions.clearAuthFromLocalStorage())
    }


    render() {

        let auth = this.props.state.auth;


        // if (!auth.isAuth) {
        //     return (<Redirect to={CLIENT_ROUTES.SIGN_IN}/>);
        // }
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

        let isLoading = this.state.fetchingLocalStorage;
        let isAuth = this.props.state.auth.isAuth;
        console.log('isLoading: ', isLoading)

        return (


            <Router>
                {(isLoading) ? '' : (

                <Switch>
                    <Route exact path={CLIENT_ROUTES.HOME} component={HomePageLayout}/>
                    <Route path={CLIENT_ROUTES.SEARCH} component={SearchPageLayout}/>
                    <Route path={CLIENT_ROUTES.SIGN_IN} component={SignInPageLayout}/>
                    <Route path={CLIENT_ROUTES.SIGN_OUT} render={() => { this.handleLogout(); return(<Redirect to={CLIENT_ROUTES.HOME}/>)}}/>
                    {!isAuth && <Route path={CLIENT_ROUTES.SIGN_UP} component={SignUpPageLayout}/>}
                    <Route path={CLIENT_ROUTES.FAQ} component={FAQPageLayout}/>
                    <Route path={CLIENT_ROUTES.TERMS} component={TermsPageLayout}/>
                    <Route path={CLIENT_ROUTES.STYLIST} component={StylistPortfolioLayout}/>
                    {isAuth && <Route path={CLIENT_ROUTES.DASHBOARD} component={DashboardPageLayout}/>}
                    {isAuth && <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>}

                    <Route path='*' component={Error404}/>
                </Switch>
                )}

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