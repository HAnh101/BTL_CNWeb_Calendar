import React, { useContext } from "react";
import GlobalContext from "../../context/Week/GlobalContext2";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border rounded-full flex items-center"
    >
      Create
    </button>
  );
}
