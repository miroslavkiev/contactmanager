import React, {Component} from 'react';
import './App.css';

class App extends Component {
	render() {
		const name = 'John';
		const showHello = false;
		const showMath = true;
		const num1 = 33;
		const num2 = 40;

		let math;
		if (showMath){
			math = <h4>{num1} + {num2} = {num1+num2}</h4>;
		} else{
			math = null;
		}

		return (
			<div className="App">
				<h1>The App Component</h1>
				{showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
				{math}
			</div>
		);
	}
}

export default App;
