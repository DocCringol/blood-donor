import React from "react";
import "./InterDiv.css";

const InterDiv = ({ children, style }) => {
	  let defaultStyle = {
		height: '90vh',
	  };
	  return (
		<>
		<div className="interDiv" style={{...defaultStyle, ...style }}>
			{children}
		</div>
		</>
  );
};


export default InterDiv;