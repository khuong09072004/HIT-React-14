import { useRef, useState } from "react";

const Usefer = () => {
    const[count,setCount]= useState(90);
    const timerID =useRef(0);
    const h1Ref =useRef();

    const handleStart =()=>{
        timerID.current=setInterval(()=>{
            setCount(pre => pre-1)
        },1000);
        console.log(h1Ref);
        h1Ref.current.style.color ="red";
        
    }
    const handleStop = () =>{
        clearInterval(timerID.current);
        h1Ref.current.style.border= "3px solid red";


    }


    return(
        <>
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
        </>
        
    )
}

export default Usefer;