import c from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postsElements = props.posts.map((elem) => <Post message={elem.message} like={elem.like}/>)
    return (
        <div className={c.myPost}>
            <h4>
                My posts
            </h4>
            <div className={c.addPost}>
                <textarea/>
                <button>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}