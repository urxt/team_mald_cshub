import React, { useEffect, useState } from "react";
import {Circle} from 'react-shapes';
import "../Styles/EventSidebar.css";

function Event(props) {

    const [eventData, setEventData] = useState({
        name: "Test",
        headCount: 0,
        time: Date(),
        building: "Bergeron Centre",
        location: [0.0,0.0], // Change to specific location class
        limit: 0,
        isLimit: true,
        students: [],

        pageCaller: props.pageCaller
    });

    function addStudent(student) {
        eventData.students.concat(student);
    }

    function notifyStudents() {
        // Write class to give notification to students
        // Maybe consider message page
        // String for message, header
    }

    if (eventData.pageCaller === "eventPage") { // Make this be for EventPage
        return(
            <div>
                <h1>
                    {eventData.name}
                </h1>
                <nav>
                    <button>
                        
                    </button>
                    
                </nav>
            </div>
        )
    } else if (eventData.pageCaller === "navigateMap") {
        // Draw the location pin, pass in coordinates
        // Draw
    } else if (eventData.pageCaller === "eventSidebar") {
        return(
        <div className="eventSummary">
            <div className="eventDetails">
                <h2>{eventData.name}</h2>
                <h3>{eventData.building}</h3>
            </div>
            <Circle r={30} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
    
        </div>
        
        )
        }
}

export default Event