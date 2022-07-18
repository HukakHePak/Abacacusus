import './Select.css';

export function SelectImg(props: {data: Array<string>, onChange: (item: string) => any, value: string }) {
    const { data, onChange, value } = props;

    return <div className="select-img">
        {data.map(item => <img key={item.slice(0, 10)}
                               className={item === value ? "selected" : ""}
                               onClick={() => onChange(item)}
                               src={item} alt="" />)
        }
    </div>
}