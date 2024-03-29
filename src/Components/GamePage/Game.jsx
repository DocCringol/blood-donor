import React from 'react'
import Frame from './Frame'
import ContentBlock_old from './ContentBlock_old'
import Button from 'react-bootstrap/Button';
import './Game.css'
import ButtonGrid from './ButtonGrid';
import Kovalenok from './Kovalenok'
import Comment from './Comment'
import InterDiv from './InterDiv'
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert';
import { isMobile } from 'react-device-detect'
import useWindowDimensions from '../Dimensions/Dimensions';


const question0 = [
	"Завтра впервые иду сдавать кровь! От волнения я очень проголодался, вот бы сейчас съесть жаренной курочки с картошкой."
	, "Друзья предлагают отпраздновать день донора в ночном клубе. Тем более завтра не нужно идти на работу, ведь я донор и мне дадут освобождение на весь день!"
	, "Вот и настал день сдачи крови, но перед тем как пойти в центр мне нужно позавтракать. Чем бы мне подкрепиться?"
	, "Со мной в донорский центр пойдет пойти моя подруга! Ей недавно исполнилось семнадцать лет и она считает, кажется она уже готова стать донором."
	, "Теперь я донор крови, как же я этому рад! Но повязка на руке мне откровенно мешает, я бы хотел поскорее ее снять."
];

const answers0 = [
	["Да, не мешало бы подкрепиться", "Нет, кажется это плохая идея"]
	, ["Хорошо тебе повеселиться!", "Тебе лучше выспаться"]
	, ["Может творог с бананом?", "Советую кашу на воде"]
	, ["Да! Конечно, ведь быть донором это очень круто!", "Думаю, что это не лучшая идея…"]
	, ["Комфорт превыше всего", "Не советую тебе снимать повязку"]];

const final0 = [
	["Все же это не лучшая идея. Не употребляйте жирную, жареную, молочную, острую и копченую пищу, но не нужно приходить натощак! Рекомендуем вам варенную пищу и легкий завтрак",
		"Верно, идея не из лучших. Не употребляйте жирную, жареную, молочную, острую и копченую пищу, но не нужно приходить натощак! Рекомендуем вам варенную пищу и легкий завтрак)"]
	, ["Веселье это конечно хорошо, но важно хорошенько выспаться перед дотацией крови поэтому лучше остаться дома, в противном случае, ты рискуешь потерять сознание!",
		"Здоровый сон это всегда важно, особенно перед дотацией крови, в противном случае, ты рискуешь потерять сознание!"]
	, ["Крутая идея для завтрака, но не в день сдачи крови — Напоминаем, накануне и в день сдачи крови запрещено употреблять жирную, жареную, острую и копченую пищу, колбасные изделия, а также мясные, рыбные и молочные продукты, яйца и масло (в т.ч.растительное), шоколад, орехи и финики, авокадо, свеклу, бананы. Но и натощак сдавать кровь не нужно!",
		"Это именно то, чем желательно позавтракать перед сдачей крови, рекомендуем пить сладкий чай с вареньем, соки, морсы, компоты, минеральную воду и есть хлеб, сухари, сушки, отварные крупы, макароны на воде без масла, овощи и фрукты, КРОМЕ авокадо, свеклы, бананов."]
	, ["Плохая идея — Оптимальный возраст для того, чтобы стать донором, — 18–20 лет. (По закону граждане России не могут быть донорами до 18 лет.)",
		"Оптимальный возраст для того, чтобы стать донором, — 18–20 лет. (По закону граждане России не могут быть донорами до 18 лет.)"]
	, ["Комфорт это важно, но в целях собственной безопасности не снимайте повязку в течение 3–4 часов, старайтесь, чтобы она не намокла",
		"Верно,  в целях собственной безопасности не снимайте повязку в течение 3–4 часов, старайтесь, чтобы она не намокла"]];

var question = question0;
var answers = answers0;
var final = final0;

const Finish = () => {
	document.getElementById("finish").style.visibility = "visible ";
	document.getElementById("next").style.visibility = "hidden";
}

const Answer = ({ onClick, n }) => {
	question = question.slice(1);
	answers = answers.slice(1);
	var res = final[0][n];
	final = final.slice(1);
	if (question.length == 0) {
		return (
			<>
				<ContentBlock_old>
					<div id='finish' style={{visibility:"hidden"}}>
						<Kovalenok num='4'></Kovalenok>
						<InterDiv>
							<Comment>Спасибо, что помог мне стать донором! Пусть в мире пульсирует жизнь</Comment>
							<ButtonGrid bottom='15%'>
								<Button variant="danger" className="startBtn" onClick={onClick}>Начать Заново</Button>
							</ButtonGrid>
						</InterDiv>
					</div>
					<div id='next' style={{visibility:"visible"}}>
						<Comment>{res}</Comment>
						<ButtonGrid bottom='15%'>
							<Button variant="danger" className="startBtn" onClick={Finish}>Далее</Button>
						</ButtonGrid>
						<Kovalenok num='1' style={{ filter: 'blur(5px)' }}></Kovalenok>
					</div>
				</ContentBlock_old>
			</>
		);
	}
	return (
		<>
			<ContentBlock_old>
				<Comment>{res}</Comment>
				<ButtonGrid bottom='15%'>
					<Button variant="danger" className="startBtn" onClick={onClick}>Далее</Button>
				</ButtonGrid>
				<Kovalenok num='1' style={{ filter: 'blur(5px)' }}></Kovalenok>
			</ContentBlock_old>
		</>
	);
};


class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chosen: -1
		}
	}
	render() {
		if (question.length == 0) {
			this.props.onCame();
		} else if (this.state.chosen == -1) {
			return (
				<>

					<ContentBlock_old>
						<Kovalenok num='2'></Kovalenok>
						<InterDiv>
							<Comment>
								{question[0]}
							</Comment>
							<ButtonGrid bottom='15%' amount='2'>
								<Button variant="danger" onClick={() => this.setState({ chosen: 0 })}>{answers[0][0]}</Button>
								<Button variant="danger" onClick={() => this.setState({ chosen: 1 })}>{answers[0][1]}</Button>
							</ButtonGrid>
						</InterDiv>
					</ContentBlock_old>
				</>
			);
		} else {
			return <Answer n={this.state.chosen} onClick={() => this.setState({ chosen: -1 })} />;
		}
	}
}


const Greeting = ({ onClick }) => {
	return (
		<>
			<ContentBlock_old>
				<Kovalenok num='2'></Kovalenok>
				<InterDiv>
					<Comment>
						Привет, меня зовут Ковалёнок! Помоги мне стать донором
					</Comment>
					<ButtonGrid bottom='15%'>
						<Button variant="danger" className="startBtn" onClick={onClick}>Привет!</Button>
					</ButtonGrid>
				</InterDiv>
			</ContentBlock_old>
		</>
	)
}


const Start = ({ onClick }) => {
	question = question0;
	answers = answers0;
	final = final0;
	return (
		<>
			<ContentBlock_old>
				<Kovalenok num='1'></Kovalenok>
				<InterDiv>
					<Comment>
						Интерактивная Игра "Ковалёнок"
					</Comment>
					<ButtonGrid bottom='15%'>
						<Button variant="danger" className="startBtn" onClick={onClick}>Познакомиться с Ковалёнком</Button>
					</ButtonGrid>
				</InterDiv>
			</ContentBlock_old>
		</>
	)
}

class Menu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 'start',
			n: 0
		}
	}

	render() {
		switch (this.state.page) {
			case 'start':
				return <Start onClick={() => this.setState({ ...this.state, page: 'greeting' })} />
			case 'greeting':
				return <Greeting onClick={() => this.setState({ ...this.state, page: 'question' })} />
			case 'question':
				return <Question onCame={() => this.setState({ ...this.state, page: 'start' })} />
		}
	}
}


const Game = () => {
	const { height, width } = useWindowDimensions();
	let isPortrait = width > height ? false : true;
	return (
		<>
			<div>
				<div className={'only_pc ' + (isPortrait ? 'vis' : 'invis')}>
					Пожалуйста, переверните своё устройство
				</div>
				<Frame>
					<Alert variant="danger" className="logo">
						<Image src="/Images/logo2.png"></Image>
					</Alert>
					<div className="game">
						<Menu></Menu>
					</div>
				</Frame>
			</div>
		</>
	)
}

export default Game