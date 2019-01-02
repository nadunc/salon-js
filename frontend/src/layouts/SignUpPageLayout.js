import React, {Component} from 'react'
import MainMenu from '../components/MainMenu';
import {Container, Grid, Menu, Message, Segment, Label} from 'semantic-ui-react'
import {Form} from 'formsy-semantic-ui-react'
import axios from 'axios'

import {SERVER_ROUTES, CLIENT_ROUTES} from '../common/commonVarList'
import Footer from "../components/Footer";

class SignUpPageLayout extends Component {
    state = {
        activeItem: 'stylist',
        dropdownValuesExperiences: [],
        message: '',
        isMessageVisible: false,

        stylist_firstname: '',
        stylist_lastname: '',
        stylist_email: '',
        stylist_password: '',
        stylist_repassword: '',
        stylist_price: '',
        stylist_experience: null,
        stylist_bio: '',
        stylist_promotional_emails: '',
        stylist_accept_terms: '',


        salon_name: '',
        salon_email: '',
        salon_phone: '',
        salon_address: '',
        salon_password: '',
        salon_repassword: '',
        salon_description: '',
        salon_promotional_emails: '',
        salon_accept_terms: ''
    };


    handleItemClick = (e, {name}) => this.setState({activeItem: name})


    handleChange = (e, {name, value}) => {
        this.setState({[name]: value})
    }

    signUpStylist = () => {
        let stylist = {
            firstname: this.state.stylist_firstname,
            lastname: this.state.stylist_lastname,
            email: this.state.stylist_email,
            promotional_emails: this.state.stylist_promotional_emails,
            experience: this.state.stylist_experience,
            password: this.state.stylist_password,
            stylist_price: this.state.stylist_price,
            bio: this.state.stylist_bio
        }

        axios.post(SERVER_ROUTES.SIGN_UP_STYLIST, stylist).then((res) => {
            // console.log(res.data)
            // alert(res.data.message);
            this.setMessage(true, res.data.success, res.data.message)
        }).catch((err) => {
            console.error(err)
        })
    }

    signUpSalon = () => {
        let salon = {
            name: this.state.salon_name,
            email: this.state.salon_email,
            phone: this.state.salon_phone,
            promotional_emails: this.state.salon_promotional_emails,
            address: this.state.salon_address,
            password: this.state.salon_password,
            description: this.state.salon_description
        };

        axios.post(SERVER_ROUTES.SIGN_UP_SALON, salon).then((res) => {
            // console.log(res.data)
            // alert(res.data.message);
            this.setMessage(true, res.data.success, res.data.message)


        }).catch((err) => {
            console.error(err)
        })
    }

    componentDidMount() {
        axios.get(SERVER_ROUTES.GET_EXPERIENCES)
            .then(res => {
                let obj = res.data;

                if (obj.success) {
                    let experiences = obj.data;
                    if (experiences && experiences.length > 0) {


                        new Promise((resolve) => {
                            resolve(experiences.map((experience, key) => {
                                return {
                                    key: 'experience_dw_' + experience.id,
                                    text: experience.description,
                                    value: experience.id
                                };
                            }));
                        }).then((experienceList) => {
                            this.setState({dropdownValuesExperiences: experienceList});
                        })

                    } else {
                        this.setState({dropdownValuesExperiences: []});
                    }
                } else {
                    this.setState({dropdownValuesExperiences: []});
                }
            })
    }


    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }


    render() {
        const {activeItem} = this.state
        // const {value} = this.state
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        const errorLabel = <Label color="red" pointing/>

        return (
            <div>
                <MainMenu/>

                <Container className='main-content-container'>

                    <h1 className='text-center page-h1'>Sign Up</h1>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}></Grid.Column>
                            <Grid.Column width={8}>

                                {isMessageVisible && message}

                                <Menu attached='top' tabular widths={2}>
                                    <Menu.Item
                                        name='stylist'
                                        className='signup-tab-menu-item'
                                        active={activeItem === 'stylist'}
                                        onClick={this.handleItemClick}/>
                                    <Menu.Item
                                        name='salon'
                                        className='signup-tab-menu-item'
                                        active={activeItem === 'salon'}
                                        onClick={this.handleItemClick}/>

                                </Menu>


                                <Segment attached='bottom' hidden={activeItem !== 'stylist'}>

                                    <Form onValidSubmit={ this.signUpStylist }>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid name="stylist_firstname" label='First name'
                                                        placeholder='First name'
                                                        onChange={this.handleChange.bind(this)}
                                                        validations="isAlphanumeric"
                                                        validationErrors={{ isAlphanumeric: 'First name not valid', isDefaultRequiredValue: 'First name is required', }}
                                                        errorLabel={ errorLabel }
                                            required/>
                                            <Form.Input fluid name="stylist_lastname" label='Last name'
                                                        placeholder='Last name'
                                                        onChange={this.handleChange.bind(this)}
                                                        validations="isAlphanumeric"
                                                        validationErrors={{ isAlphanumeric: 'Last name not valid', isDefaultRequiredValue: 'Last name is required', }}
                                                        errorLabel={ errorLabel }
                                            required/>

                                        </Form.Group>

                                        <Form.Input fluid name="stylist_email" label='Email' placeholder='Email'
                                                    type="email" onChange={this.handleChange.bind(this)}
                                                    validations="isEmail"
                                                    validationErrors={{ isEmail: 'Email not valid', isDefaultRequiredValue: 'Email is required', }}
                                                    errorLabel={ errorLabel }
                                        required/>

                                        <Form.Group widths='equal'>
                                            <Form.Input fluid name="stylist_password" label='Password'
                                                        placeholder='Password' type="password"
                                                        onChange={this.handleChange.bind(this)}
                                                        validationErrors={{ isDefaultRequiredValue: 'Password is required', }}
                                                        errorLabel={ errorLabel }
                                                        required/>
                                            <Form.Input fluid name="stylist_repassword" label='Confirm Password'
                                                        placeholder='Confirm Password'
                                                        type="password" onChange={this.handleChange.bind(this)}
                                                        validations="equalsField:stylist_password"
                                                        validationErrors={{ equalsField: 'Passwords does not match', isDefaultRequiredValue: 'Password is required', }}
                                                        errorLabel={ errorLabel }
                                                        required/>
                                        </Form.Group>
                                        <Form.Group widths='equal'>
                                            <Form.Input fluid name="stylist_price" label='Hourly Rate (USD)'
                                                        placeholder='Hourly Rate'
                                                        type="number" onChange={this.handleChange.bind(this)}
                                                        validations="isNumeric"
                                                        validationErrors={{ isNumeric: 'Hourly rate cannot be empty', isDefaultRequiredValue: 'Hourly rate is required', }}
                                                        errorLabel={ errorLabel }
                                            required/>

                                            <Form.Select fluid name="stylist_experience" label='Experience'
                                                         placeholder='Experience'
                                                         options={this.state.dropdownValuesExperiences}
                                                         onChange={this.handleChange.bind(this)}
                                                         validations="isNumeric"
                                                         validationErrors={{ isNumeric: 'Experience cannot be empty', isDefaultRequiredValue: 'Experience is required', }}
                                                         errorLabel={ errorLabel }
                                            required/>
                                        </Form.Group>

                                        <Form.TextArea name="stylist_bio" label='Bio'
                                                       placeholder='Tell us more about you...'
                                                       onChange={this.handleChange.bind(this)}
                                                       validationErrors={{ isDefaultRequiredValue: 'Bio is required', }}
                                                       errorLabel={ errorLabel }
                                                       required/>
                                        <Form.Checkbox name="stylist_promotional_emails"
                                                       label='Receive Promotional Emails'
                                                       onChange={this.handleChange.bind(this)}/>
                                        <Form.Checkbox name="stylist_accept_terms"
                                                       label='I agree to the Terms and Conditions'
                                                       onChange={this.handleChange.bind(this)}
                                                       validations="isTrue"
                                                       validationErrors={{ isTrue: 'Please accept terms & conditions' }}
                                                       errorLabel={ errorLabel }/>
                                        <Form.Button fluid color="green">Sign
                                            Up</Form.Button>
                                    </Form>
                                </Segment>


                                <Segment attached='bottom' hidden={activeItem !== 'salon'}>

                                    <Form onValidSubmit={ this.signUpSalon }>
                                        <Form.Input fluid name="salon_name" label='Salon Name' placeholder='Salon Name'
                                                    onChange={this.handleChange.bind(this)}
                                                    validationErrors={{ isDefaultRequiredValue: 'Name is required', }}
                                                    errorLabel={ errorLabel }
                                                    required/>

                                        <Form.Input fluid name="salon_email" label='Email' placeholder='Email'
                                                    type="email" onChange={this.handleChange.bind(this)}
                                                    validations="isEmail"
                                                    validationErrors={{ isEmail: 'Email not valid', isDefaultRequiredValue: 'Email is required', }}
                                                    errorLabel={ errorLabel }
                                                    required/>

                                        <Form.Group widths='equal'>
                                            <Form.Input fluid name="salon_password" label='Password'
                                                        placeholder='Password' type="password"
                                                        onChange={this.handleChange.bind(this)}
                                                        validationErrors={{ isDefaultRequiredValue: 'Password is required', }}
                                                        errorLabel={ errorLabel }
                                                        required/>
                                            <Form.Input fluid name="salon_repassword" label='Confirm Password'
                                                        placeholder='Confirm Password'
                                                        type="password" onChange={this.handleChange.bind(this)}
                                                        validations="equalsField:salon_password"
                                                        validationErrors={{ equalsField: 'Passwords does not match', isDefaultRequiredValue: 'Password is required', }}
                                                        errorLabel={ errorLabel }
                                                        required/>
                                        </Form.Group>
                                        <Form.Input fluid name="salon_phone" label='Phone' placeholder='Phone'
                                                    type="text" onChange={this.handleChange.bind(this)}
                                                    validations="isNumeric"
                                                    validationErrors={{ isNumeric:'Phone is not valid', isDefaultRequiredValue: 'Phone is required', }}
                                                    errorLabel={ errorLabel }
                                                    required/>
                                        <Form.TextArea name="salon_address" label='Address' placeholder='Address'
                                                       onChange={this.handleChange.bind(this)}
                                                       validationErrors={{ isDefaultRequiredValue: 'Address is required', }}
                                                       errorLabel={ errorLabel }
                                                       required/>

                                        <Form.TextArea name="salon_description" label='Description'
                                                       placeholder='Tell us more about your salon...'
                                                       onChange={this.handleChange.bind(this)}
                                                       validationErrors={{ isDefaultRequiredValue: 'Description is required', }}
                                                       errorLabel={ errorLabel }
                                                       required/>
                                        <Form.Checkbox name="salon_promotional_emails"
                                                       label='Receive Promotional Emails'
                                                       onChange={this.handleChange.bind(this)}/>
                                        <Form.Checkbox name="salon_accept_terms"
                                                       label='I agree to the Terms and Conditions'
                                                       onChange={this.handleChange.bind(this)}
                                                       validations="isTrue"
                                                       validationErrors={{ isTrue: 'Please accept terms & conditions' }}
                                                       errorLabel={ errorLabel }/>
                                        <Form.Button fluid color="green">Sign Up</Form.Button>
                                    </Form>
                                </Segment>

                                <p className="text-center">Already have an account? <a href={CLIENT_ROUTES.SIGN_IN}>Sign
                                    In</a></p>
                            </Grid.Column>
                            <Grid.Column width={4}></Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Container>
                <Footer/>
            </div>
        );
    };

};

export default SignUpPageLayout;