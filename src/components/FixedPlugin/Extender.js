import React, { Component } from "react";

function Extender(props) {
  const handleClick = () => {
	debugger;
  };
  return (
    <div className="fixed-plugin extender">
      <div>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
      </div>
    </div>
  );
}

export default Extender;