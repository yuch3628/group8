import React from 'react';
import "./Challenge.css"
import {FormattedMessage} from "react-intl";

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
		<FormattedMessage id = "lesson3" defaultMessage="Restaurant"/>
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
			<canvas className = "timer" id = 'timer' height='6px'/>
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
			totalTime: 60000, // ms
			remainingTime: 60000, // ms
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
document.addEventListener("DOMContentLoaded", setFPS);
//document.addEventListener("DOMContentLoaded", drawTimer);


window.addEventListener("resize", canvasFitsParentDOM);

function canvasFitsParentDOM(){
	const challenge = document.getElementById('challenge');
 	const timer = document.getElementById('timer');
	//prevents unlimited expending canvas size
	if(challenge!=null){
		challenge.width = '10px';
		challenge.height = '10px';
		timer.width = '10px'
		setTimeout(300);
		////////////////////////////////////////////

	 	challenge.style.width = '100%';
	 	challenge.style.height = '100%';
	 	timer.style.height = '100%';
		setTimeout(300);
	 	challenge.width = challenge.offsetWidth - 1;
	 	challenge.height = challenge.offsetHeight - 1;
	 	timer.width = timer.offsetWidth - 1;
 	}
 	redrawTimer(60000, 30000);
}

var i = 0;
function setFPS(){
	var test = 60000;
	setInterval(draw, 16.6667);
}

function draw(){
	i++;
	var canvas = document.getElementById('challenge');
	if(canvas != null && canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,1110,902);
		ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10 + i, 10 + i, 50, 50);
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30 + i, 30 + i, 50, 50);
        redrawTimer(60000, (60000 - (i * 16.6667)));
	} else {
		// if not supported...
		console.log("ERROR!!!");
	}
}

function drawLine(){
	var canvas = document.getElementById('challenge');
	if(canvas != null && canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
	} else {
		// if not supported...
		console.log("ERROR!!!");
	}
}

// function drawTimer(){
// 	var canvas = document.getElementById('timer');
// 	if(canvas != null && canvas.getContext){
// 		var ctx = canvas.getContext('2d');
// 		var lingrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// 		lingrad.addColorStop(0, '#FFFFFF');
// 		lingrad.addColorStop(0.7, '#00FF00');
// 		lingrad.addColorStop(1, '#00FF00');
//   		ctx.fillStyle = lingrad;
//   		ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	} else {
// 		console.log("ERROR!!!");
// 	}
// }

function redrawTimer(totalTime, remainingTime){
	var canvas = document.getElementById('timer');
	if(canvas != null && canvas.getContext){
		var ctx = canvas.getContext('2d');
		var remaining = remainingTime / totalTime;
		var lingrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		lingrad.addColorStop(0, '#FF0000'); // red
		if(1 - remaining < 0.99 && 1 - remaining > 0.01 ){
		lingrad.addColorStop(1 - remaining - 0.01, '#FF0000');
		lingrad.addColorStop(1 - remaining, '#FFFFFF');
		lingrad.addColorStop(1 - remaining + 0.01, '#00FF00');
		lingrad.addColorStop(1, '#00FF00');
	}
  		ctx.fillStyle = lingrad;
  		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
}



let param = new URLSearchParams(window.location.search);
var lessons = ['Supermarket', 'Campus', 'Restaurant', 'Zoo', 'Breakfast', 'Softdrinks']
var Lesson = [];
function getData() {
    fetch('http://localhost:9000/cards/' + lessons[param.get('lesson')-1],{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        data.forEach(
        number => {
                     let obj = {title:number.name, content:number.mandarin } ;
                      console.log(number);
                      Lesson.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();

console.log(Lesson);



export default Match;