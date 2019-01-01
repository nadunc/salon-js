import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider, Message} from "semantic-ui-react";
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from "../../common/commonVarList";
import axios from "axios/index";
import moment from "moment/moment";

class SalonContentDashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            message : '',
            isMessageVisible : false,
            bookings:[]
        }
    }

    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }

    componentDidMount() {
        let user = this.props.auth.user

        axios.post(SERVER_ROUTES.GET_BOOKINGS_BY_SALON, {
            token: user.token
        }).then((res) => {
            if (res.data.success) {
                this.setState({bookings: res.data.data});

            } else {
                this.setMessage(true, false, res.data.message);
            }
        }).catch((err) => {
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }

    render() {

        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        let completedBookingCount = 0, upcomingBookingCount = 0, feedbackBookingCount = 0, waitingBookingCount = 0

        for (let i = 0; i < this.state.bookings.length; i++) {

            let booking = this.state.bookings[i]

            // completed
            if (moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) > 0)) {
                completedBookingCount++
            }

            // needs feedback
            if (moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) === 0 && booking.accepted === true)) {
                feedbackBookingCount++
            }

            // upcoming
            if (moment().isBefore(booking.date + ' ' + booking.end) && booking.accepted === true) {
                upcomingBookingCount++
            }

            // waiting for approval
            if (moment().isBefore(booking.date + ' ' + booking.end) && booking.accepted === null) {
                waitingBookingCount++
            }
        }

        return (
            <div>
                <h1 className='page-h1'>Dashboard</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                {isMessageVisible && message}

                <Grid className="text-center">
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>{upcomingBookingCount}</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Upcoming Bookings</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2}/>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>{feedbackBookingCount}</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Bookings Need Feedbacks</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>{completedBookingCount}</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Bookings Completed</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2}/>
                        <Grid.Column width={7}/>

                    </Grid.Row>
                </Grid>

            </div>
        );
    };
}

export default SalonContentDashboard;