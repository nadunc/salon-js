import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider, Message} from "semantic-ui-react";
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from "../../common/commonVarList";
import axios from "axios/index";
import moment from "moment/moment";

class StylistContentDashboard extends Component {


    constructor(props){
        super(props);

        this.state = {
            bookings : [],
            message: '',
            isMessageVisible: false,
            rating: 0
        }
    }


    componentDidMount(){
        let user = this.props.auth.user

        axios.post(SERVER_ROUTES.GET_BOOKINGS_BY_STYLIST, {
            stylist_id: user.stylist.id,
            token: user.token
        }).then((res) => {
            if (res.data.success) {
                this.setState({bookings:res.data.data});

            } else {
                this.setMessage(true, false, res.data.message);
            }
        }).catch((err) => {
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })


        axios.get(SERVER_ROUTES.GET_RATING_BY_STYLIST.replace(':id', user.stylist.id)).then((res) => {
            if (res.data.success) {
                this.setState({rating: res.data.data[0].rating})
            } else {
                this.setMessage(true, false, COMMON_ERROR_MESSAGE);
            }
        }).catch((err) => {
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }


    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }


    render() {
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        let completedBookingCount = 0, upcomingBookingCount = 0, waitingBookingCount = 0, totalEarnings = 0

        for (let i = 0; i < this.state.bookings.length; i++) {

            let booking = this.state.bookings[i]
            // completed
            if (moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) > 0)) {
                completedBookingCount++
                totalEarnings +=  booking.price

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
                                    <Statistic.Value>{waitingBookingCount}</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Bookings need Approval</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={2}/>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>{upcomingBookingCount}</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Upcoming Bookings</Statistic.Label>
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
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>${totalEarnings}</Statistic.Value>
                                    <Statistic.Label className="dashboard-statistic-label">Total Earnings</Statistic.Label>
                                </Statistic>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Segment>
                                <Statistic>
                                    <Statistic.Value>
                                        <span>{Math.round( this.state.rating * 10 ) / 10}</span>
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