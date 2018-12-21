import React, {Component} from 'react'
import {Button, Card, Image, Grid, Statistic, Icon} from "semantic-ui-react";

class Review extends Component {
    state = {}

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card fluid>
                <Card.Content>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={2} className="text-center">
                                <Image src='/images/salon_placeholder.png'/>
                                    <p className="review-salon-name">Salon ABC</p>
                            </Grid.Column>
                            <Grid.Column width={14}>
                                <Card.Description>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                        laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                        Proin sodales pulvinar sic tempor.
                                    </p>

                                    {/*<p className="stylist-card-rating">*/}
                                    {/*<span className="stylist-card-rating-value">4.8</span>*/}
                                    {/*<Image className="stylist-card-rating-star" src='/images/star.png'/>*/}
                                    {/*</p>*/}

                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                <Statistic size="mini" className='stylist-card-rating'>
                                                    <Statistic.Value>
                                                        <Icon name='star' color="yellow"/>
                                                        <Icon name='star' color="yellow"/>
                                                        <Icon name='star' color="yellow"/>
                                                        <Icon name='star' color="yellow"/>
                                                        <Icon name='star' color="yellow"/>
                                                    </Statistic.Value>
                                                    {/*<Statistic.Label>Average Rating</Statistic.Label>*/}
                                                </Statistic>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <p className="text-right">2018-01-02</p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>

            </Card>
        );
    };
}

export default Review;