import React, {Component} from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {Container, Grid, Image} from 'semantic-ui-react'
import {CLIENT_ROUTES} from "../commonVarList";

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



class DashboardPageLayout extends Component {

    state = {
        // userRole: 'stylist',
        // userRole: 'salon',
        userRole: 'admin'
    }

    getRoutes() {
        if (this.state.userRole === 'stylist') {
            return (
                <Switch>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} component={StylistContentDashboard}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CALENDAR} component={StylistContentCalendar}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_PORTFOLIO} component={StylistContentPortfolio}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} component={StylistContentBookings}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} component={StylistContentSettings}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_PREFERENCES} component={StylistContentPreferences}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} component={StylistContentChangePassword}/>
                    <Route path="*" component={Error404}/>
                </Switch>
            );
        } else if (this.state.userRole === 'salon') {
            return (
                <Switch>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} component={SalonContentDashboard}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_PROFILE} component={SalonContentSalonProfile}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} component={SalonContentBookings}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} component={SalonContentSettings}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} component={SalonContentChangePassword}/>
                    <Route path="*" component={Error404}/>
                </Switch>
            );
        } else if (this.state.userRole === 'admin') {
            return (
                <Switch>
                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME}/>)}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} component={AdminContentDashboard}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_USERS} component={AdminContentUsers}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} component={AdminContentBookings}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} component={AdminContentSettings}/>
                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} component={AdminContentChangePassword}/>
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


        return (
            <div>
                <MainMenu/>

                <Container>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image size='small' circular centered className='text-center dashboard-sidebar-image'
                                       src='/images/user_placeholder.jpg'/>
                                <p className='text-center dashboard-sidebar-name'>Nadun Chamikara</p>
                                <DashboardSideMenu userRole={this.state.userRole}/>
                            </Grid.Column>
                            <Grid.Column width={2}>
                            </Grid.Column>
                            <Grid.Column width={11}>

                                {routes}

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </Container>
            </div>
        );
    };

}

export default DashboardPageLayout;