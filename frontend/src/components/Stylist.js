import React, {Component} from 'react'
import {Button, Card, Image, GridRow} from "semantic-ui-react";

class Stylist extends Component {
    state = {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Card>
                    <Card.Content>
                        <GridRow>

                        </GridRow>
                        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                        <Card.Header>{this.props.stylist.name}</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>

                </Card>
        );
    };
}

export default Stylist;