import React from 'react'
import './ButtonGrid.css';

const ButtonGrid = ({ children, style, amount }) => {
	let defaultStyle = {
		gridTemplateColumns: `repeat(${amount}, 1fr)`,};
	return (
		<>
			<div className='buttonGrid' style={{...defaultStyle, ...style}}>
				{children}
			</div>
		</>
	);
};


export default ButtonGrid;