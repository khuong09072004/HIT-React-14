import React, { useState } from "react";


const UseMemo = () => {
    const [inputValue,setInputValue]=useState('');
    const [inputValue1,setInputValue1]=useState('');
    const[product,setProduct]=useState([]);

    const show = () =>{
          setProduct([...product,{inputValue,inputValue1}]);
 
    };

    
    
 


    return(
        <>
         <input type="text" id="inputValue" size="80" onChange={e => setInputValue(e.target.value)} placeholder="Nhap san pham..." />
         <input type="text" id="inputValue1" size="80"  onChange={e => setInputValue1(e.target.value)} placeholder="Nhap  gia san pham..." />
         <button onClick={show}> add</button>
         {product.map((item,index)=>{
            return(
                <p key={index}>
                    {item.inputValue} - {item.inputValue1}
                </p>
            )

         }
         )}
         
        </>
    )
}

export default UseMemo;