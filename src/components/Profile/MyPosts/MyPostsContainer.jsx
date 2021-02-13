import {addPostActionCreated, updateNewPostTextCreated} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreated(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreated());
        }
    }
}
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
