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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// core components
import Navigation from "components/Navbars/Navigation.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import settings from "utils/settings";

import routes from "routes.js";

var ps;

function Planner(props) {
  const t = props.t;
  const i18n = props.i18n;
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = React.useState(settings.getThemeColor());
  const mainPanel = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);
  const handleColorClick = (color) => {
	settings.setThemeColor(color);
    setBackgroundColor(color);
  };

  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} backgroundColor={backgroundColor} i18n={i18n} t={t} />
      <div className="main-panel" ref={mainPanel}>
        <Navigation {...props} i18n={i18n} t={t} />
        <Switch>
          {routes.map((prop, key) => {
            if(prop.path === "/settings"){
				return (
	              <Route
	                path={prop.layout + prop.path}
	                key={key}
	                render={() => React.createElement(prop.component, {onclick:handleColorClick, backgroundColor:backgroundColor, i18n:{i18n}, t:{t}, ...props })}
	              />
	            );
			}else{
				return (
	              <Route
	                path={prop.layout + prop.path}
	                render={() => React.createElement(prop.component, {backgroundColor:backgroundColor, i18n:{i18n}, t:{t}, ...props})}
	                key={key}
	              />
            	);
        	}
          })}
          <Redirect from={process.env.REACT_APP_WEB_ROOT} to={process.env.REACT_APP_WEB_ROOT + "/home"} />
        </Switch>
        <Footer fluid />
      </div>
      {/*
      <Settings
        bgColor={backgroundColor}
        handleColorClick={handleColorClick}
      />
      */}
    </div>
  );
}

export default Planner;