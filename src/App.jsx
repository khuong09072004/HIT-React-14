import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Ex2 from "./components/Ex2/Ex2";
import Ex1 from "./components/Ex1/Ex1";
import Card1 from "./components/Card1/Card1"
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Search from "./components/Search/Search";
import CardLists from './components/CardsLists/CardLists';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import PostImg from './components/PostImg/PostImg';
import Usefer from './components/Usefer/Usefer';
import UseMemo from './components/UseMemo/UseMemo';
import CreactMemo from './components/ReactMemo/ReactMemo'
import ReactMemo from './components/ReactMemo/ReactMemo';
import TodoApp from './components/TodoApp/TodoApp';
import Blog from './components/Blog/Blog';
import Counter from './components/Counter/Counter';
import TodoApp2 from './components/TodoApp2/TodoApp2';

const initialState=0;

  const UP_COUNT ='up';
  const DOWN_COUNT ='down';
  const NHAN_COUNT='nhan';
  const CHIA_COUNT='chia';

  const reducer=(state,action)=>{
    switch(action.type)
    {
      case UP_COUNT:
        return state+1;
      case DOWN_COUNT:
        return state-1;
      case NHAN_COUNT:
        return state*state;
      case CHIA_COUNT:
        return Math.floor(state / action.divideBy);

        default:
          throw new Error("invalid action")
    }

  }
const App = () => {

  const [count,dispatch]=useReducer(reducer,initialState);
  const [divideBy,setDivideBy]=useState(1);

  const handleChange = (e) => {
    // Cập nhật giá trị của số chia khi người dùng thay đổi input
    setDivideBy(e.target.value);
  };
  // const[postData,setPost] =useState([])

  // const [count,setCount]=useState(0);


  


  


  // useEffect(()=>{
    
  //   const fetchData =async () => {
  //     const data =await axios.get("https://picsum.photos/v2/list?page=2&limit=8")
  //     console.log(data)
  //   }

  //   fetch(apiUrl)
  //     .then((response)=>{
  //       if(!response.ok){
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((postData) => {
  //       // setPost(postData)
  //       console.log("User Data:",postData);
  //     })
  //     .catch((error)=>{
  //       console.error("Error:",error);
  //     });

  //   fetchData();



  // },[]);
  
  return (
   <>
   <h1>{count}</h1>

   <button onClick={()=>dispatch({ type: UP_COUNT })}>up</button>
   <button onClick={()=>dispatch({ type: DOWN_COUNT })}>down</button>
   <button onClick={()=>dispatch({ type: NHAN_COUNT })}>nhan</button>
   <input type="text" value={divideBy} onChange={handleChange} />
   <button onClick={()=>dispatch({ type:CHIA_COUNT, divideBy: divideBy })}>Chia</button>
   <TodoApp2/>
   
   {/* <PostImg/> */}
  
   {/* <UseMemo/> */}
   {/* <TodoApp/> */}
   {/* <Counter/> */}

 

   </>
  )
}

export default App
