import React from "react";
import Alert from 'react-bootstrap/Alert';
import './Comment.css';

const Comment = ({ children, style }) => {
	let defaultStyle = {
		textAlign: 'center',
	}
	return (
		<>
			<div className='comment' style={{...defaultStyle, ...style}}>
				<Alert variant="danger" >
					{children}
				</Alert>
			</div>
		</>
	);
};


export default Comment;