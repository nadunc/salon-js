import React, {Component} from 'react'
import {Button, Card, Image, Grid, Statistic, Icon} from "semantic-ui-react";
import AddFeedbackModal from "./AddFeedbackModal";
import moment from 'moment'

class SalonBooking extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state={
            isModalVisible: false,
        }
    }

    closeModal() {
        this.setState({isModalVisible: false})
    }

    addFeedbackConfirmation(isAdded){
        this.props.addFeedbackConfirmation(isAdded)
    }



    render() {

        let booking = this.props.booking;

        return (
            <Card fluid>
                <Card.Content>

                    <Grid divided>
                        <Grid.Row>
                            <Grid.Column width={4} className="text-center">
                                <p className='salon-booking-date'>
                                    {moment(booking.date).format('ll')}
                                </p>
                                <p className='salon-booking-time'>
                                    {moment(booking.date + ' ' + booking.start).format('LT')} - {moment(booking.date + ' ' + booking.end).format('LT')}
                                </p>
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <p className='salon-booking-stylist-name'>
                                    {booking.stylist.firstname} {booking.stylist.lastname}
                                </p>
                                <p className='salon-booking-role'>Hired as :
                                    {booking.role === 1 ? ' Stylist' : 'Educator'}
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4} className="text-center">

                                {moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) > 0)
                                && <p className='salon-booking-status salon-booking-status-completed'>Completed <Icon
                                    name='check circle'/></p>}

                                {moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) === 0 && booking.accepted===true)
                                && <p className='salon-booking-status salon-booking-status-require-feedback' onClick={()=>{this.setState({isModalVisible:true})}}>Give a Feedback <Icon
                                    name='bell'/></p>}

                                {moment().isBefore(booking.date + ' ' + booking.end) && booking.accepted===true
                                && <p className='salon-booking-status salon-booking-status-upcoming'>Upcoming <Icon
                                    name='bell'/></p>}

                                {moment().isBefore(booking.date + ' ' + booking.end) && booking.accepted===null
                                && <p className='salon-booking-status salon-booking-status-waiting-for-stylist'>Waiting for Approval <Icon
                                    name='bell'/></p>}


                                {booking.accepted===false
                                && <p className='salon-booking-status salon-booking-status-rejected'>Rejected <Icon
                                    name='ban'/></p>}

                                {moment(booking.date + ' ' + booking.end).isBefore(moment()) && booking.accepted===null
                                && <p className='salon-booking-status salon-booking-status-expired'>Expired <Icon
                                    name='bell'/></p>}

                                {/*<p className='salon-booking-status salon-booking-status-completed'>Completed <Icon name='check circle'/></p>*/}

                                <p className='salon-booking-price'>
                                    ${booking.price}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>


                <AddFeedbackModal open={this.state.isModalVisible} closeModal={this.closeModal.bind(this)}
                                 booking={booking} addFeedbackConfirmation={this.addFeedbackConfirmation.bind(this)}
                                 auth={this.props.auth}/>
            </Card>
        );
    };
}

export default SalonBooking;