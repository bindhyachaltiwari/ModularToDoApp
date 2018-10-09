import React from 'react';
import Input from './../../atoms/Input/Input.js';
import Button from './../../atoms/Button/Button.js';

class InputGroup extends React.Component {
	static Input = Input;
	static Button = Button;

	render = ()  => (
			<div>
				{this.props.children({id:'taskName', type:'text', className:'', onChange: this.props.onChange, value: this.props.inputValue})}
			</div>
		)
}

export default InputGroup;