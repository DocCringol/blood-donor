import React from 'react'
import './Kovalenok.css';
import Image from 'react-bootstrap/Image'

const Kovalenok = ({ children, style, num }) => {
	let defaultStyle = {
		bottom: window.innerHeight/100*20,
		left: window.innerWidth/100*10,
	}
	return (
		<>
			<div className='kovalenok' style={{...defaultStyle, ...style}}>
				<Image src={`/Images/Game/${num}.png`} alt='kovalenok'></Image>
				{children}
			</div>
		</>
	);
}


export default Kovalenok;