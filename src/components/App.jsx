import React from "react";
import { Phonebook } from "./Phonebook/Phonebook";


export const App = () => {
  return (
    <>
      <Phonebook props="ВСЕ РАБОТАЕТ??!?"/>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      
      React homework template
      </div>
      </>
  );
};
