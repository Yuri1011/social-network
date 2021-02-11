import c from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogsItems";
import {Messages} from "./Message/Messages";
import {sendMessageCreated, updateNewMessageTextCreated} from "../../redux/dialogsReducer";

export const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((elem) => <DialogsItems id={elem.id} name={elem.name}/>);
    let messagesElements = state.messages.map((elem) => <Messages message={elem.message}/>);
    let newMessageText = state.newMessageText;

    let newMessageTextOnchange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewMessageTextCreated(text));
    }
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreated());
    }
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageText} onChange={newMessageTextOnchange}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}