import React from "react";
import CreateEventButton from "../Month/CreateEventButton";
import Labels from "../Month/Labels";
export default function Sidebar() {
  return (
    <aside className="border p-10">
      <CreateEventButton />
      <Labels />
    </aside>
  );
}
