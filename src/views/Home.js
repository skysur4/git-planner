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

class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {loginStatus:false};
	}

	componentDidMount(){
	}

	render() {
		return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
	        <ul className="dropdown-menu show">
	          <li className="button-container">
	            <a
	              href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=nudr-fixed-plugin"
	              target="_blank"
	              className="btn btn-primary btn-block btn-round"
	            >
	              Buy pro
	            </a>
	            <a
	              href="https://www.creative-tim.com/product/now-ui-dashboard-react?ref=nudr-fixed-plugin"
	              target="_blank"
	              className="btn btn-warning btn-block btn-round"
	            >
	              Download free
	            </a>
	            <a
	              href="https://demos.creative-tim.com/now-ui-dashboard-react/#/documentation/tutorial?ref=nudr-fixed-plugin"
	              className="btn btn-block btn-round btn-info"
	            >
	              Documentation
	            </a>
	          </li>
	        </ul>
      </div>
    </>
		)
	}
}

export default Home;
