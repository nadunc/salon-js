import React, {Component} from 'react'
import MainMenu from '../components/MainMenu';
import StylistContainer from '../containers/StylistContainer';
import {Container} from 'semantic-ui-react'


class SearchPageLayout extends Component {
    state = {
        stylists: [
            {name: 'AAAA', age: 24},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
            {name: 'BBBB', age: 25},
        ]
    };

    render() {
        return (
            <div>
                <MainMenu/>

                <Container>

                    <h1>Search Results</h1>

                    <StylistContainer stylists={this.state.stylists}/>
                </Container>
            </div>
        );
    };

};

export default SearchPageLayout;