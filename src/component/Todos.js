import React from "react";
import { Link } from "react-router-dom";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: event.target.value,
    });
  }

  handleSubmit() {
    let addedTodo = this.state.todo;
    this.setState((prevState) => ({
      todos: [...prevState.todos, addedTodo],
      todo: "",
    }));
  }

  render() {
    return (
      <>
        <div>
          <h1>Todo List</h1>
          <input
            className="input-box"
            type="text"
            placeholder="Add Task"
            name="todo-input"
            value={this.state.todo}
            onChange={this.handleChange}
          ></input>
          <button onClick={this.handleSubmit} className="add-button">
            Add +
          </button>

          {this.state.todos.map((elem) => {
            return <p><Link key={elem} to={`/todo/${elem}`} state={{props: elem}}>TODO: {elem}</Link></p>
          })}
        </div>
      </>
    );
  }
}

export default Todos;
