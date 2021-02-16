const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Mari'},
        {id: 2, name: 'Sergei'},
        {id: 3, name: 'Lyubov'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hay'},
        {id: 3, message: 'Salyut'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newTextMessage
            };
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newMessage}],
                newMessageText: ''
            }
        default:
            return state;
    }
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