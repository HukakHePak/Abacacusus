import './Abacus.css';

export function AbacusCell(props: {skin: string, count: number, separator: number}) {
    const {skin, count, separator} = props;

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