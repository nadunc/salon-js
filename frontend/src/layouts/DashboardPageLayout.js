import React, {Component} from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {Container, Grid, Image} from 'semantic-ui-react'
import {CLIENT_ROUTES} from "../commonVarList";

import DashboardSideMenu from '../components/DashboardSideMenu';
import Review from '../components/Review';
import Error404 from '../components/Error404';
import MainMenu from '../components/MainMenu';

import DashboardHome from '../components/stylistDashboard/DashboardHome';
import DashboardChangePassword from '../components/stylistDashboard/DashboardChangePassword';
import DashboardPreferences from '../components/stylistDashboard/DashboardPreferences';
import DashboardSettings from '../components/stylistDashboard/DashboardSettings';
import DashboardBookings from '../components/stylistDashboard/DashboardBookings';
import DashboardPortfolio from '../components/stylistDashboard/DashboardPortfolio';
import DashboardCalendar from '../components/stylistDashboard/DashboardCalendar';



class DashboardPageLayout extends Component {


    render() {

        return (
            <div>
                <MainMenu/>

                <Container>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image size='small' circular centered className='text-center dashboard-sidebar-image' src='/images/user_placeholder.jpg'/>
                                <p className='text-center dashboard-sidebar-name'>Nadun Chamikara</p>
                                <DashboardSideMenu/>
                            </Grid.Column>
                            <Grid.Column width={2}>
                            </Grid.Column>
                            <Grid.Column width={11}>


                                <Switch>
                                    <Route exact path={CLIENT_ROUTES.DASHBOARD} render={() => (<Redirect to={CLIENT_ROUTES.DASHBOARD_HOME} />)}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_HOME} component={DashboardHome}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_CALENDAR} component={DashboardCalendar}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_PORTFOLIO} component={DashboardPortfolio}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_BOOKINGS} component={DashboardBookings}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_SETTINGS} component={DashboardSettings}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_PREFERENCES} component={DashboardPreferences}/>
                                    <Route path={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} component={DashboardChangePassword}/>
                                    <Route path="*" component={Error404}/>
                                </Switch>


                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                </Container>
            </div>
        );
    };

}

export default DashboardPageLayout;