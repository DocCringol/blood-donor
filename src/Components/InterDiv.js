import React from "react";
import "./InterDiv.css";

const InterDiv = ({ children, style }) => {
	  let defaultStyle = {
		height: window.innerHeight/100*90,
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