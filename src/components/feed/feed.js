import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
    return(
        <div className="feed">
            <div className="feedWrapper">
                <div style={{height:"0%"}}><Share /></div>

            </div>
        </div>
    )
}