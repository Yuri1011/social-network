const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state, action) => {

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