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
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

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

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Plan extends React.Component {

	constructor(props){
		super(props);

  		this.currentLang = i18n.resolvedLanguage;

		this.state = {placeholder:{}, text:undefined, hashtag:[], height: 300};

		const getOcr = window.localStorage.getItem("ocr");
		if(getOcr){
			this.state.text = getOcr;
			window.localStorage.removeItem("ocr");
		}else{
			fetch("https://api.adviceslip.com/advice",
				{
					method: "GET",
				}
			).then(res => res.json()
			).then(data => {
				this.setState({placeholder: data.slip.advice});
			}).catch(err => {
				window.error(t('alert.api') + t('alert.call') + t('alert.error') + ": [" + err + "]");
			});
		}
	}

	handleEditorChange = (content) => {
		this.setState({content: content});
	};

	handleEditorSave = (e) => {
		const doc = {
			'hashtag': this.state.hashtag.join(" "),
			'content': this.state.content
		}

		console.log(doc);
	};

	handleTagChange = (e) => {
		const tagList = (e.target.value).trim().replace(/\s+/g, "#").split("#");
		this.setState({hashtag: tagList});
	};

	updateDimensions = () => {
		let winHeight = window.innerHeight;
		winHeight = winHeight - 550;

	    this.setState({height: winHeight});
	}

	componentWillUnmount = () => {
		window.removeEventListener("resize", this.updateDimensions);
	}

	componentDidMount = () => {
		window.addEventListener("resize", this.updateDimensions);

		this.updateDimensions();
	}

	render() {
		return (
		    <>
		      <PanelHeader size="sm" />
		      <div className="content">
			        <Row>
			          <Col xs={12}>
					    <Card>
					      <CardHeader>
					        <CardTitle tag="h4">{t('editor.placeholer')}</CardTitle>
					      </CardHeader>
					      <CardBody>
							<CardText>
								<SunEditor
								    // setContents="My contents"
								    id="editor"
								    lang={this.currentLang}
								    showToolbar={true}
								    onChange={this.handleEditorChange}
								    setDefaultStyle="height: auto"
								    placeholder={this.state.placeholder}
								    defaultValue={this.state.text}
								    height={this.state.height}
								    setOptions={{
										//buttonList: buttonList.basic
										//buttonList: buttonList.formatting
										//buttonList: buttonList.complex
								      buttonList: [ //=buttonList.complex
										  ["font", "fontSize", "formatBlock"],
										  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
										  ["removeFormat"],
										  ["align", "horizontalRule", "list", "table"],
										  ["link", "image", "video"],
										  //["fullScreen", "showBlocks", "codeView"],
										  //["preview", "print"],
										  //["save", "template"],
										  ["fontColor", "hiliteColor"],
										  ["outdent", "indent"],
										  ["undo", "redo"],
										]
								    }}
									  />
							  </CardText>
							  <FormGroup className="text-right">
								  <InputGroup>
								    <InputGroupText><i className={"now-ui-icons shopping_tag-content"} /></InputGroupText>
								    <Input id="hashtag" className="text-right" placeholder={t('editor.tag-info')} aria-autocomplete="list" onInput={this.handleTagChange} />
								    <Label size="lg">{
										this.state.hashtag.map((value, index) => {
											return (
												<span key={"tag"+index}>&nbsp;<i className={"now-ui-icons shopping_tag-content"} >{value}</i></span>
											)
										})
									}</Label>
								  </InputGroup>
						  		  <Button color="primary" onClick={this.handleEditorSave}>저장</Button>
					  		  </FormGroup>
					      </CardBody>
					    </Card>
			          </Col>
			    	</Row>
		      </div>
		    </>
		)
	}
}

export default Plan;
