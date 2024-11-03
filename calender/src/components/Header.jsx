import React, { useContext, useState } from 'react';
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

const Header = ()=>{
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)
   function handlePrevMonth (){
    setMonthIndex(monthIndex - 1);
    
   }
   function handleNextMonth (){
    setMonthIndex(monthIndex  + 1);
    
   }
   function handleReset() {
    setMonthIndex(monthIndex === dayjs().month()? monthIndex + Math.random():dayjs().month());
   }
   
   return<>
    <header className='px-4 py-2 flex  items-center'>
        <img src="../public/logo.png" alt="" className='mr-2 w-22 h-16'/>
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
    <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>
    <button onClick={handlePrevMonth}><span className="cursor-pointer text-gray-600 mx-2" ><FaChevronLeft /></span></button>
    <button onClick={handleNextMonth}><span className=" cursor-pointer text-gray-600 mx-2"><FaChevronRight /></span></button>
    <h2 className = "ml-4 text-xl text-gray-600 font-bold">
    {dayjs().month(monthIndex).format("MMMM YYYY")}</h2>

    </header>
    </>
}

export default Header;