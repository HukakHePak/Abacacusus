import './Select.css';


export function SelectNum(props) {
    const {children, onChange, value} = props;

    return <div className="select-num">
        <span> {children} </span>
        <input type="number" onChange={(e) => onChange(e.target.value)} value={value}/>
    </div>
}