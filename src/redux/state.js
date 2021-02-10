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
            ]
        }
    },
    getState(){return this._state},
    _callSubscriber() {
    },
    addPost() {
        let newPost = {id: 2, message: this._state.profilePage.newPostText, like: 1};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
       this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
