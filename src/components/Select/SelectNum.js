import './Select.css';


export function SelectNum(props) {
    const { children, setNum, num } = props;

    return <div className="select-num">
        <span> {children} </span>
        <input type="number" onChange={(e) => setNum(e.target.value)} value={num}/>
    </div>
}