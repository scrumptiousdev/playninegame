import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';


/* Pluralsight - React.js Getting Started : Module 1 Introduction */

//class Button extends Component {
//	handleClick = () => {
//		this.props.onClickFunction(this.props.incrementValue);
//	};
//
//	render() {
//		return ( 
//			<button onClick={this.handleClick}>
//				+{this.props.incrementValue}
//			</button>
//		);
//	}
//};
//
//const Result = (props) => {
//	return (
//		<div>{props.counter}</div>
//	);
//};
//
//class App extends Component {
//	state = {counter: 0};
//
//	incrementCounter = (incrementValue) => {
//		this.setState((prevState) => ({
//			counter: prevState.counter + incrementValue
//		}));
//	};
//
//	render() {
//		return (
//			<div>
//				<Button incrementValue={1} onClickFunction={this.incrementCounter} />
//				<Button incrementValue={5} onClickFunction={this.incrementCounter} />
//				<Button incrementValue={10} onClickFunction={this.incrementCounter} />
//				<Button incrementValue={100} onClickFunction={this.incrementCounter} />
//				<Result counter={this.state.counter} />
//			</div>
//		);
//	}
//};


/* Pluralsight - React.js Getting Started : Module 2 Working with Data */

//const Card = (props) => {
//	return (
//		<div style={{margin: '1em'}}>
//			<img width="75" src={props.avatar_url} alt="" />
//			<div style={{display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
//				<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
//				<div>{props.company}</div>
//			</div>
//		</div>
//	);
//};
//
//const CardList = (props) => {
//	return (
//		<div>
//			{props.cards.map((card) => <Card key={card.id} {...card} />)}
//		</div>
//	);
//};
//
//class Form extends Component {
//	state = {userName: ''};
//	handleSubmit = (event) => {
//		event.preventDefault();
//		axios.get(`http://api.github.com/users/${this.state.userName}`)
//			.then(resp => {
//				this.props.onSubmit(resp.data);
//				this.setState({userName: ""});
//			})
//	};
//	
//	render() {
//		return (
//			<form onSubmit={this.handleSubmit}>
//				<input type="text" 
//					value={this.state.userName}
//					onChange={(event) => this.setState({userName: event.target.value})}
//					placeholder="Github username" required />
//				<button type="submit">Add card</button>
//			</form>
//		);
//	}
//}
//
//class App extends Component {
//	state = {
//		cards: []
//	};
//
//	addNewCard = (cardInfo) => {
//		this.setState((prevState) => ({
//			cards: prevState.cards.concat(cardInfo)
//		}));
//	};
//
//	render() {
//		return (
//			<div>
//				<Form onSubmit={this.addNewCard} />
//				<CardList cards={this.state.cards} />
//			</div>
//		);
//	}
//};//const Card = (props) => {
//	return (
//		<div style={{margin: '1em'}}>
//			<img width="75" src={props.avatar_url} alt="" />
//			<div style={{display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
//				<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
//				<div>{props.company}</div>
//			</div>
//		</div>
//	);
//};
//
//const CardList = (props) => {
//	return (
//		<div>
//			{props.cards.map((card) => <Card key={card.id} {...card} />)}
//		</div>
//	);
//};
//
//class Form extends Component {
//	state = {userName: ''};
//	handleSubmit = (event) => {
//		event.preventDefault();
//		axios.get(`http://api.github.com/users/${this.state.userName}`)
//			.then(resp => {
//				this.props.onSubmit(resp.data);
//				this.setState({userName: ""});
//			})
//	};
//	
//	render() {
//		return (
//			<form onSubmit={this.handleSubmit}>
//				<input type="text" 
//					value={this.state.userName}
//					onChange={(event) => this.setState({userName: event.target.value})}
//					placeholder="Github username" required />
//				<button type="submit">Add card</button>
//			</form>
//		);
//	}
//}
//
//class App extends Component {
//	state = {
//		cards: []
//	};
//
//	addNewCard = (cardInfo) => {
//		this.setState((prevState) => ({
//			cards: prevState.cards.concat(cardInfo)
//		}));
//	};
//
//	render() {
//		return (
//			<div>
//				<Form onSubmit={this.addNewCard} />
//				<CardList cards={this.state.cards} />
//			</div>
//		);
//	}
//};


/* Pluralsight - React.js Getting Started : Module 3 Building the Game Interface */

var possibleCombinationSum = function (arr, n) {
	if (arr.indexOf(n) >= 0) {
		return true;
	}
	if (arr[0] > n) {
		return false;
	}
	if (arr[arr.length - 1] > n) {
		arr.pop();
		return possibleCombinationSum(arr, n);
	}
	var listSize = arr.length,
		combinationsCount = (1 << listSize)
	for (var i = 1; i < combinationsCount; i++) {
		var combinationSum = 0;
		for (var j = 0; j < listSize; j++) {
			if (i & (1 << j)) {
				combinationSum += arr[j];
			}
		}
		if (n === combinationSum) {
			return true;
		}
	}
	return false;
};

const Stars = (props) => {
	return (
		<div className="col-xs-5">
			{_.range(props.numberOfStars).map(i =>
				<i key={i} className="fa fa-star"></i>
			)}
		</div>
	);
};

const Button = (props) => {
	let button;
	switch(props.answerIsCorrect) {
		case true:
			button = <button className="btn btn-success" onClick={props.acceptAnswer}><i className="fa fa-check"></i></button>;
			break;
		case false:
			button = <button className="btn btn-danger"><i className="fa fa-times"></i></button>;
			break;
		default:
			button = <button className="btn" disabled={props.selectedNumbers.length === 0} onClick={props.checkAnswer}>=</button>;
			break;
	}
	
	return (
		<div className="col-xs-2 text-center">
			{button}
			<br /><br />
			<button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={!props.redraws}>
				<i className="fa fa-refresh"></i> {props.redraws}
			</button>
		</div>
	);
};

const Answer = (props) => {
	return (
		<div className="col-xs-5">
			{props.selectedNumbers.map((number, i) =>
				<span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
			)}
		</div>
	);
};

const Numbers = (props) => {
	const numberClassName = (number) => {
		if (props.usedNumbers.indexOf(number) >= 0) {
			return 'used';
		}
		if (props.selectedNumbers.indexOf(number) >= 0) {
			return 'selected';
		}
	};
	
	return (
		<div className="card text-center">
			<div>
				{Numbers.list.map((number, i) => 
					<span key={i} className={numberClassName(number)} onClick={() => props.selectNumber(number)}>{number}</span>
				)}
			</div>
		</div>
	);
};

Numbers.list = _.range(1, 10);

const DoneFrame = (props) => {	
	return (
		<div className="text-center">
			<h2>{props.doneStatus}</h2>
			<button className="btn btn-secondary" onClick={props.resetGame}>Play Again</button>
		</div>
	);
};

class Game extends Component {
	static randomNumber = () => 1 + Math.floor(Math.random() * 9);
	static initialState = () => ({
		selectedNumbers: [],
		usedNumbers: [],
		randomNumberOfStars: Game.randomNumber(),
		answerIsCorrect: null,
		redraws: 5,
		doneStatus: null
	});
	
	state = Game.initialState();

	selectNumber = (clickedNumber) => {
		if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || this.state.usedNumbers.indexOf(clickedNumber) >= 0) return;
		this.setState(prevState => ({
			answerIsCorrect: null,
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
		}));
	};

	unselectNumber = (clickedNumber) => {
		this.setState(prevState => ({
			answerIsCorrect: null,
			selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
		}));
	};

	checkAnswer = () => {
		this.setState(prevState => ({
			answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
		}));
	};

	acceptAnswer = () => {
		this.setState(prevState => ({
			usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
			selectedNumbers: [],
			answerIsCorrect: null,
			randomNumberOfStars: Game.randomNumber()
		}), this.updateDoneStatus);
	};
	
	redraw = () => {
		if (this.state.redraws === 0) return;
		this.setState(prevState => ({
			selectedNumbers: [],
			answerIsCorrect: null,
			randomNumberOfStars: Game.randomNumber(),
			redraws: prevState.redraws - 1,
		}), this.updateDoneStatus);
	};

	possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
		const possibleNumbers = _.range(1, 10).filter(number =>
			usedNumbers.indexOf(number) === -1
	 	);
		
		return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
	};

	updateDoneStatus = () => {
		this.setState(prevState => {
			if (prevState.usedNumbers.length === 9) {
				return { doneStatus: 'Done. Nice!' };
			}
			if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
				return { doneStatus: 'Game Over!' };
			}
		});
	};

	resetGame = () => {
		this.setState(Game.initialState());
	};
	
	render() {
		const { selectedNumbers, usedNumbers, randomNumberOfStars, answerIsCorrect, redraws, doneStatus } = this.state;
		return (
			<div className="container">
				<h3>Play Nine</h3>
				<hr />
				<div className="row">
					<Stars numberOfStars={randomNumberOfStars} />
					<Button selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} redraws={redraws} answerIsCorrect={answerIsCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw} />
					<Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
				</div>
				<br />
				{doneStatus ?
					<DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} /> :
					<Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers} />
				}
			</div>
		);
	}
};

class App extends Component {
	render() {
		return (
			<div>
				<Game />
			</div>
		);
	}
};


export default App;
