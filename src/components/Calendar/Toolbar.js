import React from "react";

export let actions = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
}

class Toolbar extends React.Component {
    navigate = action => {
        this.props.onNavigate(action)
    }

    render() {
        let { label } = this.props;
        return(
            <div className="rbc-toolbar">
                <span className="rbc-btn-group">
                    <button type="button" onClick={this.navigate.bind(null, actions.PREVIOUS)}><i className={"now-ui-icons arrows-1_minimal-left"} /></button>
                </span>
                <span className="rbc-toolbar-label">{label}<button type="button" onClick={this.navigate.bind(null, actions.TODAY)}><i className={"now-ui-icons arrows-1_refresh-69"} /></button></span>
                <span className="rbc-btn-group">
                    <button type="button" onClick={this.navigate.bind(null, actions.NEXT)}><i className={"now-ui-icons arrows-1_minimal-right"} /></button>
                </span>
            </div>
        )
    }

}
export default Toolbar;