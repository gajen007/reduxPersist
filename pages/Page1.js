import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { saveToStore } from "../redux/myreducer";
export default function Page1() {
    const dispatchWhenClicked = useDispatch();
    const [inputValue,setInputVal] = useState("");
    const saveInput=()=>{
        dispatchWhenClicked(saveToStore(inputValue));
    };
return <div>
        <input type="text" onChange={(e)=>setInputVal(e.target.value)}/>
        <br/>
        <button onClick={()=>saveInput()}>Save Locally</button>
    </div>;
}
