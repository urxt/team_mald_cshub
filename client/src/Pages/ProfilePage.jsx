function ProfilePage() {
    return(
        <div className="profilePage">
            
            <div className="mainProfile">
                <p>Name</p>
                <p>20 years old</p>
                <div className="programDetails">
                 <p>Computer Engineering</p>
                 <p>2nd year</p>
                </div>

            </div>
            <div className="otherStuff">
                <div className="friends"></div>
                <div className="userEvents"></div>
                <div className="newConnections"></div>
            </div>

        </div>
        
    )
}

export default ProfilePage