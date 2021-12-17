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
import Note from "views/Note.js";
import Memo from "views/Memo.js";
import Plan from "views/Plan.js";
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
    name: "home",
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
    path: "/note",
    name: "note",
    icon: "files_paper",
    component: Note,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/memo",
    name: "memo",
    icon: "design-2_ruler-pencil",
    component: Memo,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/plan",
    name: "plan",
    icon: "design-2_ruler-pencil",
    component: Plan,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/icons",
    name: "icons",
    icon: "design_image",
    component: Icons,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/maps",
    name: "maps",
    icon: "location_map-big",
    component: Maps,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/notifications",
    name: "notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/extended-tables",
    name: "tablelist",
    icon: "files_paper",
    component: TableList,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    path: "/typography",
    name: "typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
    pro: true,
    path: "/upgrade",
    name: "upgradepro",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: process.env.REACT_APP_WEB_ROOT,
  },

  {
	invisible: true,
    path: "/login",
    name: "login",
    icon: "education_agenda-bookmark",
    component: Login,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
	invisible: true,
    path: "/user-page",
    name: "user-profile",
    icon: "users_single-02",
    component: UserPage,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
	invisible: true,
    path: "/settings",
    name: "settings",
    icon: "education_agenda-bookmark",
    component: Settings,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
  {
	invisible: true,
    path: "/logout",
    name: "logout",
    icon: "education_agenda-bookmark",
    component: Login,
    layout: process.env.REACT_APP_WEB_ROOT,
  },
];
export default dashRoutes;
