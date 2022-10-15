import React from 'react'
import Transitions from '../Transition'
import ContentBlock	from '../ContentBlock/ContentBlock.jsx';
import useWindowDimensions from '../Dimensions/Dimensions';
import './Video.css'

const Video = () => {
	const { height, width } = useWindowDimensions();
	return (
		<>
			<Transitions>
				<ContentBlock>
					<div className='soon_video'>Скоро база рекомендаций пополнится и вы сможете пользоваться этой страницей полноценно</div>
				</ContentBlock>
			</Transitions>
		</>
	)
}

export default Video