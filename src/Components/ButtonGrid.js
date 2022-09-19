import React from 'react'
import './ButtonGrid.css';

const ButtonGrid = ({ children, style, amount=1 , bottom }) => {
	let defaultStyle = {
		gridTemplateColumns: `repeat(${amount}, 1fr)`,};
	return (
		<>
			<div className='buttonGrid' style={{...defaultStyle, ...style, bottom}}>
				{children}
			</div>
		</>
	);
};


export default ButtonGrid;