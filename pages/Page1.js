import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { saveToStore } from "../redux/myreducer";
export default function Page1() {
    const dispatchWhenClicked = useDispatch();
    const [inputValue,setInputVal] = useState("");
    const saveInput=()=>{
        dispatchWhenClicked(saveToStore(inputValue));
        alert("Data Stored in Redux-Store! Now check the Page 2!");
    };
return <div>
        <input type="text" onChange={(e)=>setInputVal(e.target.value)}/>
        <br/>
        <button onClick={()=>saveInput()}>Save to Redux Store</button>
    </div>;
}
