import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/Week/GlobalContext2";
import arrowForward from '../../assets/arrow_forward.svg';
import arrowBack from '../../assets/arrow_back.svg';
import history from '../History';

export default function CalendarHeader() {
  const { weekIndex, setWeekIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setWeekIndex(weekIndex - 7);
  }
  function handleNextMonth() {
    setWeekIndex(weekIndex + 7);
  }
  function handleReset() {
    setWeekIndex(
      weekIndex === dayjs().date()
        ? weekIndex + Math.random()
        : dayjs().date()
    );
  }
  function handleOnClick() {
    history.push('/')
    window.location.reload(false);
  }
  return (
    <header className="flex items-center p-left-right-1 bg-light-blue">
      <h1 className="bold p-left-right-1">Calendar</h1>
      <button onClick={handlePrevMonth}>
        <span className="arrow-button">
          <img src={arrowBack} style={{width: 10, height: 10}}></img>
        </span>
      </button>
      <button onClick={handleReset} className="today-button"> Today </button>
      <button onClick={handleNextMonth}>
        <span className="arrow-button">
          <img src={arrowForward} style={{width: 10, height: 10}}></img>
        </span>
      </button>
      <h2 className="bold p-left-right-1">
        {dayjs(new Date(dayjs().year(), dayjs().month(), weekIndex)).format("YYYY")}
      </h2>
      <button onClick={handleOnClick} className="week-button">Week</button>
    </header>
  );
}
