import React, {Component} from 'react'
import {Grid, Statistic, Icon, Segment, Divider} from "semantic-ui-react";
import StylistBooking from "../StylistBooking";
import axios from "axios/index";
import {SERVER_ROUTES, COMMON_ERROR_MESSAGE} from "../../common/commonVarList";

class StylistContentBookings extends Component {

    constructor(props){
        super(props);
        this.state = {
            bookings : []
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
    }

    render() {

        let bookings = this.state.bookings.map((booking, i)=>{
            return <StylistBooking booking={booking} key={i}/>
        });

        return (
            <div>
                <h1 className='page-h1'>Bookings</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                {bookings}

                {/*<StylistBooking/>*/}
                {/*<StylistBooking/>*/}
                {/*<StylistBooking/>*/}
                {/*<StylistBooking/>*/}
            </div>
        );
    };
}

export default StylistContentBookings;