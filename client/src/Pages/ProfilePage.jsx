import "../Styles/ProfilePage.css";

function ProfilePage() {
    return(
        <div className="profilePage">
            
            <div className="mainProfile">
                <img src="../logo.svg"></img>
                    <div className="profileDetais">
                    <p>Name</p>
                        <p>20 years old</p>
                        <div className="programDetails">
                         <p>Computer Engineering</p>
                         <p className="year">2nd year</p>
                        </div>
                </div>

            </div>
            <div className="otherStuff">
                <div className="friends">
                    <h1>Friends</h1>
                    <div className="friendImg">
                        <img src="../logo.svg"></img>
                        <img src="../logo.svg"></img>
                        <img src="../logo.svg"></img>
                        <img src="../logo.svg"></img>
                    </div>
                </div>
                <div className="userEvents">
                    <h1>My Meetups</h1>
                    <img src="../logo.svg"></img>
                </div>
                <div className="newConnections">
                    <h1>New Connections</h1>
                    <div className="friendImg">
                        <img src="../logo.svg"></img>
                        <img src="../logo.svg"></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProfilePage
