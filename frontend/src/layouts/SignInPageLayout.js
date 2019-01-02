import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import MainMenu from '../components/MainMenu';
import {Container, Checkbox, Button, Card, Grid, Message, Label} from 'semantic-ui-react'
import {Form} from 'formsy-semantic-ui-react'
import axios from 'axios'


import {SERVER_ROUTES, CLIENT_ROUTES} from '../common/commonVarList'
import connect from "react-redux/es/connect/connect";
import * as userActions from "../actions/authActions";
import {AuthenticationTypes} from "../types/index";
import Footer from "../components/Footer";
import {Modal} from "semantic-ui-react/dist/commonjs/modules/Modal";


class SignInPageLayout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            isMessageVisible: false,
            // isAuthenticated: false
        }
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
            // alert(nextProps.message)
            this.setMessage(true, false, 'Invalid email or password')
        }
    }

    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }

    render() {
        if (this.props.auth.isAuth) {
            return (<Redirect to={CLIENT_ROUTES.DASHBOARD}/>);
        }

        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        const errorLabel = <Label color="red" pointing/>

        return (
            <div>
                <MainMenu/>

                <Container className='main-content-container'>

                    <h1 className='text-center page-h1'>Sign In</h1>


                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}/>
                            <Grid.Column width={6}>
                                {isMessageVisible && message}

                                <Card fluid>
                                    <Card.Content>

                                        <Card.Description>
                                            <Form>
                                                <Form.Field>
                                                    <label>Email</label>
                                                    <input ref="email" placeholder='Email' type="email" required/>
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Password</label>
                                                    <input ref="password" placeholder='Password' type="password" required/>
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
                <Footer/>
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