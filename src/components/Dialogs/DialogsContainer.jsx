import {Dialogs} from "./Dialogs";
import {sendMessageCreated, updateNewMessageTextCreated} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreated(text));
        },
        sendMessage: () => {
            dispatch(sendMessageCreated());
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);