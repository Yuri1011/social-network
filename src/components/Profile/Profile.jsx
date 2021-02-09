import contentBackground from "../../assets/images/steampunk.jpg";
import c from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={c.content}>
                <img src={contentBackground} alt="img"/>
            </div>
            <div>
                ava + description
            </div>
           <MyPosts/>
        </div>
    )
}