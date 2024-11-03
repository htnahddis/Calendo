import React from "react";
import Day from "./Day";

export default function Month({ month }) {
  return (
    <>
  
  <div className="flex-1 grid grid-rows-5 grid-cols-7 ">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day key={idx} day={day} rowIdx={i}/>
          ))}
        </React.Fragment>
      ))}
    </div>
 
    </>
    
  
  );
}
