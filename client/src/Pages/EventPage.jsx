import "../Styles/EventPage.css"
import Event from "../Components/Event"

function EventPage() {
    return(
        <div className="eventPage">

            <div className="details">
                <Event pageCaller="eventPage"></Event>
            </div>

            <div className="Event A">
                <Event pageCaller="eventPage"></Event>
            </div>

            <div className="Event B">
                <Event pageCaller="eventPage"></Event>
            </div>

            <div className="Event C">
                <Event pageCaller="eventPage"></Event>
            </div>

            <div className="map">
                <Event pageCaller="eventPage"></Event>
            </div>

        </div>
    )
}

export default EventPage;
