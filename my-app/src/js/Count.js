import React, {useState} from 'react';
import Hida from "../img/다운로드.jpg"
import ToggleButton from './ToggleButton';

// 증가시키는 함수
function AddCount(){
  const [count, setCount] = useState(1);
  const increament = () =>{
    setCount(count + 1);
  }
  return(
    <div>
      <h1>내 통장 잔고다 : {count}</h1>
    <button onClick={increament}><ToggleButton/></button>
    </div>
  )
}

function Count(){

    return (
        <div>
            <AddCount/>
        </div>
    )
}
export default Count;