import React from 'react';
import "./Challenge.css"
//import ReactDOM from 'react-dom';
const Challenge = () =>{
    return (
        <div>
            <h3>This is challenge page.</h3>
        </div>
    );
}

function Square(props) {
	return(
		<button 
		className = {"square " + props.className}
		onClick={props.onClick}
		id = {props.id}
		>
		{props.value+" TEST"}
		</button>
	);
}

class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			remainTime: 20000,
		}
	}

	render(){
		return(
			<canvas className = "timer" height='6px'/>
			);
	}
}

class Match extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			prompts: Array(4).fill(null),
			answers: Array(4).fill(null),
			choosePromptId: "",
			chooseAnswerId: "",
			userMatches: Array(4).fill([null,null]),
			gameHeight: 0,
			buttonYPoints: Array(4).fill(null),
		};
	}
	
	renderPrompt(i){
		return (
			<Square 
			value={this.state.prompts[i]}
			className = "prompt"
			id = {"prompt" + i}
			onClick={(event)=>{
				this.setPromptColor(event)
				this.setPrompts(["1","2","3","4"]);
				}
			}
			/>
		);
	}

	renderAnswer(i){
		return (
			<Square
			value={this.state.answers[i]}
			className = "answer"
			id = {"answer" + i}
			onClick={(event)=>{
				this.setAnswerColor(event)
			}} />
			);
	}

	renderTimer(){
		return(
			<Timer id='timer' />
			);
	}
	
	setPromptColor(event){
		this.setState(
		{
			choosePromptId: event.target.id,
		});
		var square = document.getElementById(event.target.id);
		var squares = document.getElementsByClassName("prompt");
		console.log(squares);
		for(const s of squares){
			s.style.backgroundColor = '';
		}
		square.style.backgroundColor = 'limegreen';
	}

	setAnswerColor(event){
		this.setState(
		{
			chooseAnswerId: event.target.id,
		});
		var square = document.getElementById(event.target.id);
		var squares = document.getElementsByClassName("answer");
		console.log(squares);
		for(const s of squares){
			s.style.backgroundColor = '';
		}
		square.style.backgroundColor = 'limegreen';
	}

	setPrompts(promptsArray){
		this.setState({
			prompts: promptsArray,
		});
	}

	componentDidMount(){
		const gameHeight = this.divElement.clientHeight;
		const buttonYPoints = Array(4).fill(0);
		var point = 0;
		for(var i = 0; i < 4; ++i){
			point += gameHeight / 4;
			buttonYPoints[i] = point;
		}
		this.setState({ 
			gameHeight: gameHeight, 
			buttonYPoints: buttonYPoints,
		});
	}
	
	render(){
		return(
			<div className="Matching">
				<div className="matching_title">Matching</div>
				<div className="game" ref={(divElement) => {this.divElement = divElement} }>
					<div className="div_prompts">
					{this.renderPrompt(0)}
					{this.renderPrompt(1)}
					{this.renderPrompt(2)}
					{this.renderPrompt(3)}
					</div>
					<div className="challenge">
						<canvas className="challenge" id="challenge"/>
					</div>
					<div className="div_answers">
					{this.renderAnswer(0)}
					{this.renderAnswer(1)}
					{this.renderAnswer(2)}
					{this.renderAnswer(3)}
					</div>
				</div>
				<div className="progress_bar">
					{this.renderTimer()}
				</div>
			</div>
		);
	}
}
document.addEventListener("DOMContentLoaded", canvasFitsParentDOM);

window.addEventListener("resize", canvasFitsParentDOM);

function canvasFitsParentDOM(){
	var challenge = document.getElementById('challenge');
 
	// prevents unlimited expending canvas size
	challenge.width = '10px';
	challenge.height = '10px';
	setTimeout(300);
	////////////////////////////////////////////

 	challenge.style.width = '100%';
 	challenge.style.height = '100%';
	setTimeout(300);
 	challenge.width = challenge.offsetWidth - 1;
 	challenge.height = challenge.offsetHeight - 1;
}
export default Match;