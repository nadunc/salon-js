import React, {Component} from 'react'
import {Card} from "semantic-ui-react";
import StylistCard from '../components/StylistCard'


class StylistContainer extends Component {
    state = {
        // stylists:[]
    }

    constructor(props) {
        super(props);
    }

    render() {
        let timeslots = this.props.timeslots.map((timeslot, key)=>{
            return <StylistCard timeslot={timeslot} key={key} auth={this.props.auth}/>
        });

        return (
            <Card.Group>
                {timeslots}
            </Card.Group>


        );
    };
}

export default StylistContainer;