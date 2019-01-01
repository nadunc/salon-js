import React, {Component} from 'react'
import {Button, Card, Image, Grid, Statistic, Icon, Header, Modal, Form, Message, Rating} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import dropdownValues from '../common/dropdownValues'
import {COMMON_ERROR_MESSAGE, SERVER_ROUTES} from '../common/commonVarList'
import axios from 'axios'


class AddFeedbackModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            review: '',
            rating: 0,
            message: '',
            isMessageVisible: false
        }

        this.addFeedback = this.addFeedback.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }


    handleChange = (e, {name, value}) => {
        this.setState({[name]: value})
    }

    handleRate = (e, { rating, maxRating }) => {
        this.setState({ rating, maxRating })
    }




    addFeedback() {

        let feedback = {
            token: this.props.auth.user.token,
            review: this.state.review,
            rating: this.state.rating
        }


        axios.post(SERVER_ROUTES.ADD_FEEDBACK+'/'+this.props.booking.id, feedback).then((res) => {
            this.setMessage(true, res.data.success, res.data.message);
            this.props.addFeedbackConfirmation(true);
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

    render() {
        let message = this.state.message;
        let isMessageVisible = this.state.isMessageVisible;

        return (
            <Modal closeIcon size='small' open={this.props.open} onClose={this.closeModal}>
                <Header icon='time' content='Add feedback'/>
                <Modal.Content>
                    {isMessageVisible && message}

                    <Form>

                        <Form.Field>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Rating</label>
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                        <Rating icon='star' size='massive' maxRating={5} onRate={this.handleRate.bind(this)}/>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Review</label>
                                    </Grid.Column>
                                    <Grid.Column width={12}>

                                        <Form.TextArea fluid placeholder='Write your review' name='review' onChange={this.handleChange.bind(this)} value={this.state.review}/>

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
                    <Button color='green' onClick={this.addFeedback}>
                        <Icon name='check'/> Add
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    };
}

export default AddFeedbackModal;