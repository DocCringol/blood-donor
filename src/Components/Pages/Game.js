import React from 'react'
import Frame from '../Frame'
import ContentBlock from '../ContentBlock'
import Button from 'react-bootstrap/Button';


var question = [
	"Завтра впервые иду сдавать кровь! От волнения я очень проголодался, вот бы сейчас съесть жаренной курочки с картошкой."
, ];
var answers = [["Да, не мешало бы подкрепиться","Нет, кажется это плохая идея"]
,[""]];
var final = [["Все же это не лучшая идея. Не употребляйте жирную, жареную, молочную, острую и копченую пищу, но не нужно приходить натощак! Рекомендуем вам варенную пищу и легкий завтрак",
"Верно, идея не из лучших. Не употребляйте жирную, жареную, молочную, острую и копченую пищу, но не нужно приходить натощак! Рекомендуем вам варенную пищу и легкий завтрак)"]
,[""]];


const Answer = ({onClick, n}) => {
	let ret = (
		<>
			<ContentBlock>
				{final[0][n]}
				<Button onClick={onClick}>
					Далее
				</Button>
			</ContentBlock>
		</>
	);
	question = question.slice(1);
	answers = answers.slice(1);
	final = final.slice(1);
	return ret;
}


class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chosen: -1
		}
	}

	render() {
		if(question.length == 0) {
			this.props.onCame();
		} else if(this.state.chosen == -1) {
			return (
				<>
					<ContentBlock>
						<h1>{question[0]}</h1>
						{answers[0].map((answer, index) => {
							return (
								<Button 
									key={index}
									value={index}
									onClick={() => this.setState({chosen: index})}
								>{answer}</Button>
							);
						})}
					</ContentBlock>
				</>
			);
		} else {
			return <Answer n={this.state.chosen} onClick={() => this.setState({chosen: -1})}/>;
		}
	}
}


const Greeting = ({onClick}) => {
	return (
		<>
			<ContentBlock>
				<h1>
					Я хуевый врач, и я хочу сдать кровь
				</h1>
				<Button variant="primary" className="startBtn" onClick={onClick}>Далее</Button>
			</ContentBlock>
		</>
	)
}


const Start = ({onClick}) => {
	return (
		<>
			<ContentBlock style = {{
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
														}}>
					<Button variant="primary" className="startBtn" onClick={onClick}>Начать Игру</Button>
			</ContentBlock>
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
				return <Start onClick={() => this.setState({...this.state, page: 'greeting'})}/>
			case 'greeting':
				return <Greeting onClick={() => this.setState({...this.state, page: 'question'})}/>
			case 'question':
				return <Question onCame={() => this.setState({...this.state, page: 'finished'})}/>
			case 'finished':
				return <>Хуй соси</>
		}
	}
}


const Game = () => {
	return (
		<>
			<Frame>
				<Menu></Menu>
			</Frame>
		</>
	)
}

export default Game