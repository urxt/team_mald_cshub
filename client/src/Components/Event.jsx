import React, { useEffect, useState } from "react";

function Event(props) {

    const [eventData, setEventData] = useState({
        name: "Test",
        headCount: 0,
        time: Date,
        location: "", // Change to specific location class
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

    if (true) { // Make this be for EventPage
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
    }
}

export default Event