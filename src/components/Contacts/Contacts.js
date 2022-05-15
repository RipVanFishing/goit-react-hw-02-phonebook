
import React from "react";
import css from './Contacts.module.css';


const Contacts = ({contacts,onDelete}) => {
    return (
        <div>
            <h2 className={css.title_contacts}>Contacts:</h2>  
            <ul className={css.list}>
                
                {contacts.map((el) => (<li key={el.id} className={css.item_name}>
                <p className={css.text_name}>{el.name}: {el.number}</p>
                <button type="button" onClick={()=> onDelete(el.id)}>Delete</button>
               </li>))}
                 </ul>   
        </div>
    )

}

export default Contacts;