/*
  CONTROLLER FUNCTIONS - challenge page
  --------------------------------
  contributors:
    - Jing-Tinng (challenge render and functionality)
*/

import React from 'react';
import "../style/Challenge.css"
import {FormattedMessage} from "react-intl"
import {useIntl, IntlProvider} from "react-intl";

const Challenge = () =>{
    return (
        <div>
            <h3>This is challenge page.</h3>   
        </div>
    );
}

// the buttons of challenge options
function Square(props) {
	const intl = useIntl(); // get the global language setting
	if(props.word!=null && intl.locale != 'zh') // if the language setting is not traditional chinese
		return(
			<button 
			className = {"square " + props.className}
			onClick={props.onClick}
			id = {props.id}
			>
			<FormattedMessage id={props.word} defaultMessage={props.word}/>
			</button>
		);
	else if(props.word!=null && intl.locale == 'zh') // if the language setting is traditional chinese
		return(
			<button 
			className = {"square " + props.className}
			onClick={props.onClick}
			id = {props.id}
			>
			{props.word}
			</button>
		);
	else // if button has its own word, don't translate to other language
		return(
			<button 
			className = {"square " + props.className}
			onClick={props.onClick}
			id = {props.id}
			>
			</button>
		);
}

class Timer extends React.Component{ // uses to render timer canvas
	constructor(props){
		super(props);
	}

	render(){
		return(
			<canvas className = "timer" id = 'timer' height='6px'/>
			);
	}
}

class Match extends React.Component{ // the main challenge mechnism and DOM element render
	constructor(props){
		super(props);
		this.state = {
			prompts: Array(4).fill(null), // the left side options
			answers: Array(4).fill(null), // the right side options
			promptsOrder: Array(4).fill(null), // the order after shuffled
			answersOrder: Array(4).fill(null), // the order after shuffled
			choosePromptId: "", // record DOM id when user clicks a prompt
			chooseAnswerId: "", // record DOM id then user clicks a answer
			userMatches: Array(4).fill([null,null]), // Y of prompt, Y of answer, is Correct?, transparent
			correctCounter: 0, // count how many correct matches
			gameHeight: 0, // the canvas height
			buttonYPoints: Array(4).fill(null), // for draw line between button
			totalTime: 60000, // ms
			remainingTime: 60000, // ms
			stop: false, // if true, stop timer and draw all canvas
			rewards: Array(), // reward text, proportion of X [0,1], proportion of Y [0,1]
			interval: null, // records the returned id of setInterval(), used to clearInterval() when firing ComponentWillUnmount()
		};
	}
	
	// render the left side options, needs to be translated
	renderPrompt(i, word){
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

	// render the right side options
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

	// render the timer on the bottom of the challenge page
	renderTimer(){
		return(
			<Timer id='timer' />
			);
	}
	
	// sets the right side button color
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

	// sets the right side button colr
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

	// checks the user match, and draw the game canvas 
	checkAnswer(){
		let ans = this.state.chooseAnswerId.slice(-1);
		let pro = this.state.choosePromptId.slice(-1);
		let ansDOM = document.getElementById(this.state.chooseAnswerId);
		let proDOM = document.getElementById(this.state.choosePromptId);
		let rewards = this.state.rewards;
		let remainingTime = this.state.remainingTime;
		const oldMatches = this.state.userMatches;
		if(this.state.promptsOrder[pro] == this.state.answersOrder[ans]){
			// Correct~~~
			rewards.push(['+5 sec', Math.random(), 0.5]); // push rewards text and its coordinates into array
			oldMatches.push([pro, ans]);
			ansDOM.disabled = true;
			proDOM.disabled = true;
			ansDOM.style.backgroundColor = '';
			proDOM.style.backgroundColor = '';
			let audio = new Audio(require('../audio/mixkit-correct-answer-reward-952.wav')); // play a corrent match sound effect
			audio.play();
			const userMatches = this.state.userMatches;
			userMatches.push([pro, ans, true, 1.0]);
			remainingTime+=5000; // add remaining time, 5 seconds
			if(remainingTime>60000) remainingTime = 60000;
			this.setState({
				userMatches:userMatches,
				rewards: rewards,
				remainingTime: remainingTime,
				correctCounter: this.state.correctCounter + 1,
			});
		}
		else {
			// Wrong!!!
			ansDOM.style.backgroundColor = 'red';
			proDOM.style.backgroundColor = 'red';
			
			let audio = new Audio(require('../audio/mixkit-game-show-wrong-answer-buzz-950.wav')); // play a wrong match sound effect
			audio.play();

			rewards.push(['-5 sec', Math.random(), 0.5]); // push rewards text and its coordinates into array

			const userMatches = this.state.userMatches;
			userMatches.push([pro, ans, false, 1.0])
			remainingTime-=5000; // decrease remaining time, 5 seconds
			if(remainingTime<0) remainingTime = 0;
			this.setState({
				userMatches:userMatches,
				rewards: rewards,
				remainingTime: remainingTime,
			});

		}			
		this.setState({
			chooseAnswerId: "",
			choosePromptId: "",
			userMatches: oldMatches,
		});
	}

	// sets interval, each time firing the function this.draw() will redraw the game canvas and timer canvas
	setFPS(){
		let interval; // records the returned ID from serInterval()
		if(!interval){ 
			interval = setInterval(this.draw.bind(this), 16.6667); // 60 fps
			this.setState({
				interval: interval,
			});
		}
	}

	draw(){
		if(this.state.stop == false){
			var canvas = document.getElementById('challenge');
			if(canvas.height+1 != this.state.gameHeight){
				this.canvasResize(); // if the window height has been changed, we need to change the game state to prevent the game draw in unexcepted way
			}
			if(canvas != null && canvas.getContext){
				const remainingTime = this.state.remainingTime;
				const userMatches = this.state.userMatches;
				var ctx = canvas.getContext('2d');
				// clear the whole game canvas
				ctx.clearRect(0,0, canvas.width, canvas.height);
				// draw Line
		        ctx.lineWidth = 15;
		       	ctx.lineCap = 'round';
		       	let waitRemoveMatches = new Array(); // records the matches that should be remov
		       	for(let i = 0; i < userMatches.length; ++i){
					if(userMatches[i][2] === true) // correct answer
			       		ctx.strokeStyle = 'rgba(128, 200, 128, '+ userMatches[i][3] +')';
			       	else if(userMatches[i][2] === false){
			       		ctx.strokeStyle = 'rgba(255, 0, 0, '+ userMatches[i][3] +')';
			       		userMatches[i][3] -= 0.03; // fade out
			       		if(userMatches[i][3] < 0){
			       			// if the value less than 0, means that the match line no needs to be drawn, remove from array to prevent memory overflow
			       			waitRemoveMatches.push(userMatches[i]); // pushs into array, removes later
			       		}
			       	}
	       			ctx.beginPath();
	       			ctx.moveTo(20, this.state.buttonYPoints[userMatches[i][0]]);
    				ctx.lineTo(canvas.width - 20, this.state.buttonYPoints[userMatches[i][1]]);
    				ctx.stroke();
		       	}
		       	waitRemoveMatches.forEach((remove)=>{
		       		userMatches.splice(remove);
		       	});

		       	// draw line end

		       	// draw timer
		        this.redrawTimer(60000, remainingTime);

		        // draw rewards
		        let rewards = this.state.rewards;
		        let waitRemoveRewards = new Array(); // records the rewards that should be remove
		        for(let i = 0; i < rewards.length; ++i){
		        	this.drawRewards(rewards[i][0], rewards[i][1], rewards[i][2]);
		        	rewards[i][2]+=0.005; // move down
		        	if(rewards[i][2] > 1){
		        		// if the value greater than 1, means that the rewards text already outside the boundary, remove from array to prevent memory overflow
		        		waitRemoveRewards.push(rewards[i]);
		        	}
		        }
		        waitRemoveRewards.forEach((remove)=>{
		        	rewards.splice(remove, 1);
		        });
		        // draw rewards end

		        if(this.state.correctCounter == 4)
			        this.setState({
			        	stop: true,
			        });

			   	this.setState({
		        	remainingTime: remainingTime - 16.6667,
		        	rewards: rewards,
		        	userMatches: userMatches
		        });
			} else {
				// if not supported...
				console.log("ERROR!!!");
			}
		}
	}

	// redraw the timer canvas
	redrawTimer(totalTime, remainingTime){
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
			lingrad.addColorStop(0, '#FF0000'); // red
  			ctx.fillStyle = lingrad;
  			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}
	}

	// draw the rewards text on game canvas
	drawRewards(rewardTime, xPos, yPos){
		let canvas = document.getElementById('challenge');
		let ctx = canvas.getContext('2d');
		// draaw text border 
	    ctx.strokeStyle = 'black';
	    ctx.lineWidth = 4;
	    ctx.strokeText(rewardTime, canvas.width*xPos, canvas.height*yPos);
	    // draw text
		ctx.font = '48px serif';
		if(rewardTime.at(0)=='+')
			ctx.fillStyle = 'limegreen'
		else
			ctx.fillStyle = 'red'

		ctx.fillText(rewardTime, canvas.width*xPos, canvas.height*yPos);
	}

	componentWillUnmount(){
		clearInterval(this.state.interval); // prevents the canvas blink after user changes the language
	}

	//
	// Sets and prepare data before the game start 
	// warning: this function will be fired after user changes the language, and the state of Match object will be reset
	// 
	componentDidMount(){
		const gameHeight = this.divElement.clientHeight;
		const buttonYPoints = Array(4).fill(0);
		let point = 0;
		for(let i = 0; i < 8; ++i){
			point += gameHeight / 8;
			if(i % 2 == 0)
				buttonYPoints[i/2] = point;
		}
		this.setState({ 
			gameHeight: gameHeight, 
			buttonYPoints: buttonYPoints,
			userMatches: [],
		});
		canvasFitsParentDOM();
		this.prepareData();
		this.setFPS();
	}
	
	// prepare the game data, like answer and prompts words
	async prepareData(){
		var words = await getData();
		var shuffledArray = shuffleNewArray(words.length);
		var promptsShuffledArray = shuffleArray(4, shuffledArray);
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

	// when window size being changed, reset the canvas parameter into state, preventing the canvas to be drawn in an unexcepted way
	canvasResize(){
		if(this.divElement != null){
			const gameHeight = this.divElement.clientHeight;
			const buttonYPoints = Array(4).fill(0);
			let point = 0;
			for(let i = 0; i < 8; ++i){
				point += gameHeight / 8;
				if(i % 2 == 0)
					buttonYPoints[i/2] = point;
			}
			this.setState({ 
				gameHeight: gameHeight, 
				buttonYPoints: buttonYPoints,
			});
		}
	}

	// render the DOM element
	render(){
		return(
			<div className="Matching">
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

// when window size changed, re-style the CSS style sheet.
// this is not the same as Match.canvasResize()
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
		// the returned values of offsetWidth or offsetHeight are not integer, they are float
		// maybe there will cause round problems, I'm not sure
	 	challenge.width = challenge.offsetWidth - 1;
	 	challenge.height = challenge.offsetHeight - 1;
	 	timer.width = timer.offsetWidth - 1;
 	}
}

// get the lesson data from backend(express)
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

// add event listener
function main(){
	if (document.readyState !== 'loading') { // prevents the Event 'DOMContentLoaded' not being fired
		canvasFitsParentDOM();
	} else {
		document.addEventListener("DOMContentLoaded", canvasFitsParentDOM);
	}
	// fits the canvas 
	window.addEventListener("resize", canvasFitsParentDOM);
}

main();	

export default Match;