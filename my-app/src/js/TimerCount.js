import React, {useState, useEffect} from "react";

function Timer(){
    const [count, setCount] = useState(0);

    const hoho = () => {
        setCount(count + 1);
    }
    const haha = () => {
        setCount(count -1 );
    }

    const aaa = () => {
       setCount(0);
    }

    const bbb = () => {
        setCount(count * 2);
     }
    useEffect(() => {
        document.title = `${count}`;
    });

    return(
        <div>
            <p>{count}</p>
            <button onClick={hoho}>
                증가
            </button>
            <button onClick={haha}>감소</button>

            <button onClick={aaa}>초기화</button>

            <button onClick={bbb}>곱하기</button>
        </div>
    )
}
export default Timer