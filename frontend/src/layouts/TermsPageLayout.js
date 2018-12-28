import React, {Component} from 'react'
import MainMenu from '../components/MainMenu';
import {Container, Segment} from 'semantic-ui-react'
import Footer from "../components/Footer";


class TermsPageLayout extends Component {


    render() {
        return (
            <div>
                <MainMenu/>

                <Container className='main-content-container'>

                    <h1 className='page-h1'>Terms & Conditions</h1>

                    <Segment vertical>

                        <p className="terms-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                            pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                            rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                            justo
                            commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                            parturient
                            montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
                            mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                        </p>

                        <p className="terms-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                            pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                            rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                            justo
                            commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                            parturient
                            montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
                            mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                        </p>

                        <p className="terms-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
                            laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
                            pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed
                            rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                            justo
                            commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                            parturient
                            montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
                            mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                        </p>
                    </Segment>


                </Container>
                <Footer/>
            </div>
        );
    };

}

export default TermsPageLayout;