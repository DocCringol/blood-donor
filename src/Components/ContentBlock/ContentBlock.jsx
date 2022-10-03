import React from 'react'
import './ContentBlock.css';
import useWindowDimensions from '../Dimensions/Dimensions';
import useScroll from '../Scroll/Scroll';
// import Button from 'react-bootstrap/Button';

// const scrollDown = () => {
// 	window.scrollBy({top:height/100*95, left:0, behavior:'smooth'})
// }

// const scrollUp = () => {
// 	window.scrollBy({top:-height/100*95, left:0, behavior:'smooth'})
// }


const ContentBlock = ({ children, style }) => {
	const { height, width } = useWindowDimensions();

	let defaultStyle = {padding: '5%',
						minHeight: '100%',
						width: '100%',
					};

	return (
		<>
			<div className='contentBlock' style={{...defaultStyle, ...style}}>
				<div className='content'>
					<div>height = {height}, width = {width}</div>
					{children}
				</div>
			</div>
		</>
	);
};


export default ContentBlock;