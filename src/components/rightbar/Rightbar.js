import "./rightbar.css"

export default function Rightbar() {
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/bday.png" alt="" />
                    <span className="birthdayText">
                        <b>Ray Holster</b> and <b>1 other friend</b> have birhday today.
                    </span>   
                </div>
            </div>
        </div>
    )
} 