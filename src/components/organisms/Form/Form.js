import React from 'react';
import InputGroup from './../../molecules/InputGroup/InputGroup.js';

class Form extends React.Component {

	state = {
		inputValue: ''
	}

	onChange = event => {
		this.setState({
			inputValue: event.target.value
		})
	}

	onSubmit = event => {
		event.preventDefault();
		this.props.addTasks(this.state.inputValue)
	}

	render = () => {
		return (
			<form method="POST" onSubmit={this.onSubmit}>
				<InputGroup onChange={this.onChange} className='' inputValue={this.state.inputValue}>
					{({id, className, onChange, type }) => (
							<React.Fragment>
								<InputGroup.Input id={id} onChange={onChange} type={type}/>
								<div>
									<InputGroup.Button >
										<span>
											Add Task
										</span>
									</InputGroup.Button >
								</div>
							</React.Fragment>
						)
					}
				</InputGroup>
			</form>
		);
	}
}

export default Form;