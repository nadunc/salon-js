import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider} from "semantic-ui-react";

class DashboardBookings extends Component {


    render() {

        return (
            <div>
                <h1 className='page-h1'>Bookings</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>
            </div>
        );
    };
}

export default DashboardBookings;