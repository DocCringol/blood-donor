import React from 'react'
import Frame from '../Frame'
import ContentBlock from '../ContentBlock'
import ButtonGrid from '../ButtonGrid'
import Button from 'react-bootstrap/esm/Button'

const Home = () => {
	return (
		<>
			<Frame>
				<ContentBlock>
					<ButtonGrid amount='2'>
						<Button>Button</Button>
						<Button>Button</Button>
					</ButtonGrid>
				</ContentBlock>
				<ContentBlock>

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
