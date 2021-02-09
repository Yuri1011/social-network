import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={s.addPost}>
                <textarea/>
                <button>Add Post</button>
            </div>
            <Post message='Hi have are you?' like={15}/>
            <Post message='Good!' like={20}/>
        </div>
    )
}