import './Select.css';


export function SelectImg(props) {
    const { data, onChange, value } = props;

    return <div className="select-img">
        {data.map(item => <img key={item}
                               className={item == value ? "selected" : ""}
                               onClick={() => onChange(item)}
                               src={item} alt="" />)
        }
    </div>
}