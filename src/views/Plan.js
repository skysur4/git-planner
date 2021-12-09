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

  		this.i18n = props.i18n;
  		this.t = props.t;
  		this.currentLang = props.i18n.resolvedLanguage;

		this.state = {placeholder:{}, hashtag:[]};

		fetch("https://api.adviceslip.com/advice",
			{
				method: "GET",
			}
		).then(res => res.json()
		).then(data => {
			this.setState({placeholder: data.slip.advice});
		}).catch(err => {
			window.error(this.props.t('alert.api') + this.props.t('alert.call') + this.props.t('alert.error') + ": [" + err + "]");
		});
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

	componentDidMount(){

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
					        <CardTitle tag="h4">{this.t('editor.placeholer')}</CardTitle>
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
								    setOptions={{
										//buttonList: buttonList.basic
										//buttonList: buttonList.formatting
										//buttonList: buttonList.complex
								      buttonList: [ //=buttonList.complex
										  ["font", "fontSize", "formatBlock"],
										  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
										  ["removeFormat"],
										  ["fontColor", "hiliteColor"],
										  ["outdent", "indent"],
										  ["align", "horizontalRule", "list", "table"],
										  ["link", "image", "video"],
										  //["fullScreen", "showBlocks", "codeView"],
										  //["preview", "print"],
										  //["save", "template"],
										  ["undo", "redo"],
										]
								    }}
									  />
							  </CardText>
							  <FormGroup className="text-right">
								  <InputGroup>
								    <InputGroupText><i className={"now-ui-icons shopping_tag-content"} /></InputGroupText>
								    <Input id="hashtag" className="text-right" placeholder={this.t('editor.tag-info')} aria-autocomplete="list" onInput={this.handleTagChange} />
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
