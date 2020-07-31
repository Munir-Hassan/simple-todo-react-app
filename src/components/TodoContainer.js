import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: 'Setup Development Environment',
				completed: true
			},
			{
				id: uuidv4(),
				title: 'Development Website and add content',
				completed: false
			},
			{
				id: uuidv4(),
				title: 'Deploy to live server',
				completed: false
			}
		]
	};

	handleChange = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					console.log('before', todo.completed);
					todo.completed = !todo.completed;
					console.log('after', todo.completed);
				}
				return todo;
			})
		});
		console.log('cliked', id);
	};

	deleteTodo = (id) => {
		console.log('Deleted the id', id);
		const delTodos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({
			todos: delTodos
		});
	};

	addTodoItem = (title) => {
		console.log(title);
		const addTodo = {
			id: uuidv4(),
			title: title,
			completed: false
		};
		this.setState({
			todos: [ ...this.state.todos, addTodo ]
		});
	};

	render() {
		return (
			<div className="container">
				<Header />
				<InputTodo addTodoProps={this.addTodoItem} />
				<TodoList
					todos={this.state.todos}
					handleChangeProps={this.handleChange}
					deleteTodoProps={this.deleteTodo}
				/>
			</div>
		);
	}
}

export default TodoContainer;
