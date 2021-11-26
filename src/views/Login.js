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
import axios from 'axios';
import auths from "utils/auths";
import queryString from 'query-string';
import github from "variables/github";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Login extends React.Component {

	constructor(props){
		super(props);

		this.state = {loginStatus:false};
	}

	componentDidMount(){
		const params = queryString.parse(this.props.location.search, {ignoreQueryPrefix: true});

		if(!!params && !!params.code){
			const code = params.code;
			const state = params.state;
			var sentStatus = auths.getAuthState();
			if(sentStatus == state){
			    axios.post(github.authroization, {code: code}
			    ).then(res => {
					auths.setAuthToken(res.data.access_token);
					window.location.replace("/");
				}).catch(err => {
					alert("인증 증 오류 발생: [" + err +"]");
				});

			}else{
				alert("잘못된 접근입니다. 다시 시도해 주세요.");
				window.location.replace("/");
			}
		}else if(!!params && !!params.error){
			alert("잘못된 접근입니다. 다시 시도해 주세요.");
			window.location.replace("/");
		}else{
			const token = auths.getAuthToken();
			if(!token){
				const state = auths.createStateCode();
				auths.setAuthState(state);

				window.location.replace(github.authentication +
					"?client_id=" + github.cId +
					"&redirect_uri=" + escape(github.redirectUrl) +
					"&scope=" + escape(github.scope) +
					"&state=" + state);
			}else{
				debugger;
				window.location.replace("/");
			}
		}
	}

	render() {
		return (
		<>
			<PanelHeader size="sm" />
			<div className="content">
				{/*TODO progress*/} <br/><br/><br/><br/><br/><br/><br/><br/><br/>로그인 중입니다...
			</div>
		</>
		);
	}
}

export default Login;
