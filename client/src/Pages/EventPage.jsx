import "../Styles/EventPage.css"
import Event from "../Components/Event"

function EventPage() {
    return(
        <div className="eventPage">
            <div className="details">
                <Event pageCaller="eventPage"></Event>
            </div>
            <div className="map">
            </div>
        </div>
    )
}

export default EventPage