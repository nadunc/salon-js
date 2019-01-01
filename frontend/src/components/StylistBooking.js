import React, {Component} from 'react'
import {Button, Card, Image, Grid, Statistic, Icon} from "semantic-ui-react";
import moment from 'moment'

class StylistBooking extends Component {
    state = {}

    constructor(props) {
        super(props);
    }

    render() {

        let booking = this.props.booking;

        let stars = []
        for (let i = 1; i <= booking.rating; i++) {
            stars.push(<Icon name='star' color="yellow" key={i}/>)
        }

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
                                    {booking.salon.name}
                                </p>
                                <p className='salon-booking-role'>Hired as :
                                    {booking.role === 1 ? ' Stylist' : 'Educator'}
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4} className="text-right">
                                {stars}

                                <p className='salon-booking-price'>
                                    ${booking.price}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>


            </Card>

        );
    };
}

export default StylistBooking;