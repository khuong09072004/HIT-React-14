import { memo, useState } from "react";

const ReactMemo =()=>{
    const[count,setCount]=useState(0);

    const Count1 = ()=>{
        setCount(count+1);
    }


    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={Count1}>add</button>
        </>
    )

}
export default ReactMemo;