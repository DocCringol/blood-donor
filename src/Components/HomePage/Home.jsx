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
					<div className={'page-flexs ' + orientation}>
						<div className={'flexbox-1 ' + orientation}>
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
						<div className={'flexbox-2 ' + orientation}>
							<div className='flexbox-2-header'>Памятки донора</div>
							<Image className='img-1' src='/Images/1.jpg' alt='1' />
							<Image className='img-2' src='/Images/2.jpeg' alt='2' />
							<Image className='img-3' src='/Images/3.png' alt='3' />
						</div>
						<div className={'flexbox-3 ' + orientation}>
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
