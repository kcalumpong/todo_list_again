import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { faker } from "@faker-js/faker";

let token;

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
      apiTodos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  componentDidMount() {
    this.login();
  }

  login() {
    let config = {
      method: "post",
      url: "https://api-nodejs-todolist.herokuapp.com/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: "xtina@gmail.com",
        password: "pass1234",
      },
    };
    axios(config)
      .then((res) => {
        token = res.data.token;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createTodo() {
    let config = {
      method: "post",
      url: "https://api-nodejs-todolist.herokuapp.com/task",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: { description: `Feed ${faker.animal.type()}` },
    };
    axios(config)
      .then((res) => {
        this.setState((prevState) => ({
          apiTodos: [...prevState.apiTodos, res.data.data.description],
        }));
      })
      .catch((err) => {
        console.log(err);
      });
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
          <button onClick={this.createTodo} className="api-add-button">
            Add with Api +
          </button>

          {this.state.todos.map((elem) => {
            return (
              <p>
                <Link key={elem} to={`/todo/${elem}`} state={{ props: elem }}>
                  TODO: {elem}
                </Link>
              </p>
            );
          })}

          {this.state.apiTodos.map((elem) => {
            return (
              <p>
                <Link key={elem} to={`/todo/${elem}`} state={{ props: elem }}>
                  API TODO: {elem}
                </Link>
              </p>
            );
          })}
        </div>
      </>
    );
  }
}

export default Todos;
