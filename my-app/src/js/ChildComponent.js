import React from 'react';

function ChildComponent(props){
    return (
    <div>
        <div>{props.message}</div>
        <div>{props.msg}</div>
        <div>{props.message}</div>
        <div>{props.msg}</div>
    </div>

    );
}
export default ChildComponent;
