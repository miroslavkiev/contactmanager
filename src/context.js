import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-444-3333"
      },
      {
        id: 2,
        name: "Sarah Connor",
        email: "sarah@gmail.com",
        phone: "333-555-3333"
      },
      {
        id: 3,
        name: "Jack Daniels",
        email: "jack@gmail.com",
        phone: "444-2222-1111"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
