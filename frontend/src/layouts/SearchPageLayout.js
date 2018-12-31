import React, {Component} from 'react'
import MainMenu from '../components/MainMenu';
import StylistContainer from '../containers/StylistContainer';
import {Container} from 'semantic-ui-react'
import axios from 'axios'

import {SERVER_ROUTES} from '../common/commonVarList'
import SearchBox from "../components/SearchBox";
import connect from "react-redux/es/connect/connect";
import Footer from "../components/Footer";

class SearchPageLayout extends Component {

    constructor(props){
        super(props)
        this.state = {
            timeslots: [],
            noStylists : false
            // stylists: [
            //     {firstname: 'XXXXXX', lastname: 'YYYYYYYYYY', work_as_stylist:true, work_as_educator:true, bio: ''},
            //
            //
            //
            //     {name: 'Dulakshi Soysa', age: 25},
            //     {name: 'Prasad Prasad', age: 25},
            //     {name: 'Ranjitha Ranjitha', age: 25},
            //     {name: 'Sajith Chamara', age: 25},
            //     {name: 'Vivesh Kumar', age: 25},
            //     {name: 'Udara Abeythilaka', age: 25},
            //     {name: 'BBBB', age: 25},
            //     {name: 'BBBB', age: 25},
            //     {name: 'BBBB', age: 25},
            //     {name: 'BBBB', age: 25},
            //     {name: 'BBBB', age: 25},
            //     {name: 'BBBB', age: 25},
            // ]
        };
    }

    componentDidMount() {
        // axios.get(CONSTANTS.BACKEND_API_ROOT+'/stylists')
        //     .then(res => {
        //         let obj = res.data;
        //
        //         if(obj.success){
        //             let stylists = obj.data;
        //             this.setState({ stylists: stylists });
        //         }
        //     })
    }

    search(data) {
        this.setState({noStylists:false})
        axios.post(SERVER_ROUTES.GET_AVAILABLE_STYLISTS, data)
            .then(res => {
                let obj = res.data;

                if (obj.success) {
                    let timeslots = obj.data;
                    if (timeslots && timeslots.length > 0) {
                        this.setState({timeslots: timeslots});
                    }else{
                        this.setState({timeslots: [], noStylists: true});
                    }
                }else{
                    this.setState({timeslots: [], noStylists:true});
                }

            })
    }


    render() {
        return (
            <div>
                <MainMenu/>

                <Container className='main-content-container'>

                    <SearchBox search={this.search.bind(this)}/>

                    <h1 className="page-h1">Search Results</h1>

                    <StylistContainer timeslots={this.state.timeslots} auth={this.props.auth}/>

                    {this.state.noStylists && <h3>No results. Please try again with different parameters.</h3>}
                </Container>
                <Footer/>
            </div>
        );
    };

};

// export default SearchPageLayout;


function mapStateToProps(state) {

    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(SearchPageLayout);