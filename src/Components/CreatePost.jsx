import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

function CreatePost(){
const {addPost}=useContext(PostList);

const userIdElement=useRef();
const TitleElement=useRef();
const bodyElement=useRef();
const  reactionsElement=useRef();
const tagsElement=useRef();

const handleSubmit=(event)=>{
  event.preventDefault();

const userId=userIdElement.current.value;
const post=TitleElement.current.value;
const body=bodyElement.current.value;
const reactions=reactionsElement.current.value;
const tags=tagsElement.current.value.split(/(\$+)/);
addPost(userId,post,body,reactions,tags);

}

    return(
        <>
        <form className="create-post" onSubmit={handleSubmit}>
        <div class="mb-3">
    <label for="id" class="form-label">userId</label>
    <input type="text" ref={userIdElement} class="form-control" id="user" aria-describedby="emailHelp"/>
  </div> 

  <div class="mb-3">
    <label for="Title" class="form-label">Post Title</label>
    <input type="text" ref={ TitleElement} class="form-control" id="title" aria-describedby="emailHelp"/>
  </div> 

  <div class="mb-3">
    <label for="Body" class="form-label">Post content</label>
    <input type="text" ref={ bodyElement} class="form-control" id="body" aria-describedby="emailHelp"/>
  </div>  
  
  <div class="mb-3">
    <label for="reactions" class="form-label">Reactions</label>
    <input type="text" ref={reactionsElement} class="form-control" id="reactions" aria-describedby="emailHelp"/>
  </div> 

  <div class="mb-3">
    <label for="tags" class="form-label">Tags</label>
    <input type="text" ref={tagsElement} class="form-control" id="tag" aria-describedby="emailHelp"/>
  </div> 
  
  <button type="submit" class="btn btn-primary">Post</button>
</form>
        </>
    )
}
export default CreatePost;