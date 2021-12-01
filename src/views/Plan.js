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

import i18n from "utils/i18n";
import { useTranslation } from 'react-i18next';

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
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function SunEditorCard(props){
  const { t } = useTranslation();
  const currentLang = i18n.language;

  return (
		<>
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
						    lang={currentLang}
						    showToolbar={true}
						    onChange={props.onchange}
						    setDefaultStyle="height: auto"
						    placeholder={t('editor.placeholer')}
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
				  <CardText>
				      <InputGroup size="lg" className="mb-3">
					    <Input id="basic-addon1" placeholder="태그" aria-autocomplete="both" />
					  </InputGroup>
					  <Button color="primary" >저장</Button>
				  </CardText>
		      </CardBody>
		    </Card>
          </Col>
    	</Row>
    	</>
  );
}

class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {model:{}};

		this.handleEditorChange = this.handleEditorChange.bind(this);
	}

	handleEditorChange(content){
	};

	componentDidMount(){

	}

	render() {

		return (
		    <>
		      <PanelHeader size="sm" />
		      <div className="content">
					<SunEditorCard onchange={this.handleEditorChange} />
		      </div>
		    </>
		)
	}
}

export default Home;
