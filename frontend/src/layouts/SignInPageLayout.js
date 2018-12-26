import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainMenu from '../components/MainMenu';
import {Container, Form, Checkbox, Button, Card, Grid} from 'semantic-ui-react'
import axios from 'axios'


import {SERVER_ROUTES, CLIENT_ROUTES} from '../common/commonVarList'
import connect from "react-redux/es/connect/connect";
import * as userActions from "../actions/authActions";
import {AuthenticationTypes} from "../types/index";


class SignInPageLayout extends Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     isAuthenticated: false
        // }
    }

    login() {
        let loginObj = {
            email: this.refs.email.value,
            password: this.refs.password.value,
            keep_sign_in: this.refs.keep_sign_in.state.checked
        }

        this.props.dispatch(userActions.login(loginObj))
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.action === AuthenticationTypes.SIGIN_IN_SUCCESS) {
            localStorage.setItem('auth', JSON.stringify(nextProps.auth));
        }

        if (nextProps.action === AuthenticationTypes.SIGIN_IN_FAILED) {
            alert(nextProps.message)
        }
    }


    render() {
        if (this.props.auth.isAuth) {
            return (<Redirect to={CLIENT_ROUTES.DASHBOARD}/>);
        }
        return (
            <div>
                <MainMenu/>

                <Container>

                    <h1 className='text-center page-h1'>Sign In</h1>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}/>
                            <Grid.Column width={6}>
                                <Card fluid>
                                    <Card.Content>

                                        <Card.Description>
                                            <Form>
                                                <Form.Field>
                                                    <label>Email</label>
                                                    <input ref="email" placeholder='Email' type="email"/>
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Password</label>
                                                    <input ref="password" placeholder='Password' type="password"/>
                                                </Form.Field>
                                                <Form.Field>
                                                    <Checkbox ref="keep_sign_in" label='Keep me signed in'/>

                                                </Form.Field>
                                                <Button fluid color="green" type='submit'
                                                        onClick={this.login.bind(this)}>Sign In</Button>
                                            </Form>

                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                                <p className="text-center">Don't have an account? <a href={CLIENT_ROUTES.SIGN_UP}>Sign Up</a></p>
                            </Grid.Column>
                            <Grid.Column width={5}/>
                        </Grid.Row>
                    </Grid>

                </Container>
            </div>
        );
    };

}

// export default SignInPageLayout;


function mapStateToProps(state) {
    // return {
    //     state: state
    // };
    return {
        auth: state.auth,
        user: state.auth.user,
        message: state.auth.message,
        action: state.auth.action
    };
}

export default connect(mapStateToProps)(SignInPageLayout);