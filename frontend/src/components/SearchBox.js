import React, {Component} from 'react'
import {connect} from "react-redux";

import {Form, Icon} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import moment from 'moment'
import axios from "axios";
import {SERVER_ROUTES, CLIENT_ROUTES} from "../common/commonVarList";

import * as ExperienceActions from '../actions/experienceActions'
import dropdownValues from '../common/dropdownValues'


class SearchBox extends Component {

    constructor(props){
        super(props)

        this.state = {
            date: '',
            start: '',
            end: '',
            price: 'lth',
            rating: '0',
            experience: '0',
            role: 1,
            dropdownValuesExperiences: []

        }
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
        this.props.search({
            date: this.state.date,
            start: this.state.start,
            end: this.state.end,
            price: this.state.price,
            rating: this.state.rating,
            experience: this.state.experience,
            role: this.state.role,
        })
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
                    <Form.Select fluid label='From' options={dropdownValues.FromTimes} placeholder='From' name='start'
                                 onChange={this.handleChange.bind(this)}/>
                    <Form.Select fluid label='To' options={dropdownValues.ToTimes} placeholder='To' name='end'
                                 onChange={this.handleChange.bind(this)}/>
                    <Form.Select fluid label='Price' options={dropdownValues.Prices} placeholder='Price'
                                 defaultValue="lth" name='price' onChange={this.handleChange.bind(this)}/>
                    {/*<Form.Select fluid label='Rating' options={dropdownValues.Ratings} placeholder='Rating'*/}
                                 {/*defaultValue="0" name='rating' onChange={this.handleChange.bind(this)}/>*/}

                    {/*<Form.Select fluid label='Experience' options={this.state.dropdownValuesExperiences}*/}
                                 {/*placeholder='Experience'*/}
                                 {/*defaultValue="0" name='experience' onChange={this.handleChange.bind(this)}/>*/}

                    <Form.Select fluid label='Role' options={dropdownValues.Roles}
                                 placeholder='Role'
                                 defaultValue="1" name='role' onChange={this.handleChange.bind(this)}/>

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