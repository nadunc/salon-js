import React, {Component} from 'react'
import $ from 'jquery';
import 'fullcalendar';
import moment from 'moment'


class FullCalendar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({events:nextProps.events})
    }

    render() {
        let _dateClicked = this.props.dateClicked;
        let events = this.state.events;

        $('#calendar').fullCalendar({
            // put your options and callbacks here
            defaultView: 'month',
            dayClick: function (e) {
                // alert('Date Clicked: '+ e.format('YYYY-MM-DD').toString());
                _dateClicked(e)

            },
            events: events,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            // selectable: true,
            // select: function (e) {
            //     console.log(e)
            //         alert('Date Clicked: '+ e.format('YYYY-MM-DD HH:mm:ss').toString());
            //
            // },
            select: function (startDate, endDate) {
                // alert('selected ' + startDate.format() + ' to ' + endDate.format());
            }
        })


        return (
            <div id='calendar'/>
        );
    };
}

export default FullCalendar;