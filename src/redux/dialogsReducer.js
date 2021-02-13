const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage;
            break;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.messages.push({id: 4, message: newMessage});
            state.newMessageText = '';
            break;
    }
    return state;
}

export let updateNewMessageTextCreated = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextMessage: text
    }
}
export let sendMessageCreated = () => {
    return {
        type: SEND_MESSAGE
    }
}