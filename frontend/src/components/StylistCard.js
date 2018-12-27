import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, Image, Grid, Statistic, Icon} from "semantic-ui-react";
import {CLIENT_ROUTES} from "../common/commonVarList";

class StylistCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let stylist = this.props.timeslot.stylist;


        let role;
        if (stylist.work_as_stylist && stylist.work_as_educator) {
            role = "Stylist / Educator"
        } else if (stylist.work_as_educator) {
            role = "Educator"
        } else {
            role = "Stylist"
        }


        return (
            <Card fluid>
                <Card.Content>

                    <Grid celled="internally">
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/images/user_placeholder.jpg'/>
                            </Grid.Column>
                            <Grid.Column width={11}>
                                <Card.Header>
                                    <p className="stylist-card-name">{stylist.firstname} {stylist.lastname}</p>
                                </Card.Header>
                                <Card.Meta>{role}</Card.Meta>
                                <Card.Description>
                                    <p className="stylist-card-bio">
                                    {stylist.bio}
                                    </p>
                                </Card.Description>
                                {/*<p className="stylist-card-rating">*/}
                                    {/*<span className="stylist-card-rating-value">4.8</span>*/}
                                    {/*<Image className="stylist-card-rating-star" src='/images/star.png'/>*/}
                                {/*</p>*/}

                                <Statistic size="mini" className='stylist-card-rating'>
                                    <Statistic.Value>
                                        <span>4.8 </span>
                                        <Icon name='star' color="yellow" />
                                    </Statistic.Value>
                                    {/*<Statistic.Label>Average Rating</Statistic.Label>*/}
                                </Statistic>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Grid>
                                    {(stylist.work_as_stylist === true) ?
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <p className="stylist-card-price-label">Stylist Price</p>
                                                <p className="stylist-card-price">${stylist.stylist_price}</p>
                                            </Grid.Column>
                                        </Grid.Row>:''
                                    }
                                    {(stylist.work_as_educator === true)?
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <p className="stylist-card-price-label">Educator Price</p>
                                                <p className="stylist-card-price">${stylist.educator_price}</p>
                                            </Grid.Column>
                                        </Grid.Row>:''
                                    }

                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <Button color="green" fluid as={Link} to={CLIENT_ROUTES.STYLIST.replace(':id', stylist.id)}>Hire</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>

            </Card>
        );
    };
}

export default StylistCard;