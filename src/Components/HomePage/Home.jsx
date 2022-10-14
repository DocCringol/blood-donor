import React, { useState } from 'react'
import Transitions from '../Transition'
import ContentBlock from '../ContentBlock/ContentBlock.jsx';
import useWindowDimensions from '../Dimensions/Dimensions';
import './Home.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

const Home = () => {
	const { height, width } = useWindowDimensions();
	let orientation = width > height ? 'landscape' : 'portrait';

	const [validated, setValidated] = useState(false);
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<>
			<Transitions>
				<ContentBlock>
					<div>
						<div className={'flexbox-1 ' + orientation} id={'counter'}>
							<div className={'flexbox-1-1 ' + orientation}>
								<div className='logo-div'>
									<Image src='logo_cut512.png' className={'logo ' + orientation} />
								</div>
								<div className='name'><div className='name-text'>От сердца <br /> к сердцу</div></div>
							</div>
							<div className='counter-div'>
								<div className='counter-text'>
									Сколько крови мы смогли собрать с начала работы?
								</div>
								<div className='counter'>
									406 350
								</div>
								<div className='counter-2'>
									мл
								</div>
							</div>
						</div>
						<div className={'flexbox-2 ' + orientation} id={'mem'}>
							<div className='flexbox-2-header'>Памятки донора</div>
							<Image className='img-1' src='/Images/1.jpg' alt='1' />
							<Image className='img-2' src='/Images/2.jpeg' alt='2' />
							<Image className='img-3' src='/Images/3.png' alt='3' />
						</div>
						<div className={'flexbox-5 ' + orientation} id={'centres'}>
							<div className='flexbox-5-header'>Донорские центры</div>
							<div className='msk'>
								<div className='header'>Москва</div>
								<div className='text'>
									1. ул. Поликарпова, 14 к2 · 8 (495) 945-33-19 <br />
									2. ул. Металлургов, 37А · 8 (495) 304-02-06 <br />
									3. ул. Щукинская, 6, к.2 · 8 (495) 122-20-13 <br />
									4. Каширское ш., 23с2 · 8 (499) 324-62-37 <br />
									5. Бакинская ул., 31 · 8 (495) 326-38-40 <br />
								</div>
							</div>
							<div className='spb'>
								<div className='header'>Санкт-Петербург</div>
								<div className='text'>
									1. Московский пр-т., 104 · 8 (812) 635-68-85 <br />
									2. ул. Аккуратова, 2 · 8 (812) 702-37-46 <br />
									3. Загородный просп., 47 · 8 (812) 495-72-51 <br />
									4. пр. Луначарского, 47 · 8 (812) 558-65-30 <br />
									5. Жуковско-Волынская ул., 2/4 · 8 (812) 466-43-82 <br />
								</div>
							</div>
						</div>
						<div className={'flexbox-4 ' + orientation} id={'recomendations'}>
							<div className='flexbox-4-header'>База рекомендаций кардиологов</div>
							<div className='grid-videos'>
								<div className='video-1'><iframe src="https://www.youtube.com/embed/P0bCN9EDRkk"></iframe></div>
								<div className='video-2'><iframe src="https://www.youtube.com/embed/pEVNDnrXbjM"></iframe></div>
								<div className='video-3'><iframe src="https://www.youtube.com/embed/_UphrrmOFGo"></iframe></div>
								<div className='video-4'><iframe src="https://www.youtube.com/embed/JV5NhwBBwIk"></iframe></div>
							</div>
							{/* TODO More videos */}
							<Button variant="danger">Больше видео</Button>
						</div>
						<div className={'flexbox-3 ' + orientation} id={'contact_us'}>
								<div className='header'>
									Есть вопросы или предложения? Хотите поучаствовать в программе? Напишите нам!
								</div>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<Form.Group controlId="validationCustom01">
										<Form.Label>Как нам к вам обращаться?</Form.Label>
										<Form.Control required type="name" placeholder="Коваленко Марк" />
									</Form.Group>
									<Form.Group controlId="validationCustom02">
										<Form.Label>Почта, на которую придет ответ</Form.Label>
										<Form.Control required type="email" placeholder="donor@donor-blood.ru" />
									</Form.Group>
									<Form.Group controlId="validationCustom03">
										<Form.Label>Опишите вопрос или предложение, с которым вы хотите к нам обратиться</Form.Label>
										<Form.Control required as="textarea" type="text" placeholder="Введите сообщение" />
									</Form.Group>
									<Button variant='danger' type="submit">Отправить</Button>
								</Form>
						</div>
					</div>
				</ContentBlock>
			</Transitions>
		</>
	)
}

export default Home
