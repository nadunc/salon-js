import React, {Component} from 'react'
import {Grid, Form, Divider, Button, Message} from "semantic-ui-react";
import {Link} from 'react-router-dom'
import {CLIENT_ROUTES, SERVER_ROUTES, COMMON_ERROR_MESSAGE} from '../../common/commonVarList'
import {AuthenticationTypes} from "../../types";
import axios from 'axios'

class StylistContentPortfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            image: '',
            bio: '',
            experience_id: '',
            stylist_price: '',
            educator_price: '',
            work_as_stylist: false,
            work_as_educator: false,

            message:'',
            isMessageVisible : false,
            dropdownValuesExperiences:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDropdownChnage = this.handleDropdownChnage.bind(this);
        this.updateStylist = this.updateStylist.bind(this);
        this.getStylist = this.getStylist.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }


    componentDidMount() {
        this.getExperiences();
        this.getStylist();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        this.setMessage(false)
    }

    handleDropdownChnage = (e, {name,value}) => {
        console.log(name,value)

        this.setState({[name]: value})
    }

    getExperiences(){
        axios.get(SERVER_ROUTES.GET_EXPERIENCES).then((res) => {
            if(res.data.success){
                // this.setState({experiences:res.data.data})

                let experiences = res.data.data;
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
                }
            }else{
                this.setMessage(true, false, COMMON_ERROR_MESSAGE);
            }
        }).catch((err)=>{
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }

    getStylist(){
        axios.get(SERVER_ROUTES.GET_STYLISTS + '/' + this.props.auth.user.stylist.id).then((res) => {
            if (res.data.success) {
                console.log(res.data.data)
                let stylist = res.data.data;

                this.setState({
                    firstname: stylist.firstname,
                    lastname: stylist.lastname,
                    image: stylist.image,
                    bio: stylist.bio,
                    experience_id: stylist.experience_id,
                    stylist_price: stylist.stylist_price,
                    educator_price: stylist.educator_price,
                    work_as_stylist: stylist.work_as_stylist,
                    work_as_educator: stylist.work_as_educator
                })

                // this.refs.firstname.value = stylist.firstname

            } else {
                this.setMessage(true, false, COMMON_ERROR_MESSAGE);
            }
        }).catch((err) => {
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }

    updateStylist(){
        axios.patch(SERVER_ROUTES.UPDATE_STYLIST + '/' + this.props.auth.user.stylist.id, this.state).then((res) =>{
            this.setMessage(true, res.data.success, res.data.message);
            if(res.data.success){this.getStylist();}
        }).catch((err)=>{
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })
    }


    setMessage(visible, success, content){
        let message = <Message success={success} error={!success} header={success?'Success':'Error'} content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible:visible})
    }


    render() {

        let user = this.props.auth.user
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        return (
            <div>
                <h1 className='page-h1'>
                    Portfolio

                    <Button basic size="mini" className='dashboard-portfolio-view-btn'
                            href={CLIENT_ROUTES.STYLIST.replace(':id', user.stylist.id)} content='View Portfolio'/>
                </h1>

                <Divider/>
                <div className='dashboard-content-top-margin'/>

                {isMessageVisible && message}

                <Form onSubmit={this.updateStylist}>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>First Name</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input name='firstname' ref='firstname' placeholder='First Name'
                                           value={this.state.firstname} onChange={this.handleChange}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Last Name</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input name='lastname' placeholder='Last Name' value={this.state.lastname}
                                           onChange={this.handleChange}/>
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
                                    <input name='image' placeholder='Display Image' type='file' accept='image/*'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Experience</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    {/*<input name='experience_id' placeholder='Experience'/>*/}
                                    {/*<select name='experience_id'>*/}
                                        {/*{experiences.map((experience, key)=>{*/}
                                            {/*return <option value={experience.id} key={key}>{experience.description}</option>*/}
                                        {/*})}*/}
                                    {/*</select>*/}
                                    <Form.Select fluid name="experience_id"
                                                 placeholder='Experience'
                                                 options={this.state.dropdownValuesExperiences}
                                                 onChange={this.handleDropdownChnage} value={this.state.experience_id}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>


                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Bio</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <textarea name='bio' placeholder='Bio' value={this.state.bio}
                                              onChange={this.handleChange}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Hourly Price as a Stylist</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input name='stylist_price' placeholder='Hourly price as a stylist' type='number'
                                           value={this.state.stylist_price} onChange={this.handleChange}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Form.Field>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <label>Hourly Price as an Educator</label>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <input name='educator_price' placeholder='Hourly price as an educator' type='number'
                                           value={this.state.educator_price} onChange={this.handleChange}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form.Field>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}/>
                            <Grid.Column width={6}>
                                <Button color='green' type='submit'>Save Portfolio</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>

            </div>
        );
    };
}

export default StylistContentPortfolio;