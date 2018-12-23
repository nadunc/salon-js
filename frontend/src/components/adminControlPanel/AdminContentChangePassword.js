import React, {Component} from 'react'
import {Form, Button, Grid, Divider} from "semantic-ui-react";

class AdminContentChangePassword extends Component {


    render() {

        return (
            <div>

                <h1 className='page-h1'>Change Password</h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                <Form>
                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Current Password</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input placeholder='Current Password' type='password'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>New Password</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input placeholder='New Password' type='password'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Re-type New Password</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input placeholder='Re-type New Password' type='password'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}/>
                            <Grid.Column width={6}>
                                <Button color='green' type='submit'>Change Password</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>

            </div>
        );
    };
}

export default AdminContentChangePassword;