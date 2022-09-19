import React from 'react'
import Frame from '../Frame'
import ContentBlock from '../ContentBlock'
import ButtonGrid from '../ButtonGrid'
import Button from 'react-bootstrap/esm/Button'
import Image from 'react-bootstrap/Image'

const scrollDown = () => {
	console.log('scrollDown')
	window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })
}

const scrollUp = () => {
	window.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' })
}

const Home = () => {
	return (
		<>
			<Frame>
				<ContentBlock>
					<div className="about" style={{
						width: window.innerWidth / 100 * 60,
					}}>
						<br />
						<h1>О проекте</h1>
						<br />
						<p style={{
							fontSize: 'x-large',
						}}>От сердца к  сердцу - проект, направленный на популяризацию донорства среди населения
							<br />
							На данном сайте вы найдете не только всю информацию о донорстве, но и сможете пройти интерактивную игру, которая поможет вам разобраться в тонкостях донорства
						</p>
					</div>
					<Image src="/Images/logo2.png" style={{
						width: window.innerWidth / 100 * 60,
						position: 'absolute',
						right: -window.innerWidth / 100 * 10,
						top: -window.innerHeight / 100 * 15,
					}}></Image>
					<ButtonGrid amount='1'>
						<Button variant="danger" onClick={scrollDown}>Дальше</Button>
					</ButtonGrid>
				</ContentBlock>
				<ContentBlock>
					<Image src="/Images/1.jpg" style={{
						position: 'absolute',
						left: window.innerWidth / 100 * 5,
						top: window.innerHeight / 100 * 5,
						height: window.innerHeight / 100 * 75,
					}}></Image>
					<Image src="/Images/2.jpeg" style={{
						position: 'absolute',
						top: window.innerHeight / 100 * 5,
						left: window.innerWidth / 100 * 40,
						height: window.innerHeight / 100 * 78,
					}}></Image>
					<ButtonGrid amount='2'>
						<Button variant="danger" onClick={scrollDown}>Дальше</Button>
						<Button variant="danger" onClick={scrollUp}>Назад</Button>
					</ButtonGrid>
				</ContentBlock>
				<ContentBlock>
					<Image src="/Images/3.png" style={{
						position: 'absolute',
						top: window.innerHeight / 100 * 5,
						height: window.innerHeight / 100 * 75,
					}}></Image>
					<ButtonGrid amount='1'>
						<Button variant="danger" onClick={scrollUp}>Назад</Button>
					</ButtonGrid>
				</ContentBlock>
			</Frame>
		</>
	)
}

export default Home
