import React from 'react';


const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalenderMonth:0,
  setSmallCalenderMonth:  (index) => {},
  daySelected:0,
  setDaySelected:  (index) => {},
  showEventModal: false,
  setShowEventModal: ()=>{},
  dispatchedEvent: ({type,payload})=>{},
  savedEvents: [],
  selectedEvent: null ,
  setSelectedEvent: ()=>{},
});

export default GlobalContext;