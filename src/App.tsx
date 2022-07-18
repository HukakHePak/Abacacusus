import React, {useState} from 'react';
import './App.css';
import {Abacus} from "./components/Abacus/Abacus";
import forestImg from './images/1614786549_6-p-spokoinii-fon-7.jpg';
import abacusSkin from './images/Frame 33.png';
import boneSkin from './images/Vector 6.png';
import boneSkin2 from './images/Vector 5.png';
import abacusSkin2 from './images/Frame 33 (1).png'
import {SelectNum} from "./components/Select/SelectNum";
import {SelectImg} from "./components/Select/SelectImg";

const separatorHeight = 0.68
const defaultParams = {
    size: 5,
    topBonesCount: 2,
    botBonesCount: 3,
    skin: abacusSkin,
    bonesSkin: boneSkin
}

function App() {
    const [params, setParams] = useState(defaultParams);

    function changeHandler(paramName: string) {
        return (parameter: any) => setParams({...params, [paramName]: parameter});
    }

    return (
        <div className="App" style={{backgroundImage: `url(${forestImg})`}}>
            <div className="wrapper">
                <div className="settings">
                    <SelectNum value={params.size} onChange={changeHandler('size')}>
                        Cтержни
                    </SelectNum>
                    <SelectNum value={params.topBonesCount} onChange={changeHandler('topBonesCount')}>
                        Верхние косточки
                    </SelectNum>
                    <SelectNum value={params.botBonesCount} onChange={changeHandler('botBonesCount')}>
                        Нижние косточки
                    </SelectNum>
                    <SelectImg data={[abacusSkin, abacusSkin2]} value={params.skin} onChange={changeHandler('skin')}/>
                    <SelectImg data={[boneSkin2, boneSkin]} value={params.bonesSkin}
                               onChange={changeHandler('bonesSkin')}/>
                </div>
                <div className="content" style={{borderColor: params.skin == abacusSkin2 ? '#682413' : ' #838383'}}>
                    <Abacus size={params.size}
                            topBonesCount={params.topBonesCount}
                            botBonesCount={params.botBonesCount}
                            skin={params.skin}
                            bonesSkin={params.bonesSkin} separator={separatorHeight}/>
                </div>
            </div>
        </div>
    );
}

export default App;
