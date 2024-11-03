import React from 'react';
import CreateEventBtn from './CreateEventBtn';
import SmallCalender from './SmallCalender';
const Sidebar = ()=>{
    return<>
     <aside className="border p-5 w-64">
            <CreateEventBtn />
            <SmallCalender/>
        </aside>
    </>
}


export default Sidebar;
