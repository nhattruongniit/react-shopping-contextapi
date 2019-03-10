import React from 'react';
import { data } from './data';

const TodoContext = React.createContext();

class TodoProvider extends React.Component {
  state = {
    todos: data,
  }

  handleDeleteTodo = () => {
    console.log('handleDeleteTodo')
  }

  render() {
    return (
      <TodoContext.Provider value={{
        ...this.state,
        handleDeleteTodo: this.handleDeleteTodo
      }}>
        {this.props.children}
      </TodoContext.Provider>
    )
  }
};

const TodoConsumer = TodoContext.Consumer;

export {
  TodoProvider,
  TodoConsumer,
}