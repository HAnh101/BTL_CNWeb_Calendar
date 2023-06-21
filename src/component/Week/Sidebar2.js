import React from "react";
import CreateEventButton from "../Week/CreateEventButton2";
import Labels from "../Week/Labels2";
export default function Sidebar() {
  return (
    <aside className="border p-10 ">
      <CreateEventButton />
      <Labels />
    </aside>
  );
}
