import React, {Component} from 'react'
import {Grid, Form, Divider, Button} from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { CLIENT_ROUTES } from '../../commonVarList'

class SalonContentSalonProfile extends Component {


    render() {
        // TODO
        let userId = 1
        return (
            <div>
                <h1 className='page-h1'>
                    Salon Profile

                    {/*<Button basic size="mini" className='dashboard-portfolio-view-btn' href={CLIENT_ROUTES.STYLIST.replace(':id', userId)} content='View Portfolio'/>*/}
                </h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                <Form>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Name</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input placeholder='Name'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>


                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Display Image</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input placeholder='Display Image' type='file' accept='image/*'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Phone</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input placeholder='Phone'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>


                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Address</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <textarea placeholder='Address'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Description</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <textarea placeholder='Description'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}/>
                            <Grid.Column width={6}>
                                <Button color='green' type='submit'>Save Profile Details</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>

            </div>
        );
    };
}

export default SalonContentSalonProfile;