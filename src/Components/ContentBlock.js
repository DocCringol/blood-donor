import React from 'react'
import './ContentBlock.css';
// import Button from 'react-bootstrap/Button';

// const scrollDown = () => {
// 	window.scrollBy({top:window.innerHeight/100*95, left:0, behavior:'smooth'})
// }

// const scrollUp = () => {
// 	window.scrollBy({top:-window.innerHeight/100*95, left:0, behavior:'smooth'})
// }



const ContentBlock = ({ children, style }) => {
	let defaultStyle = {height: window.innerHeight,
						paddingTop: window.innerHeight/100*5,
						paddingBottom: window.innerHeight/100*5,};
	// let upStyle = {}
	return (
		<>
			<div className='contentBlock' style={{...defaultStyle, ...style}}>
				<div className='bg-image'
				style={{
					height: window.innerHeight/100*90,
					width: window.innerWidth/100*90,
				}}></div>
				<div className='content'>
					{children}
				</div>
			</div>
		</>
	);
};


export default ContentBlock;