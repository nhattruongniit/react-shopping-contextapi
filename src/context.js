import React from 'react';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    todo: 1
  }

  handleSetState = () => {
    this.setState({
      todo: 2
    })
  }

  handleDeleteTodo = () => {
    console.log('handleDeleteTodo')
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDeleteTodo: this.handleDeleteTodo,
        handleSetState: this.handleSetState,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
};

const ProductConsumer = ProductContext.Consumer;

export {
  ProductProvider,
  ProductConsumer,
}