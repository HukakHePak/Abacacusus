import './Abacus.css';
import { AbacusCell } from './AbacusCell';

export function Abacus(props) {
    const { size, topBonesCount, botBonesCount, skin, bonesSkin, separator } = props;

    const cells = [];

    for( let i = 0; i < size; i++) {
        cells.push(
            <div key={i} className="abacus__segment" style={{backgroundImage: `url(${skin})`}}>
                <AbacusCell count={topBonesCount} skin={bonesSkin} separator={1 - separator}/>
                <AbacusCell count={botBonesCount} skin={bonesSkin} separator={separator}/>
            </div>
        );
    }

    return <div className="abacus">
        {cells}
    </div>

}