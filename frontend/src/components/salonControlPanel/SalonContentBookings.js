import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider, Checkbox, Message, Form} from "semantic-ui-react";
import SalonBooking from "../SalonBooking";
import axios from "axios/index";
import {SERVER_ROUTES, COMMON_ERROR_MESSAGE} from "../../common/commonVarList";
import moment from 'moment'

class SalonContentBookings extends Component {

    constructor(props){
        super(props);

        this.state = {
            bookings : [],
            filter_completed : true,
            filter_upcoming: true,
            message: '',
            isMessageVisible: false
        }

        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.toggleUpcoming = this.toggleUpcoming.bind(this)
    }

    componentDidMount(){
        let user = this.props.auth.user

        axios.post(SERVER_ROUTES.GET_BOOKINGS_BY_SALON, {
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
    }

    toggleCompleted(){
        this.setState({ filter_completed: !this.state.filter_completed })
    }
    toggleUpcoming(){
        this.setState({ filter_upcoming: !this.state.filter_upcoming })
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



        for(let i=0; i<this.state.bookings.length; i++){

            if(this.state.filter_completed && this.state.filter_upcoming){
                bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
            }else if(this.state.filter_completed){
                if(moment(this.state.bookings[i].date+' '+this.state.bookings[i].end).isBefore(moment())){
                    bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
                }
            } else if(this.state.filter_upcoming){
                if((moment()).isBefore(this.state.bookings[i].date+' '+this.state.bookings[i].end)){
                    bookings.push(<SalonBooking booking={this.state.bookings[i]} key={i}/>)
                }
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
                    </Form.Group>
                </Form>
                {isMessageVisible && message}
                {bookings}


            </div>
        );
    };
}

export default SalonContentBookings;