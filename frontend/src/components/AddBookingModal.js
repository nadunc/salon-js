import React, {Component} from 'react'
import {Button, Card, Image, Grid, Statistic, Icon, Header, Modal, Form, Message} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import dropdownValues from '../common/dropdownValues'
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from '../common/commonVarList'
import axios from 'axios'


class AddAvailableSlotModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: props.timeslot.date,
            start: '',
            end: '',

            dropdownFromValues: [],
            dropdownToValues: [],


            message: '',
            isMessageVisible: false
        }

        this.addBooking = this.addBooking.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }


    handleChange = (e, {name, value}) => {
        this.setState({[name]: value})
    }

    // addSlot() {
    //     let user = this.props.auth.user
    //
    //     let timeslot = {
    //         date: this.props.date,
    //         start: this.state.start,
    //         end: this.state.end,
    //         token: user.token,
    //         stylist_id: user.stylist.id
    //     }
    //
    //     axios.post(SERVER_ROUTES.ADD_TIMESLOT, timeslot).then((res) => {
    //         this.setMessage(true, res.data.success, res.data.message);
    //         this.props.addSlotConfirmation(true);
    //     }).catch((err) => {
    //         this.setMessage(true, false, COMMON_ERROR_MESSAGE);
    //     })
    // }

    addBooking() {

        let booking = {
            token: this.props.auth.user.token,
            date: this.state.date,
            start: this.state.start,
            end: this.state.end,
            timeslot_id: this.props.timeslot.id,
            stylist_id: this.props.timeslot.stylist.id,
            role: 1
        }


        axios.post(SERVER_ROUTES.ADD_BOOKING, booking).then((res) => {
            this.setMessage(true, res.data.success, res.data.message);
            this.props.addBookingConfirmation(true);
        }).catch((err) => {
            this.setMessage(true, false, COMMON_ERROR_MESSAGE);
        })

    }

    setMessage(visible, success, content) {
        let message = <Message success={success} error={!success} header={success ? 'Success' : 'Error'}
                               content={content} className='form-submit-success-message'/>;
        this.setState({message: message, isMessageVisible: visible})
    }

    closeModal() {
        this.setState({isMessageVisible: false, message: ''})
        this.props.closeModal();
    }


    setFromAndTo() {
        let start = this.props.timeslot.start;
        let end = this.props.timeslot.end;

        this.setState({
            dropdownFromValues: dropdownValues.FromTimes.filter((from) => {
                return (parseInt(from.value.substr(0, 2)) >= parseInt(start.substr(0, 2))) && (parseInt(from.value.substr(0, 2)) < parseInt(end.substr(0, 2)));
            })
        })

        this.setState({
            dropdownToValues: dropdownValues.ToTimes.filter((to) => {
                return (parseInt(to.value.substr(0, 2)) <= parseInt(end.substr(0, 2))) && (parseInt(to.value.substr(0, 2)) > parseInt(start.substr(0, 2)));
            })
        })
    }

    componentDidMount() {
        this.setFromAndTo()
    }

    render() {
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        return (
            <Modal closeIcon size='mini' open={this.props.open} onClose={this.closeModal}>
                <Header icon='time' content='Add booking'/>
                <Modal.Content>
                    {/*<p>*/}
                    {/*Your inbox is getting full, would you like us to enable automatic archiving of old messages?*/}
                    {/*</p>*/}
                    {isMessageVisible && message}

                    <Form>
                        <Form.Field>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={6}>
                                        <label>Date</label>
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <SemanticDatepicker fluid placeholder='Date' iconPosition='left'
                                                            format="YYYY-MM-DD" name='date'
                                                            selected={this.props.timeslot.date}
                                                            onDateChange={() => {
                                                            }} disabled/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form.Field>


                        <Form.Field>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={6}>
                                        <label>From</label>
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <Form.Select fluid options={this.state.dropdownFromValues} placeholder='From'
                                                     name='start'
                                                     onChange={this.handleChange.bind(this)} value={this.state.start}/>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={6}>
                                        <label>To</label>
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <Form.Select fluid options={this.state.dropdownToValues} placeholder='To'
                                                     name='end'
                                                     onChange={this.handleChange.bind(this)} value={this.state.end}/>


                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form.Field>
                    </Form>

                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.closeModal}>
                        <Icon name='remove'/> Cancel
                    </Button>
                    <Button color='green' onClick={this.addBooking}>
                        <Icon name='check'/> Add
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    };
}

export default AddAvailableSlotModal;