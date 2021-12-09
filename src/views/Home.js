/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import moment from 'moment';

import {Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import Toolbar from 'components/Calendar/Toolbar';

function Event({ event }) {
  return (
    <span>
      <strong>
        {event.title}
      </strong>
      { event.desc && (':  ' + event.desc) }
    </span>
  )
}

class Home extends React.Component {

	constructor(props){
		super(props);

  		this.t = props.t;
  		this.locale = props.i18n.resolvedLanguage;

		this.localizer = momentLocalizer(moment);

		this.handleClickEvent = this.handleClickEvent.bind(this);
		this.handleClickDate = this.handleClickDate.bind(this);

		this.state = {
			moment: moment(),
			eventsList: [
				{
				  title: "test",
				  desc: "아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 아주 긴 설명 테스트",
				  start: new Date(1638953934689),
				  end: new Date(1638953934689),
				  allDay: true,
				  resource: {}
				},
				{
				  title: "test2",
				  desc: "설명 테스트",
				  start: new Date(1638953934689),
				  end: new Date(1638953944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test3",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test4",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test5",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test6",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test7",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test8",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test9",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				},
				{
				  title: "test asldkjfokjq a sodj o123 41 234  ",
				  start: new Date(1638953934689),
				  end: new Date(1638981944689),
				  allDay: false,
				  resource: ""
				}
			],

			winWidth: 1024,
			winHeight: 768,
		}
	}

	updateDimensions = () => {
	    this.setState({winWidth: window.innerWidth, winHeight: window.innerHeight});
	}

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateDimensions);

		clearInterval(this.currentTimer);
	}

	componentDidMount = () => {
		window.notify('tr');
		window.addEventListener("resize", this.updateDimensions);

	    this.currentTimer = setInterval(
	      () => this.tick(),
	      1000
	    );
	}

	tick() {
		this.setState({
			moment: moment()
		});
	}

	handleClickEvent = (e) => {
		console.log(e);
	}

	handleClickDate = (e) => {
		console.log(e);
	}

	handleView = (e) => {
		debugger;
		console.log(e);
	}

	render() {
		const formats = {
		  dateFormat: 'Do',
		  monthHeaderFormat: 'YYYY/MM',
		  dayHeaderFormat: 'Mo Do',
		  dayRangeHeaderFormat: ({ start, end }, culture, localizer) => localizer.format(start, 'LL', culture) + '~' + localizer.format(end, 'LL', culture),
		  agendaDateFormat: 'Mo Do',
		  agendaTimeFormat: 'HH:mm',
		  agendaHeaderFormat: ({ start, end }, culture, localizer) => localizer.format(start, 'Mo Do', culture) + '~' + localizer.format(end, 'Mo Do', culture),
		  agendaTimeRangeFormat: ({ start, end }, culture, localizer) => localizer.format(start, 'HH:mm', culture) + '~' + localizer.format(end, 'HH:mm', culture)
		}

		const components = {
			event: Event,
			toolbar: Toolbar
		}

		return (
		    <>
		      <PanelHeader size="sm" />
		      <div className="content">
		        <Row>
		          <Col md={12} className="d-none d-md-flex">
		            <Card>
		              <CardHeader>
		                <h5 className="title">{this.t('calendar')}</h5>
		                <p className="category">{moment().format('LL')} {this.state.moment.format('LTS')}</p>
		              </CardHeader>
		              <CardBody className="all-icons" type="warning">
					    <Calendar
					      view="month"
					      localizer={this.localizer}
					      events={this.state.eventsList}
					      startAccessor="start"
					      endAccessor="end"
					      popup={true}
						  formats={formats}
						  components={components}
					      style={{ height: this.state.winWidth/this.state.winHeight>1?this.state.winHeight:this.state.winHeight*0.7 }}
					      onDrillDown={this.handleClickDate}
  					      onSelectSlot={this.handleClickDate}
					      onSelectEvent={this.handleClickEvent}
					      onView={this.handleView}
					    />
		              </CardBody>
		            </Card>
		          </Col>
		        </Row>

		        <Row>
		          <Col sm={12} className="d-flex d-md-none">
		            <Card>
		              <CardHeader>
		                <h5 className="title">{this.t('agenda')}</h5>
		                <p className="category">{moment().format('LL')} {this.state.moment.format('LTS')}</p>
		              </CardHeader>
		              <CardBody className="all-icons" type="warning">
					    <Calendar
					      view="agenda"
					      localizer={this.localizer}
					      events={this.state.eventsList}
					      startAccessor="start"
					      endAccessor="end"
					      popup={true}
						  formats = {formats}
						  components={components}
					      style={{ height: this.state.winHeight }}
					      onDrillDown={this.handleClickDate}
					      onSelectSlot={this.handleClickDate}
					      onSelectEvent={this.handleClickEvent}
					      onView={this.handleView}
					    />
		              </CardBody>
		            </Card>
		          </Col>
		        </Row>
		      </div>
		    </>
		)
	}
}

export default Home;
