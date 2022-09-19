import React from "react";
import Alert from 'react-bootstrap/Alert';
import './Comment.css';

const Comment = ({ children, style }) => {
	let defaultStyle = {}
	return (
		<>
			<div className='comment' style={{...defaultStyle, ...style}}>
				<Alert>
					{children}
				</Alert>
			</div>
		</>
	);
};


export default Comment;