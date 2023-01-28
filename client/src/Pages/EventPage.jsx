import "../Styles/EventPage.css"
import Event from "../Components/Event"
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

function EventPage() {
    return(
        <div className="eventPage">
            <div className="details">
                <Event pageCaller="eventPage"></Event>
            </div>
            <div className="map">
            <Circle r={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
            </div>
        </div>
    )
}

export default EventPage