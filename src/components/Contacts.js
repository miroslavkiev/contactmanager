import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
