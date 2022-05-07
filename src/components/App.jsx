
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
    this.setState({
      contacts: this.state.contacts.push(data)
    })
  }
 
  render() {
    return (
      <>
        <Phonebook onSubmit={this.formSubmitHandler} />
      
        
    </>
    )
  }
}
