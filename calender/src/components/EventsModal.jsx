import React, { useContext, useState } from "react";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import GlobalContext from "../context/GlobalContext";
import { ImParagraphLeft } from "react-icons/im";


export default function EventsModal() {
  const { setShowEventModal, daySelected ,dispatchedEvent, selectedEvent } = useContext(GlobalContext);
  const [title,setTitle] = useState(selectedEvent? selectedEvent.title : "");
  const [description,setDescription] = useState(selectedEvent? selectedEvent.description : "");
 

  

  function handleSubmit(e) {
    e.preventDefault();
  
    const calendarEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      id:selectedEvent? selectedEvent.id : Date.now(),
    };
    if(selectedEvent){
      dispatchedEvent({ type: "update", payload: calendarEvent });
    }
    else{
      dispatchedEvent({ type: "push", payload: calendarEvent });
    }
    
    setShowEventModal(false);
  
  }


  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className=" text-gray-400">
            <RxHamburgerMenu />
          </span>
          <div className="flex gap-5 "
           
          >
            <div
            onClick={()=>{
              dispatchedEvent({type:"delete", payload: selectedEvent});
              setShowEventModal(false);
            }}>
              {selectedEvent && (
                <span className=" text-red-600 cursor-pointer">
                <MdDelete />
              </span>
              )}
              
            </div>


            <div className=" text-gray-400"  onClick={() => {
              setShowEventModal(false);
            }}>
              <MdCancel />
            </div>


          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2
              border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"   
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
            <span className=" text-gray-400 flex items-center mb-1">
            <FaRegClock />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className=" text-gray-400 flex items-center mb-1">
            <ImParagraphLeft  />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600  pb-2 w-full border-b-2
              border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"   
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
            />
          
          </div>
        </div>

      
<footer className="flex justify-end border-t p-3 mt-5">
  <button
    type="submit"
    onClick={handleSubmit}
    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
  >
   Save
  </button>
</footer> 
      </form>
    </div>
  );
}
