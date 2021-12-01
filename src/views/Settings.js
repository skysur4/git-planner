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
import { list } from "variables/themes";
import locales from "variables/locales";

import i18n from "utils/i18n";
import { useTranslation } from 'react-i18next';

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
  const bgColor = settings.getThemeColor();
  const { t } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (e) => {
	const lang = e.target.value;
	window.localStorage.setItem("locale", lang);
	i18n.changeLanguage(lang);
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
					  {list().map((prop, key) => {
					  return (
					  <td>
					  	<span className={
			                  bgColor === prop.color
			                    ? "theme btn-round btn-icon btn btn-" + prop.theme + " active"
			                    : "theme btn-round btn-icon btn btn-" + prop.theme}
			                  data-color={prop.color}
			                  key={key}
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
						if(prop.supported === false) return null;
					  return (
						<>
	                	  <td>
							  <FormGroup check disabled={!prop.supported}>
	                            <Label check>
	                              <Input type="radio" name="langBox" value={prop.language} onChange={changeLanguage} id={"locale-"+key} checked={prop.language === currentLang}  disabled={!prop.supported}/>
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

      </div>
    </>
  );
}

export default Settings;
