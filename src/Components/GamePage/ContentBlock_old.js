import React from 'react'
import './ContentBlock_old.css';

const ContentBlock_old = ({ children, style }) => {
	let defaultStyle = {};
	return (
		<>
			<div className='ContentBlock_old' style={{...defaultStyle, ...style}}>
				<div className='bg-image'></div>
				<div className='content'>
					{children}
				</div>
			</div>
		</>
	);
};


export default ContentBlock_old;