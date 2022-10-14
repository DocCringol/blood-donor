import React from 'react'
import Transitions from '../Transition'
import ContentBlock	from '../ContentBlock/ContentBlock.jsx';
import useWindowDimensions from '../Dimensions/Dimensions';

// TODO leave easteregg
const Test = () => {
	const { height, width } = useWindowDimensions();
	return (
		<>
			<Transitions>
				<ContentBlock style={{'background-color':'red'}} contentStyle={{'backgroundColor':'green'}}>
					<div>height = {height}, width = {width}</div>
					<iframe width="420" height="315"
						src="https://www.youtube.com/embed/P0bCN9EDRkk">
					</iframe>
				</ContentBlock>
			</Transitions>
		</>
	)
}

export default Test