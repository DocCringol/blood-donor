import React, { useState } from 'react'
import Transitions from '../Transition'
import ContentBlock	from '../ContentBlock/ContentBlock.jsx';
import useWindowDimensions from '../Dimensions/Dimensions';
import './Home.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
					<div className={'grid-1 ' + orientation}>
						<div className='grid-1-1'>
							<div className='logo'>
								<img src='https://i.imgur.com/0Z1Q2Zy.png' alt='logo' />
							</div>
							<div className='name'>
								<div className='name-text'>От сердца <br/> к сердцу</div>
							</div>
						</div>
						<div className='grid-1-2'>
							<div className='counter-div'>
								<div className='counter-text'>
									Сколько крови мы смогли собрать с начала работы?
								</div>
								<div className='counter'>
									86
								</div>
								<div className='counter-2'>
									литров
								</div>
							</div>
						</div>
					</div>
					<div className={'form ' + orientation}>
						<div className='form-content'>
							<div className='form-header'>
								Есть вопросы или предложения? Хотите поучаствовать в программе? Напишите нам!
							</div>
							<Form noValidate validated={validated} onSubmit={handleSubmit}>
								<Form.Group controlId="validationCustom01">
									<Form.Label>Как нам к вам обращаться?</Form.Label>
									<Form.Control required type="name" placeholder="Коваленко Марк" />
								</Form.Group>
								<Form.Group controlId="validationCustom02">
									<Form.Label>Почта, на которую придет ответ</Form.Label>
									<Form.Control required type="email" placeholder="example@example.com" />
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
