import c from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogsItems";
import {Messages} from "./Message/Messages";

export const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map((elem) => <DialogsItems id={elem.id} name={elem.name}/>);
    let messagesElements = props.data.messages.map((elem) => <Messages message={elem.message}/>);
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
}