import c from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogsItems";
import {Messages} from "./Message/Messages";

export const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((elem) => <DialogsItems id={elem.id} key={elem.id} name={elem.name}/>);
    let messagesElements = state.messages.map((elem) => <Messages message={elem.message} key={elem.id}/>);
    let newMessageText = state.newMessageText;

    let newMessageTextOnchange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }
    let onSendMessage = () => {
        props.sendMessage();
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
                        <button onClick={onSendMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}