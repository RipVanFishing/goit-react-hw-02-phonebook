import React from "react";
import css from './Contacts.module.css'

const Contacts = ({contacts}) => {
    return (
        <div>
            <h2>Contacts:</h2>  
            <ul>
                {contacts.map((el) =>(<li key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.number}</p>
               </li>))}
                    
               
               
           </ul>   
        </div>
    )

}

export default Contacts;