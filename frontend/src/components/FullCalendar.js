import React, {Component} from 'react'
import $ from 'jquery';
import 'fullcalendar';
import moment from 'moment'


class FullCalendar extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        $('#calendar').fullCalendar({
            // put your options and callbacks here
            defaultView: 'month',
            // dayClick: function(e) {
            //     alert('Date Clicked: '+ e.format('YYYY-MM-DD').toString());
            // },
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            selectable: true,
            select: function (e) {
                console.log(e)
                    alert('Date Clicked: '+ e.format('YYYY-MM-DD HH:mm:ss').toString());

            },
        })
    }

    render() {
        return (
            <div id='calendar'/>
        );
    };
}

export default FullCalendar;