import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import  {Menu} from "semantic-ui-react";

import {CLIENT_ROUTES} from '../commonVarList'

class DashboardSideMenu extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    getMenu(){
        let { activeItem } = this.state;
        let userRole = this.props.userRole;


        if (userRole === 'stylist') {
            return(
                <Menu pointing vertical>
                    <Menu.Item name='dashboard' active={activeItem === 'dashboard'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_HOME} onClick={this.handleItemClick} />
                    <Menu.Item name='calendar' active={activeItem === 'calendar'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_CALENDAR} onClick={this.handleItemClick} />
                    <Menu.Item name='portfolio' active={activeItem === 'portfolio'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_PORTFOLIO} onClick={this.handleItemClick} />
                    <Menu.Item name='bookings' active={activeItem === 'bookings'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_BOOKINGS} onClick={this.handleItemClick} />
                    <Menu.Item name='settings' active={activeItem === 'settings'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_SETTINGS} onClick={this.handleItemClick} />
                    <Menu.Item name='preferences' active={activeItem === 'preferences'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_PREFERENCES} onClick={this.handleItemClick} />
                    <Menu.Item name='change password' active={activeItem === 'change password'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} onClick={this.handleItemClick} />
                </Menu>
            );
        } else if (userRole === 'salon') {
            return(
                <Menu pointing vertical>
                    <Menu.Item name='dashboard' active={activeItem === 'dashboard'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_HOME} onClick={this.handleItemClick} />
                    {/*<Menu.Item name='calendar' active={activeItem === 'calendar'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_CALENDAR} onClick={this.handleItemClick} />*/}
                    <Menu.Item name='Salon Profile' active={activeItem === 'salon profile'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_PROFILE} onClick={this.handleItemClick} />
                    <Menu.Item name='bookings' active={activeItem === 'bookings'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_BOOKINGS} onClick={this.handleItemClick} />
                    <Menu.Item name='settings' active={activeItem === 'settings'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_SETTINGS} onClick={this.handleItemClick} />
                    {/*<Menu.Item name='preferences' active={activeItem === 'preferences'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_PREFERENCES} onClick={this.handleItemClick} />*/}
                    <Menu.Item name='change password' active={activeItem === 'change password'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} onClick={this.handleItemClick} />
                </Menu>
            );
        }else if (userRole === 'admin') {
            return(
                <Menu pointing vertical>
                    <Menu.Item name='dashboard' active={activeItem === 'dashboard'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_HOME} onClick={this.handleItemClick} />
                    {/*<Menu.Item name='calendar' active={activeItem === 'calendar'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_CALENDAR} onClick={this.handleItemClick} />*/}
                    {/*<Menu.Item name='portfolio' active={activeItem === 'portfolio'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_PORTFOLIO} onClick={this.handleItemClick} />*/}
                    {/*<Menu.Item name='bookings' active={activeItem === 'bookings'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_BOOKINGS} onClick={this.handleItemClick} />*/}
                    {/*<Menu.Item name='settings' active={activeItem === 'settings'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_SETTINGS} onClick={this.handleItemClick} />*/}
                    {/*<Menu.Item name='preferences' active={activeItem === 'preferences'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_PREFERENCES} onClick={this.handleItemClick} />*/}
                    {/*<Menu.Item name='change password' active={activeItem === 'change password'} as={NavLink} to={CLIENT_ROUTES.DASHBOARD_CHANGE_PASSWORD} onClick={this.handleItemClick} />*/}
                </Menu>
            );
        }
    }

    render(){

        let menu = this.getMenu()
        return (
            menu
        );
    };
}
export default DashboardSideMenu;