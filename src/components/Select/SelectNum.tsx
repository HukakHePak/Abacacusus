import './Select.css';

export function SelectNum(props: { value: number, onChange: (value: number) => any, children: string}) {
    const {children, onChange, value} = props;

    return <div className="select-num">
        <span> {children} </span>
        <input type="number" onChange={(e) => onChange(parseInt(e.target.value))} value={value}/>
    </div>
}