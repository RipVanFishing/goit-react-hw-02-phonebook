import Contacts from "components/Contacts";
import React, {Component} from "react";
import css from './Phonebook.module.css';
import { nanoid } from "nanoid";

class Phonebook extends Component {
    state = {
     name: ''
    }
    
    handleSubmit = e => {
    e.preventDefault();
       
        this.props.onSubmit(this.state);
        this.reset();
   
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
     this.setState({ [name] : value });
  }
    reset = () => {
    this.setState({name:''})
}
  render() {
     const randomId = nanoid();
      return (
            <>
                <h1>Phonebook</h1>
                <form className={css.phonebook_form} onSubmit={this.handleSubmit}>
                    <label className={css.form_label}> Name
                        <input className={css.form_input}
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <button type="submit" className={css.button_submit} >Submit</button>
          </form>
         
          <Contacts />
        </>
        
    );
    }
}

export default Phonebook;