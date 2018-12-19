import React, {Component} from 'react'
import {Button, Container, Menu} from "semantic-ui-react";

class MainMenu extends Component {
    state = {}

    render() {
        return (
            <div>
                <Menu size='large'>
                    <Container>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item position='right'>
                            <Button as='a'>
                                Log in
                            </Button>
                            <Button as='a' style={{marginLeft: '0.5em'}}>
                                Sign Up
                            </Button>
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    };
}

export default MainMenu;