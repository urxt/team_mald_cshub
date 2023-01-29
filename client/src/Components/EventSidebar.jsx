import Event from "../Components/Event";
import { useEffect, useState } from "react";
import axios from "axios";

function EventSidebar() {

    const [eventsList, setEventsList] = useState([]);
    const test = 1;

    useEffect(() => {
        axios.get("http://localhost:3001/all-events").then((response) => {
            console.log(response.data);
            setEventsList(response.data);
            console.log(eventsList);
        })
    }, [test]);

    return(
        <div className="eventSidebar">
            {/* <Event pageCaller="eventSidebar"></Event> */}
          {  eventsList.map((row) => {
                <div>
                    <h1>{row.eventName}</h1>
                </div>
            }) }
            

        </div>

    )
}

export default EventSidebar