import React from 'react';

const Question = ({question, answers}) => {
	return (
		<>
			<div className="form-group">
				<label style={{"marginBottom":"1vh"}}>{question}</label>
				<select className="form-control">
					{answers.map((answer, index) => {
						return (
							<option>{answer}</option>
						)
					})}
				</select>
			</div>
		</>
	)
}


export default Question