import React, { Component } from "react";
import css from './SearchForm.module.css';

class SearchForm extends Component {

    state = {
        filter:  ''
    }

    handleFilter = (event) => {
         const { value } = event.currentTarget;
        this.setState({
           filter: value
        })
        
    }

    render() {
        return (
            <>
                <h2>Find contacts by name</h2>
                <input value={this.state.filter} onChange={this.handleFilter} name='find-name' type='text'/>
            </>
        )
   }
}

export default SearchForm;