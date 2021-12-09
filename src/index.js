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
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import i18n from 'utils/i18n';
import { useTranslation } from 'react-i18next';

import auths from "utils/auths";
import github from "variables/github";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/git-planner.css";

import PlannerLayout from "layouts/Planner.js";
import NotificationAlert from "react-notification-alert";

import moment from 'moment';
import 'moment/locale/ko';

function Index() {
  const [loginUser, setLoginUser] = React.useState({});
  const { t } = useTranslation();
  document.title = t('title');

  React.useEffect(() => {
	const token = auths.getAuthToken();
	if(!!token){
		fetch(github.api.profile,
	  		{
	  			method: "GET",
	  			headers: github.api.header(token),
	  		}
	  	).then(res => res.json()
	  	).then(data => {
			setLoginUser(data);
	  	}).catch(err => {
	  		alert(this.props.t('alert.authentication') + this.props.t('alert.error') + ": [" + err +"]");
		});
	}
  }, []);

  //전역 날짜 함수 설정
  moment.locale(i18n.resolvedLanguage);

  //전역 알림 팝업 설정
  const notificationAlert = React.useRef();
  window.notify = (msg, color) => {
    var type;
    switch (!color?1:color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: 'tc', //place,
      message: (
        <div>
          <div>
            {msg}
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };


  window.warn = (msg) => {
	window.notify(msg, 4);
  };

  window.info = (msg) => {
	window.notify(msg, 5);
  };

  window.error = (msg) => {
	window.notify(msg, 3);
  };

	return (
		<>
		  <NotificationAlert ref={notificationAlert} />
		  <BrowserRouter>
		    <Switch>
		      <Route path={process.env.REACT_APP_WEB_ROOT} render={(props) => <PlannerLayout {...props} loginUser={loginUser} i18n={i18n} t={t} />} />
		      <Redirect from="/" to={process.env.REACT_APP_WEB_ROOT} />
		    </Switch>
		  </BrowserRouter>
		</>
	);
}

function Loading() {
  return <>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>로딩..................
  </>
}

ReactDOM.render(
  <Suspense fallback={<Loading />}>
      <Index />
  </Suspense>,
  document.getElementById("root")
);
