import React, { useState, useContext, useEffect } from "react";
import { getMonth } from '../../util'

import CalendarHeader from "../../component/Month/CalendarHeader";
import Sidebar from "../../component/Month/Sidebar";
import Month from "../../component/Month/Month";
import GlobalContext from "../../context/Month/GlobalContext";
import EventModal from "../../component/Month/EventModal";

export default function MonthView() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
    {showEventModal && <EventModal />}

    <div className="h-screen flex flex-col">
      <CalendarHeader />

      <div className="flex flex-1">
        <Sidebar />
        <Month month={currenMonth} />
      </div>
    </div>
    </React.Fragment>
  );
}
