import './Abacus.css';

export function AbacusCell(props) {
    const {skin, count, separator = 0.5} = props;

    const bones = [];

    for (let i = 0; i < count; i++) {
        bones.push(<img key={i}
                        className="abacus-bone"
                        src={skin}
                        alt=""/>);
    }

    return <div className="abacus-cell" style={{height: separator % 1 * 100 + '%'}}>
        {bones}
    </div>
}