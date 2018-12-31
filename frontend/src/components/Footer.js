import React, {Component} from 'react'
import {Button, Card, Image, Grid, Statistic, Icon, Segment, Container, Header, List} from "semantic-ui-react";

class Footer extends Component {


    render() {

        return (
            <Segment inverted vertical className='footer' style={{padding: '5em 0em'}}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About'/>
                                <List link inverted>
                                    <List.Item as='a'>Home</List.Item>
                                    <List.Item as='a'>Terms</List.Item>
                                    <List.Item as='a'>FAQ</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Services'/>
                                <List link inverted>
                                    <List.Item as='a'>Search</List.Item>
                                    <List.Item as='a'>Dashboard</List.Item>
                                    {/*<List.Item as='a'>DNA FAQ</List.Item>*/}
                                    {/*<List.Item as='a'>How To Access</List.Item>*/}
                                    {/*<List.Item as='a'>Favorite X-Men</List.Item>*/}
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='User'/>
                                <List link inverted>
                                    <List.Item as='a'>Sign In</List.Item>
                                    <List.Item as='a'>Sign Up</List.Item>
                                    {/*<List.Item as='a'>DNA FAQ</List.Item>*/}
                                    {/*<List.Item as='a'>How To Access</List.Item>*/}
                                    {/*<List.Item as='a'>Favorite X-Men</List.Item>*/}
                                </List>
                            </Grid.Column>
                            {/*<Grid.Column width={7}>*/}
                                {/*<Header as='h4' inverted>*/}
                                    {/*Footer Header*/}
                                {/*</Header>*/}
                                {/*<p>*/}
                                    {/*Extra space for a call to action inside the footer that could help re-engage users.*/}
                                {/*</p>*/}
                            {/*</Grid.Column>*/}
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>

        );
    };
}

export default Footer;