import { memo, useState } from "react";

const ReactMemo =()=>{
    console.log('re-render')

    return(
        <>
        <div>
        <button onClick={Count1}>add</button>
        </div>
        </>
    )

}
export default ReactMemo;