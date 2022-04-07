import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      todos: event.target.value,
    });
  }

  // handleSubmit(event) {
  //     event.preventDefault();
  //     this.setState({
  //         // todos: [...this.state.todos, event.target.value],
  //         todos: this.state.todos.concat(this.state.todos)
  //     });
  //     console.log('xxxx', this.state)
  //   }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      todos: [...prevState.todos, event.target.value],
    //   todos: this.state.todos.concat(this.state.todos),
    }));
    console.log("xxxx", this.state);
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="input-box"
              type="text"
              placeholder="Add Task"
              value={this.state.todos}
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleSubmit} className="add-button">
              Add +
            </button>
          </form>

          {/* {this.state.todos.map((todo) => {
            return <h1>Item: {todo}</h1>;
          })} */}
        </div>
      </>
    );
  }
}

export default TodoForm;
