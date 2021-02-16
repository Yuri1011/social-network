const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi have are you?', like: 15}
    ],
    newPostText: ''
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 2, message: state.newPostText, like: 1};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newTextPost
            }
        default:
            return state;
    }
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