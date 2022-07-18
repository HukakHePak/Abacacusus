import React from 'react';
import './App.css';
import { Abacus } from "./components/Abacus/Abacus";
import forestImg from './images/1614786549_6-p-spokoinii-fon-7.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${forestImg})`}}>
      <Abacus size={3} />
    </div>
  );
}

export default App;
