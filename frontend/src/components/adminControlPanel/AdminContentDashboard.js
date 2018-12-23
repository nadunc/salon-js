import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider} from "semantic-ui-react";

class AdminContentDashboard extends Component {


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
                                    <Statistic.Value>25155</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Registered Stylists</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2}/>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>153</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Registered Salons</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </div>
        );
    };
}

export default AdminContentDashboard;