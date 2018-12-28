import React, {Component} from 'react'
import {Button, Container, Icon, Image, Segment, Grid, Statistic, Divider, Message} from 'semantic-ui-react'
import MainMenu from '../components/MainMenu';
import Review from '../components/Review';
import Loader from '../components/Loader';
import axios from "axios";
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from "../common/commonVarList";
import * as commonMethods from "../common/commonMethods";
import {Modal} from "semantic-ui-react/dist/commonjs/modules/Modal";
import Footer from "../components/Footer";


class StylistPortfolioLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stylist: {},
            message: '',
            isMessageVisible: false,
            isLoading: true,
            isLoaded: false
        }
    }

    componentDidMount() {
        const stylistId = this.props.match.params.id;
        console.log("stylistId", stylistId)

        // TODO
        // axios
        // let stylist = {work_as_stylist: true, work_as_educator: true, stylist_price: 100, educator_price: 200}

        axios.get(SERVER_ROUTES.GET_STYLISTS + '/' + stylistId,).then((res) => {
            if (res.data.success) {
                this.setState({
                    stylist: res.data.data, isLoading: false, isLoaded: true
                })
            } else {
                this.setState({isLoading: false})
                this.setMessage(true, false, COMMON_ERROR_MESSAGE);
            }
        }).catch((err) => {
            this.setState({isLoading: false})
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }

    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }


    render() {
        let stylist = this.state.stylist

        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;
        let isLoading = this.state.isLoading
        let isLoaded = this.state.isLoaded


        let content = (isLoading? <Loader/>:'')
        content = ((!isLoaded && !isLoading && isMessageVisible) ?  message:'')

        if(isLoaded){
            let role;
            if (stylist.work_as_stylist && stylist.work_as_educator) {
                role = "Stylist / Educator"
            } else if (stylist.work_as_educator) {
                role = "Educator"
            } else {
                role = "Stylist"
            }

            content = (<div>

                <MainMenu/>

                <Container className='main-content-container'>

                    {/*<h1 className='page-h1'>Portfolio</h1>*/}

                    {isMessageVisible && message}


                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/images/user_placeholder.jpg'/>
                            </Grid.Column>
                            <Grid.Column width={11}>

                                <p className="portfolio-name">{stylist.firstname} {stylist.lastname}</p>

                                <p>{role}</p>


                                <Grid>
                                    <Grid.Row>
                                        {(stylist.work_as_stylist === true) ?
                                            <Grid.Column width={2}>
                                                <p className="stylist-card-price-label">Stylist Price</p>
                                                <p className="stylist-card-price">${stylist.stylist_price}</p>
                                            </Grid.Column> : ''
                                        }
                                        {(stylist.work_as_educator === true) ?
                                            <Grid.Column width={3}>
                                                <p className="stylist-card-price-label">Educator Price</p>
                                                <p className="stylist-card-price">${stylist.educator_price}</p>
                                            </Grid.Column> : ''
                                        }
                                    </Grid.Row>
                                </Grid>

                            </Grid.Column>
                            <Grid.Column width={2} className="text-center">
                                <Statistic size="tiny" className='stylist-card-rating'>
                                    <Statistic.Value>
                                        <span>4.8 </span>
                                        <Icon name='star' color="yellow"/>
                                    </Statistic.Value>
                                    {/*<Statistic.Label>Average Rating</Statistic.Label>*/}
                                </Statistic>

                                {/*<Button color="green" fluid>Hire</Button>*/}

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                    {/*<Segment>*/}
                    <h3>Experience</h3>
                    <p>{stylist.experience.description}</p>

                    <h3>Bio</h3>
                    <p>{stylist.bio}</p>
                    {/*</Segment>*/}


                    <Divider/>

                    <Segment vertical>
                        <h3>Reviews</h3>


                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>


                    </Segment>

                </Container>
                <Footer/>
            </div>)
        }

        return(
            content
        );
    };

}

export default StylistPortfolioLayout;