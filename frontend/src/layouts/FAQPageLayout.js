import React, {Component} from 'react'
import MainMenu from '../components/MainMenu';
import {Container, Accordion, Icon} from 'semantic-ui-react'



class SearchPageLayout extends Component {

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }


    render() {

        const { activeIndex } = this.state

        return (
            <div>
                <MainMenu/>

                <Container>

                    <h1 className='page-h1'>Frequently Asked Questions (FAQ)</h1>

                    <Accordion fluid styled>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Aenean euismod bibendum
                            laoreet?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>



                        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Proin sodales pulvinar sic tempor?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                            rhoncus pronin sapien nunc accuan eget?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 5}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 6}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                                laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                                pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                                rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                        </Accordion.Content>
                    </Accordion>

                </Container>
            </div>
        );
    };

}

export default SearchPageLayout;