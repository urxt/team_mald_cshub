import React, { useEffect, useState } from "react";

function Event(props) {

    const [eventData, setEventData] = useState({
        pageCaller: props.pageCaller,
        name: "Test",
        headCount: 0,
        time: Date(),
        location: [0.0,0.0], // Change to specific location class
        limit: 0,
        isLimit: true,
        students: []
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
    }
}

export default Event