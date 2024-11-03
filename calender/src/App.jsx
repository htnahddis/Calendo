import React, { useState, useContext, useEffect } from "react";
import "./App.css";

import getMonth from "./components/GetMonth"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventsModal from "./components/EventsModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex,showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal &&  <EventsModal/> }
     
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;