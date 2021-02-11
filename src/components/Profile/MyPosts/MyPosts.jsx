import c from './MyPosts.module.css';
import {Post} from "./Post/Post";
import * as React from "react";
import {addPostActionCreated, updateNewPostTextCreated} from "../../../redux/profileReducer";


export const MyPosts = (props) => {

    let postsElements = props.posts.map((elem) => <Post message={elem.message} like={elem.like}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreated());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreated(text));
    }
    return (
        <div className={c.myPost}>
            <h4>
                My posts
            </h4>
            <div className={c.addPost}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}