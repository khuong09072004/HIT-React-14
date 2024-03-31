import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Ex2 from "./component/Ex2/Ex2";
import Ex1 from "./component/Ex1/Ex1";
import Card1 from "./component/Card1/Card1"
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Search from "./component/Search/Search";
import CardLists from './component/CardsLists/CardLists';
import Footer from './component/Footer/Footer';
import axios from 'axios';
import PostImg from './component/PostImg/PostImg';

const App = () => {
  // const[postData,setPost] =useState([])
  


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
   
   <PostImg/>

 

   </>
  )
}

export default App
