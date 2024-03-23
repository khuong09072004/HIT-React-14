import React, { useState } from "react";
import './Search.scss';

const Search =() => {

    const [inputValue,setInputValue]=useState('');
    const [title,setTitle]=useState("Đây là danh sách sẽ bị thay đổi hehe !!!")

    const buttonChangeTitle =() =>{
        if(inputValue.trim() !== ""){
            setTitle(inputValue);
            setInputValue('');
        }
    }
    return(
        <>
        <div className="search">
            <h1>{title}</h1>
            <div className="search-container">
                <input type="text" size="80" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Thay thế dòng tiêu đề trên...." />
                <button onClick={buttonChangeTitle}>Thay thế </button>
            </div>
        </div>
        
        </>
    );
};

export default Search;

