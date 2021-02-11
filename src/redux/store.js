import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi have are you?', like: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Mari'},
                {id: 2, name: 'Sergei'},
                {id: 3, name: 'Lyubov'}
            ],
            messages: [
                {message: 'Hello'},
                {message: 'Hay'},
                {message: 'Salyut'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
