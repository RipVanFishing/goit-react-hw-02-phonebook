
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "./Contacts";
import Phonebook from "./Phonebook/Phonebook";


export class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    
    filter: ''
    
  }

  formSubmitHandler = data => {
    
    let newContact = { id: nanoid(), ...data }
    console.log(newContact)

    this.setState(() => ({ contacts: [newContact, ...this.state.contacts] })
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
