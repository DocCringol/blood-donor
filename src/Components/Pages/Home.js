import React from 'react'
import Frame from '../Frame'
import ContentBlock from '../ContentBlock'
import ButtonGrid from '../ButtonGrid'
import Button from 'react-bootstrap/esm/Button'

const scrollDown = () => {
	console.log('scrollDown')
	window.scrollBy({top:window.innerHeight, left:0, behavior:'smooth'})
}

const scrollUp = () => {
	window.scrollBy({top:-window.innerHeight, left:0, behavior:'smooth'})
}

const Home = () => {
	return (
		<>
			<Frame>
				<ContentBlock>
					<ButtonGrid amount='2'>
						<Button onClick={scrollDown}>Дальше</Button>
						<Button onClick={scrollUp}>Назад</Button>
					</ButtonGrid>
				</ContentBlock>
				<ContentBlock>
					<ButtonGrid amount='2'>
						<Button onClick={scrollDown}>Дальше</Button>
						<Button onClick={scrollUp}>Назад</Button>
					</ButtonGrid>
				</ContentBlock>
				<ContentBlock>

				</ContentBlock>
				<ContentBlock>

				</ContentBlock>
			</Frame>
		</>
	)
}

export default Home
