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
import auths from "utils/auths";
import queryString from 'query-string';
import github from "variables/github";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Login extends React.Component {

	constructor(props){
		super(props);

		this.state = {loginId: undefined};

		this.t = props.t;
	}

	checkDataRepository = () => {
	    fetch(github.api.getRepo(this.state.loginId),
			{
				method: "GET",
				headers: github.header(token),
			}
		).then(res => res.json()
		).then(data => {
			debugger;
		}).catch(err => {
			alert(this.props.t('alert.authentication') + this.props.t('alert.error') + ": [" + err +"]");
		});
	}

	componentDidMount = () => {
		const params = queryString.parse(this.props.location.search, {ignoreQueryPrefix: true});
		if(!!params && !!params.code){
			const code = params.code;
			const state = params.state;
			var sentStatus = auths.getAuthState();
			if(sentStatus == state){
			    fetch(github.authroization,
					{
						method: "POST",
						headers: github.header(),
						body: github.body({code: code}),
					}
				).then(res => res.json()
			    ).then(data => {
					auths.setAuthToken(data.access_token);
					window.location.replace(process.env.REACT_APP_WEB_ROOT);

				}).catch(err => {
					alert(this.props.t('alert.authentication') + this.props.t('alert.error') + ": [" + err +"]");
				});

			}else{
				alert(this.props.t('alert.access') + this.props.t('alert.error'));
				window.location.replace(process.env.REACT_APP_WEB_ROOT);
			}
		}else if(!!params && !!params.error){
			debugger;
			if(params.error === "redirect_uri_mismatch"){
				alert(this.props.t('alert.authentication') + this.props.t('alert.error') + ": [" + params.error_description + "]");
			}else{
				alert(this.props.t('alert.access') + this.props.t('alert.error'));
			}
			window.location.replace(process.env.REACT_APP_WEB_ROOT);

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
				alert(t('alert.authentication') + t('alert.complete'));
				//this.checkDataRespository();
				window.location.replace(process.env.REACT_APP_WEB_ROOT);
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
