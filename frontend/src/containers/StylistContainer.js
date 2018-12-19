import React, {Component} from 'react'
import {Button, Container, Menu, Card} from "semantic-ui-react";
import Stylist from '../components/Stylist'


class StylistContainer extends Component {
    state = {
        // stylists:[]
    }

    constructor(props) {
        super(props);
    }

    render() {
        let stylists = this.props.stylists.map((stylist, key)=>{
            return <Stylist stylist={stylist}/>
        });

        return (
            <Card.Group>
                {stylists}
            </Card.Group>


        );
    };
}

export default StylistContainer;