import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { useTheme } from './ThemeContext';
const App = () => {
  const { theme, toggleTheme } = useTheme();

  return ( 
    <div
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* <h3>Current Theme: {theme}  <br /> */}
      {/* <h1>Login page </h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <h4>Username</h4>
      <input type="text" name=""  placeholder="Usename" id="" /> <br /> <br />
      <h4>Password</h4>
      <input type="password" name=""  placeholder="Password" id="" />
      
      </div> */}
      
      <table style={{border: '20px solid black',padding: '50px',margin:'30px'}}>
      <h1 style={{textAlign:'center', justifyContent:'center'}}>login page</h1>
        <tr>
          <td>Email  :- </td>
          <td><input type="email" name="" placeholder='email' id="" /></td>
        </tr>
        <tr>
          <td>Password :- </td>
          <td><input type="password" name="" placeholder='password' id="" /></td>
        </tr>
      
          <button>Submit </button>
        
      </table>
         
      {/* </h3> */}
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: theme === 'light' ? '#000' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '50px',
          marginTop: '20px',
        }}
      >
       Light to Dark
      </button>
    </div>
  );
};

export default App;
