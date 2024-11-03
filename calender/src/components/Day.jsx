import dayjs from "dayjs";
import React, { useContext, useState,useEffect } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIdx }) {
  const { setDaySelected, setShowEventModal, savedEvents , setSelectedEvent } =
    useContext(GlobalContext);

  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col"
    onClick={() => {
        setDaySelected(day);
        setShowEventModal(true);
      }}>
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>

      <div
      
      >
        {dayEvents.map((evt, idx) => (
          <div
            className={`bg-blue-400 p-1 mr-3 text-gray-600 text-sm mb-1 rounded truncate`}
            key={idx}
            onClick={()=>{
                setSelectedEvent(evt)
            }}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
