import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import logo from './nyt_logo.png';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>New York Times Article Scrubber</h1>
					
					<h3>Search for and annotate articles of interest.</h3>
				</div>
				
				<div className="boxes">
					<h3>Search</h3>
				</div>

				<div className="boxes">
					<h3>Results</h3>
				</div>

				<div className="boxes">
					<h3>Saved</h3>
				</div>

				
			</div>
		);
	}
}

export default App;