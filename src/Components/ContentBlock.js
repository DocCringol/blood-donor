import React from 'react'
// import Button from 'react-bootstrap/Button';

// const scrollDown = () => {
// 	window.scrollBy({top:window.innerHeight/100*95, left:0, behavior:'smooth'})
// }

// const scrollUp = () => {
// 	window.scrollBy({top:-window.innerHeight/100*95, left:0, behavior:'smooth'})
// }



const ContentBlock = ({ children, style }) => {
	let defaultStyle = {height: window.innerHeight/100*90,
						marginTop: window.innerHeight/100*5,
						marginBottom: window.innerHeight/100*5,
						backgroundColor: 'red'};
	// let upStyle = {}
	return (
		<>
			<div className='contentBlock' style={{...defaultStyle, ...style}}>
				{children}
				{/* <div style = {{
					position: 'absolute',
					bottom: window.innerWidth/100*2,
					width: window.innerWidth/2,
					margin: '0',
					left: '50%',
					marginRight: '-50%',
    				transform: 'translate(-50%, -50%)'
				}}>
					<Button 
						className='btnDown' 
						onClick={scrollDown}
						style={{upStyle}}
					>Далее</Button>
					<Button className='btnUp' onClick={scrollUp}>Назад</Button>
				</div> */}
			</div>
		</>
	);
};


export default ContentBlock;