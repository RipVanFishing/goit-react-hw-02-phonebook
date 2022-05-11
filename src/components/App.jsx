
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "./Contacts";
import Phonebook from "./Phonebook/Phonebook";


export class App extends Component {

  state = {
    contacts: [],
    
  }

  formSubmitHandler = data => {
    console.log(data)
    let newContact = {id: nanoid(), ...data}

    this.setState(({contacts}) => ({ contacts: [newContact, ...this.state.contacts] })
    )
  }
    
 
  render() {
    return (
      <>
        <Phonebook onSubmit={this.formSubmitHandler} />
        <Contacts contacts={ this.state.contacts}/>
        
    </>
    )
  }
}
