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

import settings from "utils/settings";
import themes from "variables/themes";
import locales from "variables/locales";
import mode from "variables/mode";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Settings(props) {
	let initMode = window.localStorage.getItem("calendar-mode");
	initMode = !initMode?"simple":initMode;

	var bgColor = settings.getThemeColor();
	var [currentLang, setCurrentLang] = React.useState(i18n.resolvedLanguage);
	var [currentMode, setCurrentMode] = React.useState(initMode);

	const handleChangeLanguage = (e) => {
		const lang = e.target.value;

		window.localStorage.setItem("locale", lang);
		i18n.changeLanguage(lang);
		setCurrentLang(lang);
	};

	const handleChangeMode = (e) => {
		const mode = e.target.value;

		window.localStorage.setItem("calendar-mode", mode);
		setCurrentMode(mode);
	};

	return (
	  <>
	    <PanelHeader size="sm" color={props.backgroundColor} />
	    <div className="content">
	      <Row>
	        <Col xs={12}>
	          <Card>
	            <CardHeader>
	              <CardTitle tag="h4">{t('settings.theme')} {t('settings.color')}</CardTitle>
	            </CardHeader>
	            <CardBody>
	              <Table responsive>
	                <tbody>
						<tr className="text-center">
						  {themes.list.map((prop, key) => {
						  return (
						  <td key={"theme-color-" + key}>
						  	<span className={
				                  bgColor === prop.color
				                    ? "theme btn-round btn-icon btn btn-" + prop.theme + " active"
				                    : "theme btn-round btn-icon btn btn-" + prop.theme}
				                  data-color={prop.color}
				                  onClick={() => {
				                  		props.onclick(prop.color);
				                    }}>
				              <i className="now-ui-icons ui-1_simple-remove" />
				            </span>
						  </td>
						  )
						  })}
						</tr>
	                </tbody>
	              </Table>
	            </CardBody>
	          </Card>
	        </Col>
	      </Row>

	      <Row>
	        <Col xs={12}>
	          <Card>
	            <CardHeader>
	              <CardTitle tag="h4">{t('settings.lang')}</CardTitle>
	            </CardHeader>
	            <CardBody>
	              <Table responsive>
	                <tbody>
						<tr>
						  {locales.list.map((prop, key) => {
							//if(prop.supported === false) return null;
						  return (
							<>
		                	  <td key={"language-" + key}>
								  <FormGroup check disabled={!prop.supported}>
		                            <Label check>
		                              <Input type="radio" name="langBox" value={prop.language} onChange={handleChangeLanguage} id={"locale-"+key} checked={prop.language === currentLang}  disabled={!prop.supported}/>
		                              <span className="form-radio-sign" />
		                            </Label>
		                          </FormGroup>
		                      </td>
		                      <td>
		                      	{t('settings.'+prop.language)}
		                      </td>
	                      </>
						  )
						  })}
						</tr>
	                </tbody>
	              </Table>
	            </CardBody>
	          </Card>
	        </Col>
	      </Row>

	      <Row>
	        <Col xs={12}>
	          <Card>
	            <CardHeader>
	              <CardTitle tag="h4">{t('calendar')} {t('settings.mode')}</CardTitle>
	            </CardHeader>
	            <CardBody>
	              <Table responsive>
	                <tbody>
						<tr>
						  {mode.list.map((prop, key) => {
						  return (
							<>
		                	  <td key={"calendar-mode-" + key}>
								  <FormGroup check>
		                            <Label check>
		                              <Input type="radio" name="modeBox" value={prop.mode} onChange={handleChangeMode} id={"mode-"+key} checked={prop.mode === currentMode} />
		                              <span className="form-radio-sign" />
		                            </Label>
		                          </FormGroup>
		                      </td>
		                      <td>
		                      	{t('settings.'+prop.mode)}
		                      </td>
	                      </>
						  )
						  })}
						</tr>
	                </tbody>
	              </Table>
	            </CardBody>
	          </Card>
	        </Col>
	      </Row>
	    </div>
	  </>
	);
}

export default Settings;
