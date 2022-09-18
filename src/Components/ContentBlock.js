import React from 'react'

const ContentBlock = ({ children, style }) => {
	let defaultStyle = {height: window.innerHeight/100*90,
						marginTop: window.innerHeight/100*5,
						marginBottom: window.innerHeight/100*5,
						backgroundColor: 'red'};
	return (
		<>
			<div className='contentBlock' style={{...defaultStyle, ...style}}>
				{children}
			</div>
		</>
	);
};


export default ContentBlock;