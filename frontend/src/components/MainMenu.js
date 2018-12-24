import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Button, Container, Menu, Dropdown, Image} from "semantic-ui-react";

import {CLIENT_ROUTES} from '../common/commonVarList'
import connect from "react-redux/es/connect/connect";

class MainMenu extends Component {

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     // if (this.props.userID !== prevProps.userID) {
    //     //     this.fetchData(this.props.userID);
    //     // }
    //
    //     if (this.props.state.user !== prevProps.state.user) {
    //         console.log("MainMenu props:", this.props)
    //
    //         this.setState({user: this.props.state.user});
    //
    //         console.log("MainMenu state:", this.state)
    //     }

    // this.props.state.user
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.state.user !== prevState.state.user) {
    //         // return { user: nextProps.state.user};
    //         this.setState({user: this.nextProps.state.user});
    //     }
    // }


    render() {
        let user = this.props.state.user;
        // user.isAuth = false
        // user.user_role = Stylist | Salon | Admin

        let profileElem;

        if (user.isAuth) {

            console.log('auth user: ', user.user)

            let image, name;

            if (user.userType.toUpperCase() === 'Stylist'.toUpperCase()) {
                image = user.user.stylist.image;
                image = (image === '' || image === null) ? '/images/user_placeholder.jpg' : image;
                name = user.user.stylist.firstname;
            } else if (user.userType.toUpperCase() === 'Salon'.toUpperCase()) {
                image = user.user.salon.image;
                image = (image === '' || image === null)? '/images/salon_placeholder.png' : image;
                name = user.user.salon.name;
            }


            const trigger = (
                <span><Image avatar src={image}/> {name}</span>
            )


            profileElem = (
                <Dropdown trigger={trigger}>
                    <Dropdown.Menu>
                        <Dropdown.Header>Signed in as {name}</Dropdown.Header>
                        <Dropdown.Item as={Link} to={CLIENT_ROUTES.DASHBOARD}>Dashboard</Dropdown.Item>
                        <Dropdown.Item as={Link} to={CLIENT_ROUTES.SIGN_OUT}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }


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
                        <Button circular color="black" icon='search' as={Link} to={CLIENT_ROUTES.SEARCH}
                                style={{marginRight: '2em'}}/>
                        {/*<Icon inverted link={CLIENT_ROUTES.SEARCH} name='search' style={{marginLeft: '0.5em', marginRight: '2em'}}/>*/}

                        {!user.isAuth &&
                            <Button size='mini' as={Link} to={CLIENT_ROUTES.SIGN_IN} style={{marginLeft: '0.5em'}}> Sign In</Button>
                        }

                        {user.isAuth ? '' :
                            <Button size='mini' as={Link} to={CLIENT_ROUTES.SIGN_UP} style={{marginLeft: '0.5em'}}>Sign Up</Button>
                        }

                        {user.isAuth && profileElem}


                    </Menu.Item>
                </Container>
            </Menu>

        );
    };
}

// export default MainMenu;


function mapStateToProps(state) {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(MainMenu);