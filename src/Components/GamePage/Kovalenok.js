import React from 'react'
import './Kovalenok.css';
import Image from 'react-bootstrap/Image'

const Kovalenok = ({ children, style, num }) => {
	let defaultStyle = {}
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