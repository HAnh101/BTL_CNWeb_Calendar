import React from 'react'
import ReactDOM from 'react-dom/client';
import ContextWrapper from "../../context/Month/ContextWrapper";
import MonthView from "./MonthView";

const root = ReactDOM.createRoot(document.getElementById('root'));
export default function Month() {
    const element = (
        <ContextWrapper>
          <MonthView />
        </ContextWrapper>
      )
    root.render(element);
}
