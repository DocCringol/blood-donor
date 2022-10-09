import React from 'react'
import Transitions from '../Transition'
import ContentBlock	from '../ContentBlock/ContentBlock.jsx';
import useWindowDimensions from '../Dimensions/Dimensions';

const Test = () => {
	const { height, width } = useWindowDimensions();
	return (
		<>
			<Transitions>
				<ContentBlock style={{'background-color':'red'}} contentStyle={{'backgroundColor':'green'}}>
					<div>height = {height}, width = {width}</div>
				</ContentBlock>
			</Transitions>
		</>
	)
}

export default Test
