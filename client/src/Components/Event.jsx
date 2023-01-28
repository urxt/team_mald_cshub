import React, { useEffect, useState } from "react";
import "../Styles/EventSidebar.css";

function Event(props) {

    const [eventData, setEventData] = useState({
        name: "Test",
        headCount: 0,
        time: Date(Date.now),
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
                <p>
                    Are confirmed coming. Max capacity
                </p>
                <p>
                    Comfortable
                </p>
                <p>
                    Time
                </p>
                <p>
                    Location
                </p>
                <button className="joinBtn">Join</button>
                
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
                <p>{eventData.time}</p>
                <p>{eventData.building}</p>
            </div>
            
    
        </div>
        
        )
        }
}

export default Event