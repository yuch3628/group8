import React from 'react';
import "../style/Challenge.css"
import {FormattedMessage} from "react-intl"
import {useIntl, IntlProvider} from "react-intl";

//import ReactDOM from 'react-dom';
const Challenge = () =>{
    return (
        <div>
            <h3>This is challenge page.</h3>   
        </div>
    );
}

function Square(props) {
	const intl = useIntl();
	if(props.word!=null && intl.locale != 'zh')
		return(
			<button 
			className = {"square " + props.className}
			onClick={props.onClick}
			id = {props.id}
			>
			<FormattedMessage id={props.word} defaultMessage={props.word}/>
			</button>
		);
	else if(props.word!=null && intl.locale == 'zh')
		return(
			<button 
			className = {"square " + props.className}
			onClick={props.onClick}
			id = {props.id}
			>
			{props.word}
			</button>
		);
	else
		return(
			<button 
			className = {"square " + props.className}
			onClick={props.onClick}
			id = {props.id}
			>
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
			promptsOrder: Array(4).fill(null),
			answersOrder: Array(4).fill(null),
			choosePromptId: "",
			chooseAnswerId: "",
			userMatches: Array(4).fill([null,null]),
			gameHeight: 0,
			buttonYPoints: Array(4).fill(null),
			totalTime: 60000, // ms
			remainingTime: 60000, // ms
		};
	}
	
	renderPrompt(i, word){
		//console.log(word);
		return (
			<Square 
			value={this.state.prompts[i]}
			className = "prompt"
			id = {"prompt" + i}
			word = {word}
			onClick={(event)=>{
				this.setPromptColor(event)
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
	
	async setPromptColor(event){
		await this.setState(
		{
			choosePromptId: event.target.id,
		});
		var square = document.getElementById(event.target.id);
		var squares = document.getElementsByClassName("square");
		for(const s of squares){
			s.style.backgroundColor = '';
		}
		square.style.backgroundColor = 'limegreen';
		if(this.state.chooseAnswerId != "")
			this.checkAnswer();
	}

	async setAnswerColor(event){
		await this.setState(
		{
			chooseAnswerId: event.target.id,
		});
		var square = document.getElementById(event.target.id);
		var squares = document.getElementsByClassName("square");
		for(const s of squares){
			s.style.backgroundColor = '';
		}
		square.style.backgroundColor = 'limegreen';
		if(this.state.choosePromptId != "")
			this.checkAnswer();
	}

	setPrompts(promptsArray){
		this.setState({
			prompts: promptsArray,
		});
	}

	checkAnswer(){
		let ans = this.state.chooseAnswerId.slice(-1);
		let pro = this.state.choosePromptId.slice(-1);
		let ansDOM = document.getElementById(this.state.chooseAnswerId);
		let proDOM = document.getElementById(this.state.choosePromptId);
		const oldMatches = this.state.userMatches;
		console.log("ANS ID:" + ans + "===" +this.state.answersOrder[ans]);
		console.log("PRO ID:" + pro + "===" + this.state.promptsOrder[pro]);
		if(this.state.promptsOrder[pro] == this.state.answersOrder[ans]){
			// Correct~~~
			oldMatches.push([pro, ans]);
			ansDOM.disabled = true;
			proDOM.disabled = true;
			ansDOM.style.backgroundColor = '';
			proDOM.style.backgroundColor = '';

		}
		else {
			// Wrong!!!
			ansDOM.style.backgroundColor = 'red';
			proDOM.style.backgroundColor = 'red';

		}			
		this.setState({
			chooseAnswerId: "",
			choosePromptId: "",
			userMatches: oldMatches,
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
			userMatches: [],
		});
		canvasFitsParentDOM();
		this.prepareData();
	}
	
	async prepareData(){
		var words = await getData();
		var shuffledArray = shuffleNewArray(words.length);
		var promptsShuffledArray = shuffleArray(4, shuffledArray);
		console.log(shuffledArray);
		console.log(promptsShuffledArray);
		var prompts = new Array();
		var answers = new Array();
		for(let i = 0; i < 4; ++i){
			let btn = document.getElementById("answer"+i);
			btn.textContent = words[shuffledArray[i]]['content'];
			answers.push(words[shuffledArray[i]]['content']);
			prompts.push(words[promptsShuffledArray[i]]['title']);
		}
		this.setState({
			prompts: prompts,
			answers: answers,
			promptsOrder: promptsShuffledArray,
			answersOrder: shuffledArray.slice(0,4),
		});
	}

	render(){
		return(
			<div className="Matching">
				<div className="matching_title">Matching</div>
				<div className="game" ref={(divElement) => {this.divElement = divElement} }>
					<div className="div_prompts">
					<div>{this.renderPrompt(0, this.state.prompts[0])}</div>
					<div>{this.renderPrompt(1, this.state.prompts[1])}</div>
					<div>{this.renderPrompt(2, this.state.prompts[2])}</div>
					<div>{this.renderPrompt(3, this.state.prompts[3])}</div>
					</div>
					<div className="challenge">
						<canvas className="challenge" id="challenge"/>
					</div>
					<div className="div_answers">
					<div>{this.renderAnswer(0)}</div>
					<div>{this.renderAnswer(1)}</div>
					<div>{this.renderAnswer(2)}</div>
					<div>{this.renderAnswer(3)}</div>
					</div>
				</div>
				<div className="progress_bar">
					{this.renderTimer()}
				</div>
			</div>
		);
	}
}

function canvasFitsParentDOM(){
	const challenge = document.getElementById('challenge');
 	const timer = document.getElementById('timer');
	if(challenge!=null){
		//prevents unlimited expending canvas size
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
}

function setFPS(){
	setInterval(draw, 16.6667); // 60 fps
}

var i = 0;
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
		if(1 - remaining < 0.99 && 1 - remaining > 0.01 ){
			lingrad.addColorStop(0, '#FF0000'); // red
			lingrad.addColorStop(1 - remaining - 0.01, '#FF0000');
			lingrad.addColorStop(1 - remaining, '#FFFFFF');
			lingrad.addColorStop(1 - remaining + 0.01, '#00FF00');
			lingrad.addColorStop(1, '#00FF00');
		} else 
			lingrad.addColorStop(0, '#00FF00'); // red
  		ctx.fillStyle = lingrad;
  		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
}




async function getData() {
	var lessonNumber = 0;
	let param = new URLSearchParams(window.location.search);
	var lessons = ['Supermarket', 'Campus', 'Restaurant', 'Zoo', 'Breakfast', 'Softdrinks']
	var Lesson = new Array();
	if(param.has('lesson')){
		if(param.get('lesson') <= 0 || param.get('lesson') >= 7)
			lessonNumber = Math.floor(Math.random() * 6);
		else
			lessonNumber = param.get('lesson') - 1;
	} else {
		lessonNumber = Math.floor(Math.random() * 6);
	}
	//console.log(lessonNumber+ ":" + lessons[lessonNumber]);
    await fetch('http://localhost:9000/cards/' + lessons[lessonNumber], {
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        data.forEach(
        	number => {
                     	var obj = {title:number.name, content:number.mandarin};
                     	Lesson.push(obj);
            });
    } 
    ).catch(e =>{
        //Error
    });
    return(Lesson);   
}

// Fisher-Yates
function shuffleNewArray(length){
	var array = new Array();
	for(let i = 0; i < length; ++i){
		array.push(i);
	}
	for (let i = array.length - 1; i > 0; --i) {
	    const j = Math.floor(Math.random() * (i + 1));
	    const temp = array[i];
	    array[i] = array[j];
	    array[j] = temp;
  	}
  	return array;
}

function shuffleArray(length, oldArray){
	const array = oldArray.slice(0, length);
	for (let i = length - 1; i > 0; --i) {
	    const j = Math.floor(Math.random() * (i + 1));
	    const temp = array[i];
	    array[i] = array[j];
	    array[j] = temp;
  	}
  	return array;
}

function main(){
	if (document.readyState !== 'loading') { // prevents the Event 'DOMContentLoaded' not being fired
		canvasFitsParentDOM();
		setFPS();
	} else {
		document.addEventListener("DOMContentLoaded", canvasFitsParentDOM);
		document.addEventListener("DOMContentLoaded", setFPS);
	}

	// fits the canvas 
	window.addEventListener("resize", canvasFitsParentDOM);
}

main();	

export default Match;