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
					<h2>New York Times Article Scrubber</h2>
					
					<h3>Search for and annotate articles of interest.</h3>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;