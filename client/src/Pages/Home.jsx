import React from 'react';
import EventPage from './EventPage';
import EventSidebar from '../Components/EventSidebar';
import CreateEvent from './CreateEvent';

function Home() {
  return (
    <div>
        <EventSidebar></EventSidebar>
        <EventPage></EventPage>
    </div>
  )
}

export default Home