import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Button, Container, Menu, Dropdown, Image, Label, List} from "semantic-ui-react";

import {CLIENT_ROUTES, COMMON_ERROR_MESSAGE, SERVER_ROUTES} from '../common/commonVarList'
import connect from "react-redux/es/connect/connect";
import moment from "moment";
import axios from "axios";

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


    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            unReadNotificationCount: 0,
            isHomePage : ((props.isHomePage)? true:false)
        }

        this.fetchNotifications = this.fetchNotifications.bind(this)
        this.readNotification = this.readNotification.bind(this)
    }


    componentDidMount() {
        let fetchNotifications = this.fetchNotifications

        fetchNotifications();
        setInterval(fetchNotifications, 10000);

    }

    fetchNotifications() {
        if(this.props.auth.isAuth){
        axios.post(SERVER_ROUTES.GET_NOTIFICATIONS, {token: this.props.auth.user.token}).then((res) => {
            if (res.data.success) {
                let unReadNotificationCount = 0;
                this.setState({unReadNotificationCount: 0})

                res.data.data.map((notification, key) => {
                    if (!notification.seen) {
                        unReadNotificationCount++;
                        this.setState({unReadNotificationCount: unReadNotificationCount})
                    }
                    return;
                });


                this.setState({notifications: res.data.data})
            }
        }).catch((err) => {
        })
        }
    }

    readNotification(notificationId){
        axios.patch(SERVER_ROUTES.GET_NOTIFICATIONS, {token: this.props.auth.user.token, notification_id:notificationId}).then((res) => {
            this.fetchNotifications()
        }).catch((err) => {
        })
    }

    render() {
        let auth = this.props.auth;
        let user = this.props.auth.user;

        let profileElem;
        let notificationElem;

        if (auth.isAuth) {
            //
            // console.log('auth user: ', user.user)
            //
            let image, name;

            if (user.userType.toUpperCase() === 'Stylist'.toUpperCase()) {
                image = user.stylist.image;
                image = (image === '' || image === null) ? '/images/user_placeholder.jpg' : image;
                name = user.stylist.firstname;
            } else if (user.userType.toUpperCase() === 'Salon'.toUpperCase()) {
                image = user.salon.image;
                image = (image === '' || image === null) ? '/images/salon_placeholder.png' : image;
                name = user.salon.name;
            }


            const triggerProfileElem = (
                <span><Image avatar src={image}/> {name}</span>
            )


            profileElem = (
                <Dropdown trigger={triggerProfileElem}>
                    <Dropdown.Menu>
                        <Dropdown.Header>Signed in as {name}</Dropdown.Header>
                        <Dropdown.Item as={Link} to={CLIENT_ROUTES.DASHBOARD}>Dashboard</Dropdown.Item>
                        <Dropdown.Item as={Link} to={CLIENT_ROUTES.SIGN_OUT}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )


            const triggerNotificationElem = (
                <div>
                    <Button circular icon='bell' color="black" size='large'/>
                    {(this.state.unReadNotificationCount > 0) ? (
                        <Label className='notification-count' color='green' content={this.state.unReadNotificationCount}
                               size='mini' circular/>) : ''}
                </div>
            )

            notificationElem = (
                //{/*<div>*/}

                // {/*<Button circular icon='bell' color="black" size='large'/>*/}

                // {/*<Label className='notification-count' color='green' content='2' size='mini' circular/>*/}
                // {/*</div>*/}

                <Dropdown trigger={triggerNotificationElem} icon={null} style={{marginRight: '1em'}}>
                    <Dropdown.Menu className='left'>
                        {/*<Dropdown.Item>*/}
                        <List divided relaxed selection animated className='notification-list'>

                            {this.state.notifications.sort((a,b)=> { return b.id - a.id }).map((notification, key) => {
                                let itemClass = (notification.seen)? 'notification-list-item' : 'notification-list-item notification-unread';

                                return (
                                    <List.Item className={itemClass} key={key} onClick={()=>{this.readNotification(notification.id)}}>
                                        <List.Content>
                                            <List.Description>
                                                <p className='notification-description'>{notification.description}</p>
                                                <p className='notification-time'>{moment(notification.created_at).calendar()}</p>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                )
                            })}

                        </List>
                        {/*</Dropdown.Item>*/}

                    </Dropdown.Menu>
                </Dropdown>
            )
        }


        let menuClassName = (this.state.isHomePage) ? 'main-menu mb-0' : 'main-menu';

        return (
            <Menu inverted pointing size='large' className={menuClassName}>
                <Container>
                    <Menu.Item as={Link} to={CLIENT_ROUTES.HOME}>Home</Menu.Item>
                    {/*<Menu.Item as='a'>Work</Menu.Item>*/}
                    <Menu.Item as={NavLink} to={CLIENT_ROUTES.TERMS}>Terms & Conditions</Menu.Item>
                    <Menu.Item as={NavLink} to={CLIENT_ROUTES.FAQ}>FAQ</Menu.Item>
                    {/*<Menu.Item position='right' as={NavLink} to={CLIENT_ROUTES.SEARCH} >*/}

                    {/*</Menu.Item>*/}
                    <Menu.Item position='right'>
                        {/*<Button inverted basic icon='search' as={Link} to={CLIENT_ROUTES.SEARCH} style={{marginRight: '2em'}}/>*/}
                        <Button circular size='large' color="black" icon='search' as={Link} to={CLIENT_ROUTES.SEARCH}
                                style={{marginRight: '2em'}}/>
                        {/*<Icon inverted link={CLIENT_ROUTES.SEARCH} name='search' style={{marginLeft: '0.5em', marginRight: '2em'}}/>*/}

                        {!auth.isAuth &&
                        <Button size='mini' as={Link} to={CLIENT_ROUTES.SIGN_IN} style={{marginLeft: '0.5em'}}> Sign
                            In</Button>
                        }

                        {auth.isAuth ? '' :
                            <Button size='mini' as={Link} to={CLIENT_ROUTES.SIGN_UP} style={{marginLeft: '0.5em'}}>Sign
                                Up</Button>
                        }

                        {auth.isAuth && notificationElem}

                        {auth.isAuth && profileElem}


                    </Menu.Item>
                </Container>
            </Menu>

        );
    };
}

// export default MainMenu;


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(MainMenu);