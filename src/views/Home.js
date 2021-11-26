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
import SunEditor,{buttonList} from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

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
			      <SunEditor
			        // setContents="My contents"
			        lang="ko"
			        showToolbar={true}
			        onChange={this.handleEditorChange}
			        setDefaultStyle="height: auto"
			        placeholder="머선 12GO!"
			        setOptions={{
						//buttonList: buttonList.basic
						//buttonList: buttonList.formatting
						//buttonList: buttonList.complex
			          buttonList: [ //=buttonList.complex
						  ["undo", "redo"],
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
						]
			        }}
			      />
		      </div>
		      <img src="http://placekitten.com/200/300" />
		    </>
		)
	}
}

export default Home;
