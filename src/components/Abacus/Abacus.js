import './Abacus.css';

export function Abacus(props) {
    const { size, topBonesCount, botBonesCount, topBonesSkin, botBonesSkin } = props;

    const desk = [];

    for( let i = 0; i < size; i++) {
        desk.push(<div key={i} className="abacus__segment">
            <div className="abacus__top">

            </div>
            <div className="abacus__bot">

            </div>
        </div>)
    }

    return <div>
        {desk}
    </div>

}