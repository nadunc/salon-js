import React, {Component} from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {Container, Grid, Image} from 'semantic-ui-react'
import {CLIENT_ROUTES} from "../common/commonVarList";

import DashboardSideMenu from '../components/DashboardSideMenu';
import Error404 from '../components/Error404';
import MainMenu from '../components/MainMenu';


import StylistContentDashboard from '../components/stylistControlPanel/StylistContentDashboard';
import StylistContentChangePassword from '../components/stylistControlPanel/StylistContentChangePassword';
import StylistContentPreferences from '../components/stylistControlPanel/StylistContentPreferences';
import StylistContentSettings from '../components/stylistControlPanel/StylistContentSettings';
import StylistContentBookings from '../components/stylistControlPanel/StylistContentBookings';
import StylistContentPortfolio from '../components/stylistControlPanel/StylistContentPortfolio';
import StylistContentCalendar from '../components/stylistControlPanel/StylistContentCalendar';
import StylistContentBookingRequests from '../components/stylistControlPanel/StylistContentBookingRequests';


import SalonContentDashboard from '../components/salonControlPanel/SalonContentDashboard';
import SalonContentSalonProfile from '../components/salonControlPanel/SalonContentSalonProfile';
import SalonContentBookings from '../components/salonControlPanel/SalonContentBookings';
import SalonContentSettings from '../components/salonControlPanel/SalonContentSettings';
import SalonContentChangePassword from '../components/salonControlPanel/SalonContentChangePassword';


import AdminContentDashboard from '../components/adminControlPanel/AdminContentDashboard';
import AdminContentUsers from '../components/adminControlPanel/AdminContentUsers';
import AdminContentBookings from '../components/adminControlPanel/AdminContentBookings';
import AdminContentSettings from '../components/adminControlPanel/AdminContentSettings';
import AdminContentChangePassword from '../components/adminControlPanel/AdminContentChangePassword';
import connect from "react-redux/es/connect/connect";
import * as commonMethods from '../common/commonMethods'
import {AuthenticationTypes} from "../types";
import Footer from "../components/Footer";


class DashboardPageLayout extends Component {

    getRoutes() {

        let userType = this.props.auth.user.userType;

        if (commonMethods.isUserTypeStylist(userType)) {
            return (
                <Switch>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} render={() => (<StylistContentDashboard auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CALENDAR} render={() => (<StylistContentCalendar auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_PORTFOLIO} render={() => (<StylistContentPortfolio auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKING_REQUESTS} render={() => (<StylistContentBookingRequests auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} render={() => (<StylistContentBookings auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} render={() => (<StylistContentSettings auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_PREFERENCES} render={() => (<StylistContentPreferences auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} render={() => (<StylistContentChangePassword auth={this.props.auth}/>)}/>
                    <Route path="*" component={Error404}/>
                </Switch>
            );
        } else if (commonMethods.isUserTypeSalon(userType)) {
            return (
                <Switch>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} render={() => (<SalonContentDashboard auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_PROFILE} render={() => (<SalonContentSalonProfile auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} render={() => (<SalonContentBookings auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} render={() => (<SalonContentSettings auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} render={() => (<SalonContentChangePassword auth={this.props.auth}/>)}/>
                    <Route path="*" component={Error404}/>
                </Switch>
            );
        } else if (commonMethods.isUserTypeAdmin(userType)) {
            return (
                <Switch>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} render={() => (<AdminContentDashboard auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_USERS} render={() => (<AdminContentUsers auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} render={() => (<AdminContentBookings auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} render={() => (<AdminContentSettings auth={this.props.auth}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} render={() => (<AdminContentChangePassword auth={this.props.auth}/>)}/>
                    <Route path="*" component={Error404}/>
                </Switch>
            );
        } else {
            return (
                <Switch>
                    <Route path="*" component={Error404}/>
                </Switch>
            );
        }

    }

    render() {


        let routes = this.getRoutes();
        let userType = this.props.auth.user.userType;
        let user = this.props.auth.user;
        let name, image;

        if(commonMethods.isUserTypeStylist(userType)){
            name = user.stylist.firstname + ' ' + user.stylist.lastname
            image = (user.stylist.image === '' || user.stylist.image === null) ? '/images/user_placeholder.jpg' : user.stylist.image;
        }else if (commonMethods.isUserTypeSalon(userType)){
            name = user.salon.name
            image = (user.salon.image === '' || user.salon.image === null) ? '/images/salon_placeholder.png' : user.salon.image;
        } else if(commonMethods.isUserTypeAdmin(userType)){

        }


        return (
            <div>
                <MainMenu/>

                <Container className='main-content-container'>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image size='small' circular centered className='text-center dashboard-sidebar-image' src={image}/>
                                <p className='text-center dashboard-sidebar-name'>{name}</p>
                                <DashboardSideMenu userType={userType}/>
                            </Grid.Column>
                            <Grid.Column width={2}>
                            </Grid.Column>
                            <Grid.Column width={11}>

                                {routes}

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </Container>

                <Footer/>
            </div>
        );
    };

}

// export default DashboardPageLayout;


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(DashboardPageLayout);