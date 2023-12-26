import React from 'react';
import ChildComponent from './ChildComponent'

function ParentComponent(){
    const data = 'Hello 나는 ParentComponent 야'
    const uta = "ㅂ2ㅂ2"
    return (

    <ChildComponent message={data} msg={uta}/>

    )
}
export default ParentComponent;