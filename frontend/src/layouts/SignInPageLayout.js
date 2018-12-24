import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import MainMenu from '../components/MainMenu';
import {Container, Form, Checkbox, Button, Card, Grid} from 'semantic-ui-react'
import axios from 'axios'


import {SERVER_ROUTES, CLIENT_ROUTES} from '../common/commonVarList'
import connect from "react-redux/es/connect/connect";
import * as userActions from "../actions/userActions";


class SignInPageLayout extends Component {
    // state = {
    //     email: '',
    //     password: '',
    //     keep_sign_in: false
    // };
state = {
    authenticated: false
}
    login() {
        let loginObj = {
            email : this.refs.email.value,
            password: this.refs.password.value,
            keep_sign_in:this.refs.keep_sign_in.state.checked
        }

        this.props.dispatch(userActions.login(loginObj))
        // console.log(loginObj)


        // axios.post(CONSTANTS.BACKEND_API_ROOT + '/timeslots/stylists', data)
        //     .then(res => {
        //         let obj = res.data;
        //
        //         if (obj.success) {
        //             let timeslots = obj.data;
        //             if (timeslots && timeslots.length > 0) {
        //                 this.setState({timeslots: timeslots});
        //             } else {
        //                 this.setState({timeslots: []});
        //             }
        //         } else {
        //             this.setState({timeslots: []});
        //         }
        //
        //     })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Next props', nextProps);

        if(nextProps.state.user.isAuth){
            console.log("redirect")
            this.setState({authenticated: true})
        }
    }

    render() {
        if(this.state.authenticated) {
            return (<Redirect to={CLIENT_ROUTES.DASHBOARD} />);
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
                                        {/*<Card.Header>Matthew Harris</Card.Header>*/}
                                        {/*<Card.Meta>Co-Worker</Card.Meta>*/}
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
                                                <Button fluid color="green" type='submit' onClick={this.login.bind(this)}>Sign In</Button>
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
    return {
        state: state
    };
}

export default connect(mapStateToProps)(SignInPageLayout);