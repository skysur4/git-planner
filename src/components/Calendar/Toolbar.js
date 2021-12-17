import React from "react";

export const actions = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
}

export const views = {
    MONTH: 'month',
    WEEK: 'week',
    DAY: 'day',
    AGENDA: 'agenda',
}

class Toolbar extends React.Component {
    handleNavigate = action => {
		if(action === 'NEXT'){
			this.props.onNavigate(action, this.props.localizer.add(this.props.date, 1, 'day'));
		}

		if(action === 'PREV'){
			this.props.onNavigate(action, this.props.localizer.add(this.props.date, -1, 'day'));
		}

    }

    handleView = view => {
        this.props.onView(view);
    }

    render() {
		let currentMode = window.localStorage.getItem("calendar-mode");
		currentMode = !currentMode?"simple":currentMode;

        let { label } = this.props;

        if(currentMode === "advanced"){
	        return(	//고급 모드
	        	<>
	            <div className="rbc-toolbar d-none d-md-flex">
	                <span className="rbc-btn-group">
		                <button type="button" onClick={this.handleView.bind(null, views.MONTH)}><i className={"now-ui-icons ui-1_calendar-60"} /></button>
		                <button type="button" onClick={this.handleView.bind(null, views.WEEK)}><i className={"now-ui-icons files_single-copy-04"} /></button>
		                <button type="button" onClick={this.handleView.bind(null, views.DAY)}><i className={"now-ui-icons files_paper"} /></button>
		                <button type="button" onClick={this.handleView.bind(null, views.AGENDA)}><i className={"now-ui-icons business_bulb-63"} /></button>
	                </span>
	                <span className="rbc-toolbar-label">{label}</span>
	                <span className="rbc-btn-group">
	                	<button type="button" onClick={this.handleNavigate.bind(null, actions.PREVIOUS)}><i className={"now-ui-icons arrows-1_minimal-left"} /></button>
	                	<button type="button" onClick={this.handleNavigate.bind(null, actions.TODAY)}><i className={"now-ui-icons arrows-1_refresh-69"} /></button>
	                    <button type="button" onClick={this.handleNavigate.bind(null, actions.NEXT)}><i className={"now-ui-icons arrows-1_minimal-right"} /></button>
	                </span>
	            </div>
	            <div className="rbc-toolbar rbc-toolbar-xs d-flex d-md-none">
	                <span className="rbc-btn-group">
		                <button type="button" onClick={this.handleView.bind(null, views.MONTH)}><i className={"now-ui-icons ui-1_calendar-60"} /></button>
		                <button type="button" onClick={this.handleView.bind(null, views.WEEK)}><i className={"now-ui-icons files_single-copy-04"} /></button>
		                <button type="button" onClick={this.handleView.bind(null, views.DAY)}><i className={"now-ui-icons files_paper"} /></button>
		                <button type="button" onClick={this.handleView.bind(null, views.AGENDA)}><i className={"now-ui-icons business_bulb-63"} /></button>
	                </span>
	                <span className="rbc-toolbar-label">{label}</span>
	                <span className="rbc-btn-group">
	                	<button type="button" onClick={this.handleNavigate.bind(null, actions.PREVIOUS)}><i className={"now-ui-icons arrows-1_minimal-left"} /></button>
	                	<button type="button" onClick={this.handleNavigate.bind(null, actions.TODAY)}><i className={"now-ui-icons arrows-1_refresh-69"} /></button>
	                    <button type="button" onClick={this.handleNavigate.bind(null, actions.NEXT)}><i className={"now-ui-icons arrows-1_minimal-right"} /></button>
	                </span>
	            </div>
	            </>
	        )
        } else {
	        return(	//간편 모드
	            <div className="rbc-toolbar">
	                <span className="rbc-btn-group">
	                	<button type="button" onClick={this.handleNavigate.bind(null, actions.PREVIOUS)}><i className={"now-ui-icons arrows-1_minimal-left"} /></button>
	                </span>
	                <span className="rbc-toolbar-label">{label}</span>
	                <span className="rbc-btn-group">
	                    <button type="button" onClick={this.handleNavigate.bind(null, actions.NEXT)}><i className={"now-ui-icons arrows-1_minimal-right"} /></button>
	                </span>
	            </div>
	        )
		}
    }

}
export default Toolbar;