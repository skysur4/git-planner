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
import Login from "views/Login.js";
import Home from "views/Home.js";
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Settings from "views/Settings.js";

var dashRoutes = [
  {
	redirect: true,
    path: "/home",
    name: "Home",
    icon: "education_agenda-bookmark",
    component: Home,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: process.env.REACT_APP_WEB_ROOT,
  },

  {
	invisible: true,
    path: "/login",
    name: "Login",
    icon: "education_agenda-bookmark",
    component: Login,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
	invisible: true,
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
	invisible: true,
    path: "/settings",
    name: "Settings",
    icon: "education_agenda-bookmark",
    component: Settings,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
	invisible: true,
    path: "/logout",
    name: "Logout",
    icon: "education_agenda-bookmark",
    component: Login,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
];
export default dashRoutes;
