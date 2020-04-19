import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorGrid.css';
import getRandomElement from './helpers';

export default class ColorGrid extends Component {
	static defaultProps = {
		colors: [
			'Purple',
			'MediumVioletRed',
			'MediumOrchid',
			'Lavender',
			'MediumPurple',
			'MediumSlateBlue',
			'Plum',
			'Violet'
		],
		boxCount: 16
	};

	constructor(props) {
		super(props);

		this.state = {
			boxes: this.createBoxes()
		};

		this.setState(() => this.setState());
	}

	createBoxes() {
		let boxes = [];

		for (let i in this.props.boxCount) {
			boxes.push(getRandomElement(this.props.colors));
		}

		return boxes;
	}

	render() {
		const boxes = Array.from({ length: this.props.boxCount }).map(() => {
			return <ColorBox colors={this.props.colors} initialColor={getRandomElement(this.props.colors)} />;
		});
		return <div className="ColorGrid">{boxes}</div>;
	}
}
