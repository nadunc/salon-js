import React, {Component} from 'react'
import {Button, Container, Icon, Image, Segment, Grid, Statistic, Divider} from 'semantic-ui-react'
import MainMenu from '../components/MainMenu';
import Review from '../components/Review';


class StylistPortfolioLayout extends Component {

    state = {
        stylist: []
    }

    componentDidMount() {
        const stylistId = this.props.match.params.id;
        console.log("stylistId", stylistId)

        // TODO
        // axios
        let stylist = {work_as_stylist: true, work_as_educator: true, stylist_price: 100, educator_price: 200}
        this.setState({stylist: stylist})
    }


    render() {
        let stylist = this.state.stylist
        return (
            <div>
                <MainMenu/>

                <Container>

                    {/*<h1 className='page-h1'>Portfolio</h1>*/}


                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/images/user_placeholder.jpg'/>
                            </Grid.Column>
                            <Grid.Column width={11}>

                                <p className="portfolio-name">Nadun Chamikara</p>

                                <p>Stylist / Educator</p>


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

                                <Button color="green" fluid>Hire</Button>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>


                    {/*<Segment>*/}
                    <h3>Experience</h3>
                    <p>15 Years</p>

                    <h3>Bio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                        sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
                        pronin sapien nunc accuan eget.</p>
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
            </div>
        );
    };

}

export default StylistPortfolioLayout;