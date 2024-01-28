import {useState} from "react";

const WillsAwesomeCounter =  (props) => {

    const [count, setCount] = useState(props.initialValue ?? 0);

    const add = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const remove = () =>{
        setCount((prevCount) => {
            const result = prevCount - 1;
            if(result<0){
                return 0;
            }
            return result;
        });
    }

    return (
    <div>
        <h1>Will's Awesome Counter</h1>
        <button onClick={remove}>Remove</button>
        <span id='count'>{count}</span>
        <button onClick={add}>Add</button>
    </div>
    );

}

export default WillsAwesomeCounter