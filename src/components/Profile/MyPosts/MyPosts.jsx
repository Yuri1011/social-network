import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import * as React from "react";

export const MyPosts = (props) => {

    let postsElements = props.posts.map((elem) => <Post message={elem.message} like={elem.like} key={elem.id}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={c.myPost}>
            <h4>
                My posts
            </h4>
            <div className={c.addPost}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}