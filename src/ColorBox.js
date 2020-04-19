import React, { Component } from 'react';
import './ColorBox.css';
import getRandomElement from './helpers';

export default class ColorBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: this.props.initialColor
		};

		this.handleClick = this.handleClick.bind(this);
	}

	getColor() {
		let previousColor = this.state.color;
		let newColor = previousColor;

		while (newColor == previousColor) {
			newColor = getRandomElement(this.props.colors);
		}

		return { color: newColor };
	}

	handleClick(e) {
		this.setState(() => this.getColor());
	}

	render() {
		return <div className="ColorBox" style={{ backgroundColor: this.state.color }} onClick={this.handleClick} />;
	}
}
