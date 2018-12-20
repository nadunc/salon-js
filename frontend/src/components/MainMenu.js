import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Button, Container, Menu, Icon} from "semantic-ui-react";

import {CLIENT_ROUTES} from '../commonVarList'

class MainMenu extends Component {
    state = {}

    render() {
        return (
            <Menu inverted pointing size='large' className="main-menu">
                <Container>
                    <Menu.Item as='a'>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as={NavLink} to={CLIENT_ROUTES.TERMS}>Terms & Conditions</Menu.Item>
                    <Menu.Item as={NavLink} to={CLIENT_ROUTES.FAQ}>FAQ</Menu.Item>
                    {/*<Menu.Item position='right' as={NavLink} to={CLIENT_ROUTES.SEARCH} >*/}

                    {/*</Menu.Item>*/}
                    <Menu.Item position='right'>
                        {/*<Button inverted basic icon='search' as={Link} to={CLIENT_ROUTES.SEARCH} style={{marginRight: '2em'}}/>*/}
                        <Button color="black" icon='search' as={Link} to={CLIENT_ROUTES.SEARCH} style={{marginRight: '2em'}}/>
                        {/*<Icon inverted link={CLIENT_ROUTES.SEARCH} name='search' style={{marginLeft: '0.5em', marginRight: '2em'}}/>*/}
                            <Button size='mini' as={Link} to={CLIENT_ROUTES.SIGN_IN} style={{marginLeft: '0.5em'}}>
                                Sign In
                            </Button>
                            <Button size='mini' as={Link} to={CLIENT_ROUTES.SIGN_UP} style={{marginLeft: '0.5em'}}>
                                Sign Up
                            </Button>
                    </Menu.Item>
                </Container>
            </Menu>

        );
    };
}

export default MainMenu;