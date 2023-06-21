import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/Month/GlobalContext";
import arrowForward from '../../assets/arrow_forward.svg';
import arrowBack from '../../assets/arrow_back.svg';
import history from '../History';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  function handleOnClick() {
    history.push('/week')
    window.location.reload(false);
  }

  return (
    <header className="flex items-center p-left-right-1 bg-light-blue">
      <h1 className="bold p-left-right-1">Calendar</h1>
      <button onClick={handlePrevMonth}>
        <span className="arrow-button">
          <img src={arrowBack} style={{width: 20, height: 20}}></img>
        </span>
      </button>
      <button onClick={handleReset} className="today-button"> Today </button>
      <button onClick={handleNextMonth}>
        <span className="arrow-button">
          <img src={arrowForward} style={{width: 20, height: 20}}></img>
        </span>
      </button>
      <h2 className="bold p-left-right-1">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      <button onClick={handleOnClick} className="month-button">Month</button>
    </header>
    
  );
}
