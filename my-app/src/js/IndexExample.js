import React,{useState} from "react";

function IndexExample(){
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    return(
        <div>
            <input type="text" 
            value={inputText} 
            onChange={handleChange} />
            <p>내가 작성한 글 : {inputText}</p>
        </div>
    )
}

export default IndexExample;