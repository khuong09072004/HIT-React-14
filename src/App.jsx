import { useState } from 'react'
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
const App = () => {
  
  return (
   <>
   <Header/>
   <Banner/>
   <Search/>
   <CardLists/>
   <Footer/>
 

   </>
  )
}

export default App
