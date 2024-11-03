import React, { useContext } from 'react';
import { FaPlus } from "react-icons/fa";
import GlobalContext from '../context/GlobalContext';


 function CreateEventBtn() {

    const {setShowEventModal} = useContext(GlobalContext)
    return (
        <button onClick= {()=>{
            setShowEventModal(true)
        }}
        className="border p-2 rounded-full flex items-center shadow-md hover:shadow-lg">
            <p className="w-7 h-7  flex justify-center items-center" ><FaPlus/> </p>
            <span className="pl-3 pr-7">Create</span>
        </button>
    );
}

export default CreateEventBtn;