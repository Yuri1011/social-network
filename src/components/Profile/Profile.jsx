import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}