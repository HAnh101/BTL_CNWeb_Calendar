import React, { useContext, useState } from "react";
import GlobalContext from "../../context/Month/GlobalContext";
import deleteEvent from "../../assets/delete.svg"
import close from "../../assets/close.svg"
import check from "../../assets/check.svg"

const labelsClasses = [
  "Not-completed",
  "Completed",
];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed flex justify-center items-center">
      <form className="bg-white rounded-lg w-1/4">
        <header className="flex justify-between items-center bg-gray">
        <div>Event</div>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="delete-button"
              >
                <img src={deleteEvent} style={{width: 20, height: 20}}></img>
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="close-button">
                <img src={close} style={{width: 20, height: 20}}></img>
              </span>
            </button>
          </div>
        </header>
        <div className="Event-content">
          <div className="grid row-gap-10 ">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="title-name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>Schedule: {daySelected.format("dddd, MMMM DD")}</p>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="description-name"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex col-gap-10"> Bookmark: 
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass} w-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <img src={check} style={{width: 20, height: 20}}></img>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue text-white border"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
