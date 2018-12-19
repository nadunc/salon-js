// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePageLayout from  './layouts/HomepageLayout';
import SearchPageLayout from './layouts/SearchPageLayout';



const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={HomePageLayout} />
            <Route path="/search/" component={SearchPageLayout} />
            {/*<Route path="/users/" component={Users} />*/}
        </div>
    </Router>
);

export default AppRouter;