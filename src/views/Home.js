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

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import Calendar from 'components/Calendar/Default';

import moment from 'moment';

class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
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
		}
	}

	updateDimensions = () => {
		let winWidth = window.innerWidth;
		let winHeight = window.innerHeight;

		if(winWidth > 991) winWidth = winWidth - 360;
		winHeight = winHeight - 310;

		if(winHeight < winWidth * 0.9) winHeight = winWidth * 0.9;
		if(winHeight > winWidth * 1.1) winHeight = winWidth * 1.1;


	    this.setState({calHeight: winHeight});
	}

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateDimensions);
		clearInterval(this.currentTimer);
	}

	componentDidMount = () => {
		window.addEventListener("resize", this.updateDimensions);
		window.notify('tr');
	    this.currentTimer = setInterval(
	      () => this.tick(),
	      1000
	    );

	    this.updateDimensions();
	}

	tick() {
		this.setState({
			moment: moment()
		});
	}

	render() {
		return (
		    <>
		      <PanelHeader size="sm" />
		      <div className="content">
		        <Row>
		          <Col md={12} className="d-none d-lg-flex">
		            <Card>
		              <CardHeader>
		                <h5 className="title">{t('scan')}</h5>
		                <p className="category">{this.state.moment.format('LL LTS')}</p>
		              </CardHeader>
		              <CardBody className="all-icons" type="warning">
					    <Calendar
					      view='month'
					      events={this.state.eventsList}

					      style={{ height: this.state.calHeight }}
					    />
		              </CardBody>
		            </Card>
		          </Col>
		        </Row>

		        <Row>
		          <Col sm={12} className="d-flex d-lg-none">
		            <Card>
		              <CardHeader>
		                <h5 className="title">{t('scan')}</h5>
		                <p className="category">{this.state.moment.format('LL LTS')}</p>
		              </CardHeader>
		              <CardBody className="all-icons" type="warning">
					    <Calendar
					      view='agenda'
					      events={this.state.eventsList}
					      style={{ height: this.state.calHeight }}
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
