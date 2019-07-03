import React, { Component } from 'react'
import "./App.css";
import Hello from "./components/Hello";

interface State {
  todoTitle: string;
  todos: any[]
}
interface Props { }

export default class App extends Component<Props, State>{
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      todos: []
    }
  }
  onChangeValue = (event) => {
    this.setState({
      todoTitle: event.target.value
    });
  }
  onCheck = (index) => {
    this.setState((state) => {
      state.todos[index].completed = !state.todos[index].completed
      return { todos: [...state.todos] }
    })
  }
  deleteTodo = (index) => {
    this.setState((state) => {
      state.todos.splice(index, 1);
      return { todos: [...state.todos] }
    })
  }
  addTodo = (event) => {
    this.setState((state) => ({
      todos: [{ title: state.todoTitle, completed: false }, ...state.todos]
    }));
  }
  render() {
    return (
      <div>
        <Input onChange={this.onChangeValue} value={this.state.todoTitle} addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} onCheck={this.onCheck} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

const Input = (props) => {
  return <div>
    <input type="text" name="todo-title" value={props.value} onChange={props.onChange} />
    <button onClick={props.addTodo}>Add</button>
  </div>
}

const TodoList = (props) => {
  return props.todos.map((el, index) => <div key={index}>
    <input
      type="checkbox"
      name="todo"
      checked={el.completed}
      onChange={(event) => props.onCheck(index)}
    />
    <span style={el.completed ? { textDecoration: "line-through" } : {}}>
      {el.title}
    </span>
    <button onClick={(event) => props.deleteTodo(index)}>X</button>
  </div>)
}
