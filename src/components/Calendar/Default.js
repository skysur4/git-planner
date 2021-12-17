import React from "react";

// core components
import {Calendar, momentLocalizer} from 'react-big-calendar'

import Toolbar from './Toolbar';
import Event from './Event';

import 'react-big-calendar/lib/css/react-big-calendar.css'

class Default extends React.Component {

	constructor(props){
		super(props);

		this.localizer = momentLocalizer(window.moment);

		this.state = {
		}
	}

	handleClickEvent = (e) => {
		console.log(e);
	}

	handleClickDate = (e) => {
		console.log(e);
	}

	render() {
		const formats = {
		  dateFormat: 'D',
		  monthHeaderFormat: 'MMM (YYYY)',
		  dayHeaderFormat: 'LL',
		  dayRangeHeaderFormat: ({ start, end }, culture, localizer) => localizer.format(start, 'YYYY MMM Do', culture) + ' 》 ' + localizer.format(end, 'YYYY MMM Do', culture),
		  agendaDateFormat: 'MMMDo',
		  agendaTimeFormat: 'HH:mm',
		  agendaHeaderFormat: ({ start, end }, culture, localizer) => localizer.format(start, 'MMMDo', culture) + '》' + localizer.format(end, 'MMMDo', culture),
		  agendaTimeRangeFormat: ({ start, end }, culture, localizer) => localizer.format(start, 'HH:mm', culture) + '》' + localizer.format(end, 'HH:mm', culture)
		}

		const components = {
			event: Event,
			toolbar: Toolbar
		}

		return (
		    <>
			    <Calendar
			      defaultView={this.props.view}
			      localizer={this.localizer}
			      events={this.props.events}
			      startAccessor="start"
			      endAccessor="end"
			      popup={true}
				  formats={formats}
				  components={components}
			      style={this.props.style}
			      onDrillDown={this.handleClickDate}
			      onSelectSlot={this.handleClickDate}
			      onSelectEvent={this.handleClickEvent}
			    />
		    </>
		)
	}
}

export default Default;
