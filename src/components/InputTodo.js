import React from 'react';

class InputTodo extends React.Component {
	state = {
		title: ''
	};

	addInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodoProps(this.state.title);
		this.setState({
			title: ''
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Add Todo..."
					value={this.state.title}
					name="title"
					onChange={this.addInput}
				/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default InputTodo;
