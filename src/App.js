import './App.css';
import Header from './Header.js';
import Chat from './Chat.js';
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <Chat/>
    </div>
  );
}

export default App;
