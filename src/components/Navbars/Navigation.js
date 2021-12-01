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
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import auths from "utils/auths";
import github from "variables/github";

import routes from "routes.js";

function Navigation(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const [user, setUser] = React.useState({});

  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("white");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  const getBrand = () => {
    var name;
    routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
          if (prop.redirect) {
          }

          if (prop.path === props.location.pathname || prop.layout + prop.path === props.location.pathname) {
            name = prop.name;
          }
      }
      return null;
    });
    return name;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };

  const logout = () => {
	auths.setAuthToken("");
	window.location.replace(webRoot);
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
	const token = auths.getAuthToken();
	if(!!token){
	    fetch(github.api.profile,
			{
				method: "GET",
				headers: github.header(token),
			}
		).then(res => res.json()
		).then(data => {
			setUser(data);
		}).catch(err => {
			alert("사용자 정보 조회 증 오류 발생: [{0}]", err);
		});
	}
  }, []);
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "white"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <form action="/search">
            <InputGroup className="no-border">
              <Input placeholder="Search..." name="keyWord" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_zoom-bold" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
          <Nav navbar>
            <NavItem>
              <Link to="sync" className="nav-link">
                <i className="now-ui-icons loader_refresh" />
                <p>
                  <span className="d-lg-none d-md-block">Syncronize</span>
                </p>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="sync" className="nav-link">
                <i className="now-ui-icons loader_refresh spin" />
                <p>
                  <span className="d-lg-none d-md-block">Syncronize</span>
                </p>
              </Link>
            </NavItem>
            <NavItem>
              <Link to={process.env.REACT_APP_WEB_ROOT + "/settings"} className="nav-link">
                <i className="now-ui-icons ui-1_settings-gear-63 spin" />
                <p>
                  <span className="d-lg-none d-md-block">Settings</span>
                </p>
              </Link>
            </NavItem>
            {user.login &&
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle caret nav>
                <i className="now-ui-icons users_single-02" />
                <p>
                  <span className="d-lg-none d-md-block">Account</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="span">
                	<img src={user.avatar_url} className="mini-avatar" />&nbsp;
                	{user.login}
                </DropdownItem>
                <DropdownItem tag="button" onClick={() => logout()}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            }
            {!user.login &&
            <NavItem>
              <Link to={process.env.REACT_APP_WEB_ROOT + "/login"} className="nav-link">
                <i className="now-ui-icons users_circle-08" />
                <p>
                  <span className="d-lg-none d-md-block">Login</span>
                </p>
              </Link>
            </NavItem>
			}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
