import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, Image, Grid, Statistic, Icon} from "semantic-ui-react";
import {CLIENT_ROUTES, COMMON_ERROR_MESSAGE, SERVER_ROUTES} from "../common/commonVarList";
import AddBookingModal from "./AddBookingModal";
import * as commonMethods from "../common/commonMethods";
import axios from "axios/index";

class StylistCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            rating: 0
        }

        this.addBookingConfirmation = this.addBookingConfirmation.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.setState({isModalVisible: false})
    }

    addBookingConfirmation(){

    }


    componentDidMount(){
        let stylist = this.props.timeslot.stylist


        axios.get(SERVER_ROUTES.GET_RATING_BY_STYLIST.replace(':id', stylist.id)).then((res) => {
            if (res.data.success) {
                this.setState({rating: res.data.data[0].rating})
            }
        }).catch((err) => {

        })
    }





    render() {
        let stylist = this.props.timeslot.stylist;
        let auth = this.props.auth

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
                                        <span>{Math.round( this.state.rating * 10 ) / 10}</span>
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
                                            <Button basic fluid as={Link} to={CLIENT_ROUTES.STYLIST.replace(':id', stylist.id)}>Portfolio</Button>
                                        </Grid.Column>
                                    </Grid.Row>

                                    {auth.isAuth && (commonMethods.isUserTypeSalon(auth.user.userType)) && (
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <Button color="green" fluid onClick={()=>{this.setState({isModalVisible:true})}}>Hire</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                    )}

                                    {!auth.isAuth && (
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Button color="green" fluid as={Link} to={CLIENT_ROUTES.SIGN_IN}>Hire</Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    )}


                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>



                <AddBookingModal open={this.state.isModalVisible} closeModal={this.closeModal.bind(this)}
                                 timeslot={this.props.timeslot} addBookingConfirmation={this.addBookingConfirmation.bind(this)}
                                 auth={this.props.auth}/>
            </Card>






        );
    };
}

export default StylistCard;