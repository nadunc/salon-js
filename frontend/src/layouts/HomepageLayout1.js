import React, {Component} from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Form
} from 'semantic-ui-react'
import MainMenu from '../components/MainMenu'
import {CLIENT_ROUTES} from "../common/commonVarList";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

class HomepageLayout extends Component {

    page = (


        <div>
            <MainMenu isHomePage={true}/>

            <div className="pusher main-content-container">
                <div className="ui inverted vertical masthead center aligned segment home-header">

                    <div className="ui text container">
                        <h1 className="ui inverted header">
                            Search Stylist
                        </h1>
                        {/*<h2>Do whatever you want when you want to.</h2>*/}
                        {/*<div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>*/}
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}/>

                                <Grid.Column width={6}>
                                    <Button fluid color="green" size='huge' className="search-btn" as={Link}
                                            to={CLIENT_ROUTES.SEARCH}>
                                        <Icon name='search'/>
                                        Search
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </div>

                </div>


                <div>
                    <Segment style={{padding: '0em'}} vertical>
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                                    <Header as='h3' style={{fontSize: '2em'}}>
                                        Want to become a stylist?
                                    </Header>
                                    <Image bordered rounded centered size='large'
                                           src='/images/wireframe/white-image.png'/>
                                    <p style={{fontSize: '1.33em'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                        laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                        Proin sodales pulvinar sic tempor.
                                    </p>
                                    <Button size='huge'>Sign up as a Stylist</Button>
                                </Grid.Column>
                                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                                    <Header as='h3' style={{fontSize: '2em'}}>
                                        Looking for hire stylists?
                                    </Header>
                                    <Image bordered rounded centered size='large'
                                           src='/images/wireframe/white-image.png'/>
                                    <p style={{fontSize: '1.33em'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                        laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                        Proin sodales pulvinar sic tempor.
                                    </p>
                                    <Button size='huge'>Sign up as a Salon</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                </div>

            </div>
            <Footer/>
        </div>

    )


    render() {
        return (
            this.page
        );
    }
}

export default HomepageLayout