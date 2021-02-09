import c from './Dialogs.module.css'
import {DialogsItems} from "./DialogItem/DialogsItems";
import {Messages} from "./Message/Messages";

export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Mari'},
        {id: 2, name: 'Sergei'},
        {id: 3, name: 'Lyubov'}
    ]
    let messages = [
        {message: 'Hello'},
        {message: 'Hay'},
        {message: 'Salyut'}
    ]
    let dialogsElements = dialogs.map((elem) => <DialogsItems id={elem.id} name={elem.name}/>);
    let messagesElements = messages.map((elem) => <Messages message={elem.message}/>);
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