import React, {useState, useContext, useEffect} from 'react'
import { getWeek } from '../../util'
import Week from '../../component/Week/Week'
import CalendarHeader from '../../component/Week/CalendarHeader2'
import GlobalContext from '../../context/Week/GlobalContext2'
import Sidebar from '../../component/Week/Sidebar2'
import EventModal from '../../component/Week/EventModal2'

export default function Day() {
  const [currenWeek, setCurrentWeek] = useState(getWeek());
  const {weekIndex, showEventModal} = useContext(GlobalContext)
  useEffect(() => {
    setCurrentWeek(getWeek(weekIndex));
  }, [weekIndex])
  return (

    <React.Fragment>
    {showEventModal && <EventModal />}
    
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      
      <div className="flex flex-1">
        <Sidebar />
        <Week week={currenWeek} />
      </div>
    </div>
      
    </React.Fragment>
  )
}
