import React,{useState} from "react";
import ReactMemo from "../ReactMemo/ReactMemo";
const Counter =() =>{
    const[count,setCount]=useState(0);

    const Count1 = ()=>{
        setCount(count+1);
    }


    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={Count1}>add</button>
        <ReactMemo onIncrement ={Count1}/>
        </>
    )



}

export default Counter;