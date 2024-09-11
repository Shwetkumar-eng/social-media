import { useContext } from "react";
import { PostList } from "../store/post-list-store";


function Post({post}){
 const {deletePost}= useContext(PostList);
    return(
        <>
        <div class="card post-card" style={{width : "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{post.title}

    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
    Dislikes: {post.reactions.dislikes}</span>
    
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
     
    Likes: {post.reactions.likes}</span>

    
    </h5>
    <p class="card-text">{post.body}</p>
    {post.tags.map(tag => <span key ={tag} className="badge text-bg-primary hastag">{tag}</span>)}
 
  </div>
</div>
        </>
    )
}
export default Post;