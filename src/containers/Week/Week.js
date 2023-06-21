import React from 'react'
import ReactDOM from 'react-dom/client';
import WeekView from './WeekView';
import ContextWrapper from '../../context/Week/ContextWrapper2';
const root = ReactDOM.createRoot(document.getElementById('root'));
export default function Week() {
    const element = (
        <ContextWrapper>
          <WeekView />
        </ContextWrapper>
      )
    root.render(element);
}
