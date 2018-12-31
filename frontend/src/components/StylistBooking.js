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

        return (
            <Card fluid>
                <Card.Content>

                    <Grid divided>
                        <Grid.Row>
                            <Grid.Column width={2} className="text-center">
                                    <p className="review-salon-name">
                                        {moment(booking.date).format('ll')}
                                    </p>
                            </Grid.Column>
                            <Grid.Column width={3} className="text-center">
                                <p>
                                    {moment(booking.date+' '+booking.start).format('LT')} - {moment(booking.date+' '+booking.end).format('LT')}
                                </p>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Card.Description>
                                    <p>
                                        {booking.salon.name}
                                    </p>

                                    {/*<p className="stylist-card-rating">*/}
                                    {/*<span className="stylist-card-rating-value">4.8</span>*/}
                                    {/*<Image className="stylist-card-rating-star" src='/images/star.png'/>*/}
                                    {/*</p>*/}

                                    {/*<Grid>*/}
                                        {/*<Grid.Row>*/}
                                            {/*<Grid.Column width={12}>*/}
                                                {/*<Statistic size="mini" className='stylist-card-rating'>*/}
                                                    {/*<Statistic.Value>*/}
                                                        {/*<Icon name='star' color="yellow"/>*/}
                                                        {/*<Icon name='star' color="yellow"/>*/}
                                                        {/*<Icon name='star' color="yellow"/>*/}
                                                        {/*<Icon name='star' color="yellow"/>*/}
                                                        {/*<Icon name='star' color="yellow"/>*/}
                                                    {/*</Statistic.Value>*/}
                                                    {/*/!*<Statistic.Label>Average Rating</Statistic.Label>*!/*/}
                                                {/*</Statistic>*/}
                                            {/*</Grid.Column>*/}
                                            {/*<Grid.Column width={4}>*/}
                                                {/*<p className="text-right">2018-01-02</p>*/}
                                            {/*</Grid.Column>*/}
                                        {/*</Grid.Row>*/}
                                    {/*</Grid>*/}
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column width={3} className="text-center">
                                {/*<p className="review-salon-name">Dec 20, 2018</p>*/}
                                    <p>Hired as<br/>
                                        { booking.role===1?'Stylist':'Educator'}
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