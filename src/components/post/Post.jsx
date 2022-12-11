// import "./post.css";
// import { MoreVert } from "@mui/icons-material";

// export default function Post({ post }) {
//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img className="postProfileImg" src="assets/img1.png" alt="" />
//             <span className="postUsername">John Doe</span>
//             <span className="postDate">15 mins ago</span>
//           </div>
//           <div className="postTopRight">
//             <MoreVert />  
//           </div>
//         </div>
//         <div className="postCenter">
//           <span className="postText">First Post</span>
//           <img className="postImg" src="assets/1.jpeg" alt="" />
//         </div>
//         <div className="postBottom">
//           <div className="postBottomLeft">
//             <img className="likeIcon" src="assets/like.png" alt="" />
//             <img className="likeIcon" src="assets/heart.png" alt="" />
//             <span className="postsLikeCounter">50 people liked it</span>
//           </div>
//           <div className="postBottomRight">
//             <img className="likeIcon" src="assets/comment.png" alt="" />
//             <span className="postCommentText">15 people commented here</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}