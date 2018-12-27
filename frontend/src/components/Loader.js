import React, {Component} from 'react'
import {Segment, Dimmer, Loader, Image} from "semantic-ui-react";

class StylistCard extends Component {


    render() {

        return (
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        );
    };
}

export default StylistCard;