import React from "react";
import css from './SearchForm.module.css';

const SearchForm = ({ value, onChange }) => (
    
<label>Find contacts by name
 <input value={value} onChange={onChange} name='find-name' type='text' />
 </label>
)
   
    

export default SearchForm