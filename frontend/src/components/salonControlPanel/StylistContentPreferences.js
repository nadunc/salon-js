import React, {Component} from 'react'
import {Grid, Checkbox, Divider, Button, Form} from "semantic-ui-react";

class DashboardPreferences extends Component {


    render() {

        return (
            <div>
                <h1 className='page-h1'>Preferences</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>


                <Form>
                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Work as a stylist</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Checkbox toggle/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>
                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Work as an educator</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Checkbox toggle/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}/>
                            <Grid.Column width={6}>
                                <Button color='green' type='submit'>Save Preferences</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>


            </div>
        );
    };
}

export default DashboardPreferences;