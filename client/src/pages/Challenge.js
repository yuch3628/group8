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
		<button className = "square" onClick={props.onClick}>
		{props.value+" TEST"}
		</button>
	);
}

class Match extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			prompts: Array(4).fill(null),
			answers: Array(4).fill(null),
			userMatches: Array(4).fill([null,null]),
			gameHeight: 0,
			buttonYPoints: Array(4).fill(null),
		};
	}
	
	renderPrompt(i){
		return (
			<Square 
			value={this.state.prompts[i]}
			onClick={()=>{
				console.log("!!!");
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
			onClick={()=>{
				// do something...
			}} />
			);
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
					<canvas className="challenge"/>
					<div className="div_answers">
					{this.renderAnswer(0)}
					{this.renderAnswer(1)}
					{this.renderAnswer(2)}
					{this.renderAnswer(3)}
					</div>
				</div>
				<div className="progress_bar">
				{console.log(this.state)}
				</div>
			</div>
		);
	}
}
export default Match;