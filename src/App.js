import React, { Component } from 'react';

import { TodoConsumer } from './context';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoConsumer>
          {(value) => {
            return value.todos.map(todo => (
              <div key={todo.id} onClick={value.handleDeleteTodo}>{todo.title}</div>
            ))
          }}
        </TodoConsumer>
      </div>
    );
  }
}

export default App;
