import React from 'react';
import './Button.css';

class Button extends React.Component {
	handleClick = () => {
		this.props.clickHandler(this.props.name);
	};

	render() {
		let buttonClass = 'component-button';

		if (typeof this.props.colorClass === 'string') {
			buttonClass += ` ${this.props.colorClass}`;
		}
		console.log(this.props.colorClass);
		return (
			<div className={buttonClass}>
				<button onClick={this.handleClick}>{this.props.name}</button>
			</div>
		);
	}
}

export default Button;
