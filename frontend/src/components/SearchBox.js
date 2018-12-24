import React, {Component} from 'react'
import {connect} from "react-redux";

import {Form, Icon} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import moment from 'moment'
import axios from "axios";
import {SERVER_ROUTES, CLIENT_ROUTES} from "../commonVarList";

import * as ExperienceActions from '../actions/experienceActions'


const dropdownValuesFromTimes = [
    {key: '00:00:00', text: '12 AM', value: '00:00:00'},
    {key: '01:00:00', text: '01 AM', value: '01:00:00'},
    {key: '02:00:00', text: '02 AM', value: '02:00:00'},
    {key: '03:00:00', text: '03 AM', value: '03:00:00'},
    {key: '04:00:00', text: '04 AM', value: '04:00:00'},
    {key: '05:00:00', text: '05 AM', value: '05:00:00'},
    {key: '06:00:00', text: '06 AM', value: '06:00:00'},
    {key: '07:00:00', text: '07 AM', value: '07:00:00'},
    {key: '08:00:00', text: '08 AM', value: '08:00:00'},
    {key: '09:00:00', text: '09 AM', value: '09:00:00'},
    {key: '10:00:00', text: '10 AM', value: '10:00:00'},
    {key: '11:00:00', text: '11 AM', value: '11:00:00'},
    {key: '12:00:00', text: '12 AM', value: '12:00:00'},
    {key: '13:00:00', text: '01 PM', value: '13:00:00'},
    {key: '14:00:00', text: '02 PM', value: '14:00:00'},
    {key: '15:00:00', text: '03 PM', value: '15:00:00'},
    {key: '16:00:00', text: '04 PM', value: '16:00:00'},
    {key: '17:00:00', text: '05 PM', value: '17:00:00'},
    {key: '18:00:00', text: '06 PM', value: '18:00:00'},
    {key: '19:00:00', text: '07 PM', value: '19:00:00'},
    {key: '20:00:00', text: '08 PM', value: '20:00:00'},
    {key: '21:00:00', text: '09 PM', value: '21:00:00'},
    {key: '22:00:00', text: '10 PM', value: '22:00:00'},
    {key: '23:00:00', text: '11 PM', value: '23:00:00'}
]

const dropdownValuesToTimes = [
    {key: '01:00:00', text: '01 AM', value: '01:00:00'},
    {key: '02:00:00', text: '02 AM', value: '02:00:00'},
    {key: '03:00:00', text: '03 AM', value: '03:00:00'},
    {key: '04:00:00', text: '04 AM', value: '04:00:00'},
    {key: '05:00:00', text: '05 AM', value: '05:00:00'},
    {key: '06:00:00', text: '06 AM', value: '06:00:00'},
    {key: '07:00:00', text: '07 AM', value: '07:00:00'},
    {key: '08:00:00', text: '08 AM', value: '08:00:00'},
    {key: '09:00:00', text: '09 AM', value: '09:00:00'},
    {key: '10:00:00', text: '10 AM', value: '10:00:00'},
    {key: '11:00:00', text: '11 AM', value: '11:00:00'},
    {key: '12:00:00', text: '12 AM', value: '12:00:00'},
    {key: '13:00:00', text: '01 PM', value: '13:00:00'},
    {key: '14:00:00', text: '02 PM', value: '14:00:00'},
    {key: '15:00:00', text: '03 PM', value: '15:00:00'},
    {key: '16:00:00', text: '04 PM', value: '16:00:00'},
    {key: '17:00:00', text: '05 PM', value: '17:00:00'},
    {key: '18:00:00', text: '06 PM', value: '18:00:00'},
    {key: '19:00:00', text: '07 PM', value: '19:00:00'},
    {key: '20:00:00', text: '08 PM', value: '20:00:00'},
    {key: '21:00:00', text: '09 PM', value: '21:00:00'},
    {key: '22:00:00', text: '10 PM', value: '22:00:00'},
    {key: '23:00:00', text: '11 PM', value: '23:00:00'},
    {key: '00:00:00', text: '12 AM', value: '00:00:00'},
]

const dropdownValuesPrices = [
    {key: 'price_dw_lth', text: 'Low to High', value: 'lth'},
    {key: 'price_dw_htl', text: 'High to Low', value: 'htl'}
]

const dropdownValuesRatings = [
    {key: 'rating_dw_any', text: 'Any', value: '0'},
    {key: 'rating_dw_1', text: '1 Star or Higher', value: '1'},
    {key: 'rating_dw_2', text: '2 Stars or Higher', value: '2'},
    {key: 'rating_dw_3', text: '3 Star or Higher', value: '3'},
    {key: 'rating_dw_4', text: '4 Star or Higher', value: '4'},
    {key: 'rating_dw_5', text: '5 Stars', value: '5'}
]


class SearchBox extends Component {
    state = {
        date: '',
        start: '',
        end: '',
        price: 'lth',
        rating: '0',
        experience: '0',
        dropdownValuesExperiences: []

    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value})
    }

    datePicked = (e) => {
        let date = moment(e).format('YYYY-MM-DD');
        this.setState({date: date});
    };

    search() {
        console.log(this.state)
        this.props.callback(this.state)
    }

    componentDidMount() {
        // axios.get(SERVER_ROUTES.ROOT + SERVER_ROUTES.GET_EXPERIENCES)
        //     .then(res => {
        //         let obj = res.data;
        //
        //         if (obj.success) {
        //             let experiences = obj.data;
        //             if (experiences && experiences.length > 0) {
        //
        //
        //                 new Promise((resolve, reject)=>{
        //                     resolve(experiences.map((experience, key)=>{
        //                         return {key: 'experience_dw_'+experience.id, text: experience.description, value: experience.id};
        //                     }));
        //                 }).then((experienceList)=>{
        //                     experienceList.unshift({key: 'experience_dw_0', text: 'Any', value: '0'});
        //                     this.setState({dropdownValuesExperiences: experienceList});
        //                 })
        //
        //             }else{
        //                 this.setState({dropdownValuesExperiences: []});
        //             }
        //         }else{
        //             this.setState({dropdownValuesExperiences: []});
        //         }
        //     })

        this.props.dispatch(ExperienceActions.getExperiences());
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        // if (this.props.userID !== prevProps.userID) {
        //     this.fetchData(this.props.userID);
        // }

        if (this.props.state.experiences !== prevProps.state.experiences) {
            console.log("SearchBox props:", this.props)

            let experiences = this.props.state.experiences.experiences

            new Promise((resolve, reject) => {
                resolve(experiences.map((experience, key) => {
                    return {key: 'experience_dw_' + experience.id, text: experience.description, value: experience.id};
                }));
            }).then((experienceList) => {
                experienceList.unshift({key: 'experience_dw_0', text: 'Any', value: '0'});
                this.setState({dropdownValuesExperiences: experienceList});
            })

            console.log("SearchBox state:", this.state)

        }
    }


    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <SemanticDatepicker fluid label='Date' placeholder='Date' iconPosition='left'
                                        format="YYYY-MM-DD" minDate={new Date()}
                                        onDateChange={this.datePicked.bind(this)} name='date'/>
                    {/*<Form.Select fluid label='From' options={fromTimes} placeholder='From' icon='clock outline' iconPosition='left'/>*/}
                    {/*<Form.Select fluid label='To' options={toTimes} placeholder='To' icon='clock' iconPosition='left'/>*/}
                    <Form.Select fluid label='From' options={dropdownValuesFromTimes} placeholder='From' name='start'
                                 onChange={this.handleChange.bind(this)}/>
                    <Form.Select fluid label='To' options={dropdownValuesToTimes} placeholder='To' name='end'
                                 onChange={this.handleChange.bind(this)}/>
                    <Form.Select fluid label='Price' options={dropdownValuesPrices} placeholder='Price'
                                 defaultValue="lth" name='price' onChange={this.handleChange.bind(this)}/>
                    <Form.Select fluid label='Rating' options={dropdownValuesRatings} placeholder='Rating'
                                 defaultValue="0" name='rating' onChange={this.handleChange.bind(this)}/>

                    <Form.Select fluid label='Experience' options={this.state.dropdownValuesExperiences}
                                 placeholder='Experience'
                                 defaultValue="0" name='experience' onChange={this.handleChange.bind(this)}/>

                    <Form.Button color="green" fluid size='large' className="search-btn"
                                 onClick={this.search.bind(this)}>
                        <Icon name='search'/>
                        Search
                    </Form.Button>
                </Form.Group>

            </Form>
        );
    };
}

// export default SearchBox;


function mapStateToProps(state) {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(SearchBox);