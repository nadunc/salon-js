import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider, Modal, Button, Header, Message} from "semantic-ui-react";
import Calendar from "../Calendar";
import FullCalendar from "../FullCalendar";
import AddAvailableSlotModal from "../AddAvailableSlotModal";
import Loader from "../Loader";
import moment from 'moment'
import axios from "axios";
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from "../../common/commonVarList";


class StylistContentCalendar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalVisible: false,
            date: new Date(),
            // timeslots:[],
            message: '',
            isMessageVisible: false,
            events: [],
        }

        this.dateClicked = this.dateClicked.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.addSlotConfirmation = this.addSlotConfirmation.bind(this)
    }

    dateClicked(e) {
        moment().format('YYYY-MM-DD')
        alert('Date Clicked: ' + e.format('YYYY-MM-DD').toString());
        this.setState({isModalVisible: true, date: e.format('YYYY-MM-DD')})
    }

    closeModal() {
        this.setState({isModalVisible: false})
    }

    addSlotConfirmation(isAdded) {
        if (isAdded) {
            this.setCalendarData()
        }
    }

    setCalendarData() {
        let user = this.props.auth.user

        axios.post(SERVER_ROUTES.STYLISTS_ALL_AVAILABLE_TIMESLOTS, {
            stylist_id: user.stylist.id,
            token: user.token
        }).then((res) => {
            if (res.data.success) {
                // this.setState({timeslots:res.data.data});

                new Promise((resolve) => {
                    resolve(res.data.data.map((timeslot, key) => {
                        return {
                            title: 'Available Slot',
                            start: timeslot.date + 'T' + timeslot.start,
                            end: timeslot.date + 'T' + timeslot.end,
                            color: '#378006'
                        }
                    }));
                }).then((events) => {
                    this.setState({events: events});
                });


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


    componentDidMount() {
        this.setCalendarData();
    }

    render() {
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        return (
            <div>
                <h1 className='page-h1'>Calendar</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>
                {isMessageVisible && message}

                {/*<Calendar/>*/}

                <FullCalendar dateClicked={this.dateClicked.bind(this)} events={this.state.events}/>


                <AddAvailableSlotModal open={this.state.isModalVisible} closeModal={this.closeModal.bind(this)}
                                       date={this.state.date} addSlotConfirmation={this.addSlotConfirmation.bind(this)}
                                       auth={this.props.auth}/>
            </div>
        );
    };
}

export default StylistContentCalendar;