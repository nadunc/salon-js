import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider, Checkbox, Message, Form} from "semantic-ui-react";
import SalonBooking from "../SalonBooking";
import axios from "axios/index";
import {SERVER_ROUTES, COMMON_ERROR_MESSAGE} from "../../common/commonVarList";
import moment from 'moment'

class SalonContentBookings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookings: [],
            message: '',
            isMessageVisible: false,

            filter_completed: true,
            filter_upcoming: true,
            filter_rejected: true,
            filter_expired: true,
            filter_waiting: true,
            filter_feedback: true,
        }

        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.toggleUpcoming = this.toggleUpcoming.bind(this)

        this.toggleRejected = this.toggleRejected.bind(this)
        this.toggleExpired = this.toggleExpired.bind(this)
        this.toggleWaiting = this.toggleWaiting.bind(this)
        this.toggleFeedback = this.toggleFeedback.bind(this)
    }


    componentDidMount() {
        this.fetchBookings()
    }

    fetchBookings(){
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

    addFeedbackConfirmation(isAdded){
        if(isAdded){
            this.fetchBookings();
        }
    }


    toggleCompleted() {
        this.setState({filter_completed: !this.state.filter_completed})
    }

    toggleUpcoming() {
        this.setState({filter_upcoming: !this.state.filter_upcoming})
    }

    toggleFeedback() {
        this.setState({filter_feedback: !this.state.filter_feedback})
    }

    toggleWaiting() {
        this.setState({filter_waiting: !this.state.filter_waiting})
    }

    toggleRejected() {
        this.setState({filter_rejected: !this.state.filter_rejected})
    }

    toggleExpired() {
        this.setState({filter_expired: !this.state.filter_expired})
    }


    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }

    render() {
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        let bookings = []


        for (let i = 0; i < this.state.bookings.length; i++) {

            // if(this.state.filter_completed && this.state.filter_upcoming){
            //     bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            // }else if(this.state.filter_completed){
            //     if(moment(this.state.bookings[i].date+' '+this.state.bookings[i].end).isBefore(moment())){
            //         bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            //     }
            // } else if(this.state.filter_upcoming){
            //     if((moment()).isBefore(this.state.bookings[i].date+' '+this.state.bookings[i].end)){
            //         bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            //     }
            // }

            let booking = this.state.bookings[i]

            if (this.state.filter_completed && moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) > 0)) {
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            }

            if (this.state.filter_feedback && moment(booking.date + ' ' + booking.end).isBefore(moment()) && (parseInt(booking.rating) === 0 && booking.accepted === true)) {
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i} auth={this.props.auth} addFeedbackConfirmation={this.addFeedbackConfirmation.bind(this)}/>)
            }

            if (this.state.filter_upcoming && moment().isBefore(booking.date + ' ' + booking.end) && booking.accepted === true) {
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            }

            if (this.state.filter_waiting && moment().isBefore(booking.date + ' ' + booking.end) && booking.accepted === null) {
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            }

            if (this.state.filter_rejected && booking.accepted === false) {
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            }

            if (this.state.filter_expired && moment(booking.date + ' ' + booking.end).isBefore(moment()) && booking.accepted === null) {
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            }

        }


        // bookings = this.state.bookings.map((booking, i)=>{
        //     return <StylistBooking booking={booking} key={i}/>
        // });

        return (
            <div>
                <h1 className='page-h1'>Bookings</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                <Form>
                    <Form.Group inline>
                        <Form.Checkbox name='filter_completed' label='Completed Bookings' onChange={this.toggleCompleted} checked={this.state.filter_completed}/>
                        <Form.Checkbox name='filter_upcoming' label='Upcoming Bookings' onChange={this.toggleUpcoming} checked={this.state.filter_upcoming}/>

                        <Form.Checkbox name='filter_waiting' label='Waiting for Approval' onChange={this.toggleWaiting} checked={this.state.filter_waiting}/>
                    </Form.Group>
                    <Form.Group inline>
                        <Form.Checkbox name='filter_feedback' label='Require Feedback' onChange={this.toggleFeedback} checked={this.state.filter_feedback}/>
                        <Form.Checkbox name='filter_rejected' label='Rejected' onChange={this.toggleRejected} checked={this.state.filter_rejected}/>
                        <Form.Checkbox name='filter_expired' label='Expired' onChange={this.toggleExpired} checked={this.state.filter_expired}/>
                    </Form.Group>
                </Form>


                {isMessageVisible && message}
                {bookings}


            </div>
        );
    };
}

export default SalonContentBookings;