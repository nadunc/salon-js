import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider} from "semantic-ui-react";

class StylistContentDashboard extends Component {


    render() {

        return (
            <div>
                <h1 className='page-h1'>Dashboard</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                <Grid className="text-center">
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>25</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Upcoming Bookings</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2}/>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>$3500</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Total Earnings</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>103</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Bookings Completed</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2}/>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>
                                        <span>4.8 </span>
                                        <Icon name='star' color="yellow"/>
                                    </Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Average Rating</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        );
    };
}

export default StylistContentDashboard;