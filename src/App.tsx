import React, {useState} from 'react';
import './App.css';
import { Abacus } from "./components/Abacus/Abacus";
import forestImg from './images/1614786549_6-p-spokoinii-fon-7.jpg';
import abacusSkin from './images/Frame 33.png';
import boneSkin from './images/Vector 6.png';
import {SelectNum} from "./components/Select/SelectNum";

function App() {
    const [params, setParams] = useState({
        size: 5,
        topBonesCount: 2,
        botBonesCount: 3,
        skin: abacusSkin,
        bonesSkin: boneSkin
    });

  return (
    <div className="App" style={{backgroundImage: `url(${forestImg})`}}>
        <div className="wrapper">
            <div className="settings">
                <SelectNum setNum={(num) => setParams({...params, size: num})}>Количество стержней:</SelectNum>
                <SelectNum>Количество верхних костей:</SelectNum>
                <SelectNum>Количество нижних костей:</SelectNum>
                <span></span> <select></select>
                <span></span> <input/>
            </div>
            <div className="content">
                <Abacus size={3} topBonesCount={2} botBonesCount={3} skin={abacusSkin} bonesSkin={boneSkin} separator={0.68} />
            </div>
        </div>
    </div>
  );
}

export default App;
