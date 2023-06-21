import React, { useContext } from "react";
import GlobalContext from "../../context/Month/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="bold">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`text-${lbl} cursor-pointer`}
          />
          <span className={`bg-${lbl}`}>{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
