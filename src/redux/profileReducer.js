const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 2, message: state.newPostText, like: 1};
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newTextPost;
            break;
    }
    return state;
}

export let addPostActionCreated = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextCreated = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTextPost: text
    }
}