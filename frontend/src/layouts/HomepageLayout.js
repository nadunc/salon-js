import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Input,
    Form
} from 'semantic-ui-react'

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const dropdownValuesFromTimes = [
    {key: '00:00:00', text: '12 AM', value: '00:00:00'},
    {key: '01:00:00', text: '01 AM', value: '01:00:00'},
    {key: '02:00:00', text: '02 AM', value: '02:00:00'},
    {key: '03:00:00', text: '03 AM', value: '03:00:00'},
    {key: '04:00:00', text: '04 AM', value: '04:00:00'},
    {key: '05:00:00', text: '05 AM', value: '05:00:00'},
    {key: '06:00:00', text: '06 AM', value: '06:00:00'},
    {key: '07:00:00', text: '07 AM', value: '07:00:00'},
    {key: '08:00:00', text: '08 AM', value: '08:00:00'},
    {key: '09:00:00', text: '09 AM', value: '09:00:00'},
    {key: '10:00:00', text: '10 AM', value: '10:00:00'},
    {key: '11:00:00', text: '11 AM', value: '11:00:00'},
    {key: '12:00:00', text: '12 AM', value: '12:00:00'},
    {key: '13:00:00', text: '01 PM', value: '13:00:00'},
    {key: '14:00:00', text: '02 PM', value: '14:00:00'},
    {key: '15:00:00', text: '03 PM', value: '15:00:00'},
    {key: '16:00:00', text: '04 PM', value: '16:00:00'},
    {key: '17:00:00', text: '05 PM', value: '17:00:00'},
    {key: '18:00:00', text: '06 PM', value: '18:00:00'},
    {key: '19:00:00', text: '07 PM', value: '19:00:00'},
    {key: '20:00:00', text: '08 PM', value: '20:00:00'},
    {key: '21:00:00', text: '09 PM', value: '21:00:00'},
    {key: '22:00:00', text: '10 PM', value: '22:00:00'},
    {key: '23:00:00', text: '11 PM', value: '23:00:00'}
]
const dropdownValuesToTimes = [
    {key: '01:00:00', text: '01 AM', value: '01:00:00'},
    {key: '02:00:00', text: '02 AM', value: '02:00:00'},
    {key: '03:00:00', text: '03 AM', value: '03:00:00'},
    {key: '04:00:00', text: '04 AM', value: '04:00:00'},
    {key: '05:00:00', text: '05 AM', value: '05:00:00'},
    {key: '06:00:00', text: '06 AM', value: '06:00:00'},
    {key: '07:00:00', text: '07 AM', value: '07:00:00'},
    {key: '08:00:00', text: '08 AM', value: '08:00:00'},
    {key: '09:00:00', text: '09 AM', value: '09:00:00'},
    {key: '10:00:00', text: '10 AM', value: '10:00:00'},
    {key: '11:00:00', text: '11 AM', value: '11:00:00'},
    {key: '12:00:00', text: '12 AM', value: '12:00:00'},
    {key: '13:00:00', text: '01 PM', value: '13:00:00'},
    {key: '14:00:00', text: '02 PM', value: '14:00:00'},
    {key: '15:00:00', text: '03 PM', value: '15:00:00'},
    {key: '16:00:00', text: '04 PM', value: '16:00:00'},
    {key: '17:00:00', text: '05 PM', value: '17:00:00'},
    {key: '18:00:00', text: '06 PM', value: '18:00:00'},
    {key: '19:00:00', text: '07 PM', value: '19:00:00'},
    {key: '20:00:00', text: '08 PM', value: '20:00:00'},
    {key: '21:00:00', text: '09 PM', value: '21:00:00'},
    {key: '22:00:00', text: '10 PM', value: '22:00:00'},
    {key: '23:00:00', text: '11 PM', value: '23:00:00'},
    {key: '00:00:00', text: '12 AM', value: '00:00:00'},
]

const dropdownValuesPrices = [
    {key: 'price_dw_lth', text: 'Low to High', value: 'lth'},
    {key: 'price_dw_htl', text: 'High to Low', value: 'htl'}
]

const dropdownValuesRatings = [
    {key: 'rating_dw_any', text: 'Any', value: '0', selected:true},
    {key: 'rating_dw_1', text: '1 Star or Higher', value: '1'},
    {key: 'rating_dw_2', text: '2 Stars or Higher', value: '2'},
    {key: 'rating_dw_3', text: '3 Star or Higher', value: '3'},
    {key: 'rating_dw_4', text: '4 Star or Higher', value: '4'},
    {key: 'rating_dw_5', text: '5 Stars', value: '5'}
]



var datePicked = (e) => {
    console.log(e)
}
const HomepageHeading = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content='Search Stylists'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />


        <Form inverted>
            <Form.Group widths='equal'>
                <SemanticDatepicker fluid label='Date' placeholder='Date' iconPosition='left'
                                    onDateChange={datePicked}/>
                {/*<Form.Select fluid label='From' options={fromTimes} placeholder='From' icon='clock outline' iconPosition='left'/>*/}
                {/*<Form.Select fluid label='To' options={toTimes} placeholder='To' icon='clock' iconPosition='left'/>*/}
                <Form.Select fluid label='From' options={dropdownValuesFromTimes} placeholder='From'/>
                <Form.Select fluid label='To' options={dropdownValuesToTimes} placeholder='To'/>
                <Form.Select fluid label='Price' options={dropdownValuesPrices} placeholder='Price' defaultValue="lth"/>
                <Form.Select fluid label='Rating' options={dropdownValuesRatings} placeholder='Rating' defaultValue="0"/>
            </Form.Group>


            <Form.Button primary size='huge'>
                <Icon name='left search'/>
                Search

            </Form.Button>
        </Form>
        {/*<Button primary size='huge'>*/}
            {/*Get Started*/}
            {/*<Icon name='right arrow'/>*/}
        {/*</Button>*/}
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: true})

    render() {
        const {children} = this.props
        const {fixed} = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 700, padding: '1em 0em'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{marginLeft: '0.5em'}}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading/>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({sidebarOpened: false})

    handleToggle = () => this.setState({sidebarOpened: true})

    render() {
        const {children} = this.props
        const {sidebarOpened} = this.state

        return (
            <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item as='a'>Log in</Menu.Item>
                    <Menu.Item as='a'>Sign Up</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 350, padding: '1em 0em'}}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar'/>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted style={{marginLeft: '0.5em'}}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile/>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}



const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{padding: '0em'}} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Want to become a stylist?
                        </Header>
                        <Image bordered rounded centered size='large' src='/images/wireframe/white-image.png'/>
                        <p style={{fontSize: '1.33em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                        </p>
                        <Button size='huge'>Sign up as a Stylist</Button>
                    </Grid.Column>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Looking for hire stylists?
                        </Header>
                        <Image bordered rounded centered size='large' src='/images/wireframe/white-image.png'/>
                        <p style={{fontSize: '1.33em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                        </p>
                        <Button size='huge'>Sign up as a Salon</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>



        <Segment inverted vertical style={{padding: '5em 0em'}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About'/>
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services'/>
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default HomepageLayout