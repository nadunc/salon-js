import React, {Component} from 'react'
import {Table, Divider, Header, Message, Button} from "semantic-ui-react";
import axios from "axios";
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from "../../common/commonVarList";

class StylistContentBookings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            isMessageVisible: false,
            message: ''
        }
    }


    componentDidMount() {
        this.loadBookingRequests();
    }

    loadBookingRequests(){
        axios.post(SERVER_ROUTES.GET_BOOKING_REQUESTS, {token: this.props.auth.user.token}).then((res) => {
            if (res.data.success) {
                this.setState({bookings: res.data.data})
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

    acceptBooking(e, bookingId) {
        console.log(bookingId)
    }

    rejectBooking(e, bookingId) {
        axios.patch(SERVER_ROUTES.REJECT_BOOKING, {token: this.props.auth.user.token, booking_id:bookingId}).then((res) => {
            if (res.data.success) {
                this.setMessage(true, true, res.data.message);
                this.loadBookingRequests();
            } else {
                this.setMessage(true, false, COMMON_ERROR_MESSAGE);
            }
        }).catch((err) => {
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }

    render() {
        return (
            <div>
                <h1 className='page-h1'>Booking Requests</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                {this.state.isMessageVisible && this.state.message}

                {this.state.bookings.length===0?<h3>No booking requests available.</h3>:(

                <Table celled padded textAlign='center'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Role</Table.HeaderCell>
                            <Table.HeaderCell>Salon</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>From</Table.HeaderCell>
                            <Table.HeaderCell>To</Table.HeaderCell>
                            <Table.HeaderCell>Accept</Table.HeaderCell>
                            <Table.HeaderCell>Reject</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        {this.state.bookings.map((booking, key) => {
                            let bookingId = booking.id
                            return (
                                <Table.Row key={key}>
                                    <Table.Cell>
                                        <Header as='h4'>
                                            {booking.role === 1 ? 'Stylist' : ''}
                                            {booking.role === 2 ? 'Educator' : ''}
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell singleLine>{booking.salon.name}</Table.Cell>
                                    <Table.Cell>
                                        {booking.date}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {booking.start}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {booking.end}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button icon='check' onClick={(e) => {
                                            this.acceptBooking(e, bookingId)
                                        }}/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button icon='times' onClick={(e) => {
                                            this.rejectBooking(e, bookingId)
                                        }}/>
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
                )}
            </div>
        );
    };
}

export default StylistContentBookings;