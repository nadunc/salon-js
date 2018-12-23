import React, {Component} from 'react'
import {Grid, Form, Divider, Checkbox, Button, Segment} from "semantic-ui-react";

class AdminContentSettings extends Component {


    render() {

        return (
            <div>
                <h1 className='page-h1'>Settings</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                <Form>
                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Receive promotional emails</label>
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
                                <Button color='green' type='submit'>Save Settings</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>

            </div>
        );
    };
}

export default AdminContentSettings;