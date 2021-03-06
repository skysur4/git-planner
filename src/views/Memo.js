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

// prepare SunEditor
import SignaturePad from "signature_pad";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Table,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Button
} from "reactstrap";

import Tesseract from 'tesseract.js';

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Memo extends React.Component {

	constructor(props){
		super(props);

  		this.currentLang = i18n.resolvedLanguage;

		this.state = {
			canvWidth: 300,
			canvHeight: 200,
			img: undefined,
			hashtag:[]
		};
	}

	updateDimensions = () => {
		let isMobile = window.innerWidth === window.screen.width;
		let winWidth = window.innerWidth;
		let winHeight = window.innerHeight;
		let ratio = winWidth/winHeight;
		let isSidebarOn = isMobile?((winWidth>991&&ratio<1)||winWidth>1024):(winWidth>991);

		winWidth = winWidth - 110 - (isSidebarOn ? 260 : 0);
		winHeight = winHeight - 400;

		//if(winHeight < winWidth * 0.9) winHeight = winWidth * 0.9;
		//if(winHeight > winWidth * 1.1) winHeight = winWidth * 1.1;


	    this.setState({canvWidth: winWidth, canvHeight: winHeight});
	    this.handleClean();
	}

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateDimensions);
	}

	componentDidMount = () => {
		window.addEventListener("resize", this.updateDimensions);

		this.handleStart();
	}

	handleClean = (e) => {
		this.setState({img: undefined});
		this.signaturePad.clear();
	};

	handleSaveImage = (e) => {
		this.setState({img: this.signaturePad.toDataURL()});
		//window.open(this.signaturePad.toDataURL(), "?????????");
	};

	handleTransform = (e) => {
		Tesseract.recognize(
		  this.signaturePad.toDataURL("image/svg+xml"),
		  'kor',
		  { logger: m => console.log(m) }
		).then(({ data: { text } }) => {
		  	if(confirm("?????? ?????? ????????? ?????????????????????????\n???" + text + "???")){
				window.localStorage.setItem("ocr", text);
				window.location.replace(process.env.REACT_APP_WEB_ROOT + "/note");
			}
		})
	};

	handleStart = (e) => {
		const canvas = document.querySelector("canvas");
		this.signaturePad = new SignaturePad(canvas, {
		    minWidth: 1, //this.state.winWidth*0.8,
		    maxWidth: 1, //this.state.winWidth/this.state.winHeight>1?this.state.winHeight*0.7:this.state.winHeight*0.3,
		    penColor: "rgb(66, 133, 244)"
		});

		this.updateDimensions();
	};

	render() {
		return (
		    <>
		      <PanelHeader size="sm" />
		      <div className="content">
		      		{!this.state.img &&
			        <Row>
			          <Col xs={12}>
					    <Card>
					      <CardHeader>
					        <h5 className="title">{t('memo.title')}</h5>
		                	<p className="category">{t('memo.resize-will-reset')}</p>
					      </CardHeader>
					      <CardBody>
							  <CardText className="text-center">
								<canvas
									width={this.state.canvWidth}
									height={this.state.canvHeight} />
							  </CardText>
							  <InputGroup style={{justifyContent: 'space-between'}}>
								  <FormGroup>
							  		  <Button color="default" onClick={this.handleClean}>??????</Button>
						  		  </FormGroup>
								  <FormGroup className="text-right">
								  	  <Button color="primary" onClick={this.handleSaveImage}>????????????</Button>
							  		  <Button color="warning" onClick={this.handleTransform}>??????</Button>
						  		  </FormGroup>
					  		  </InputGroup>
					      </CardBody>
					    </Card>
			          </Col>
			    	</Row>
					}

			    	{this.state.img &&
			        <Row>
			          <Col xs={12}>
					    <Card>
						  <CardHeader>
					        <h5 className="title">{t('memo.title')}</h5>
		                	<p className="category">????????? ????????????(?????? ?????? ??????)?????? ???????????????.</p>
					      </CardHeader>
					      <CardBody>
							  <CardText className="text-center">
								<img id="imagePng" src={this.state.img} />
							  </CardText>
							  <FormGroup className="text-right">
						  		  <Button color="success" onClick={this.handleClean}>????????????</Button>
					  		  </FormGroup>
					      </CardBody>
					    </Card>
			          </Col>
			    	</Row>
			    	}
		      </div>
		    </>
		)
	}
}

export default Memo;
