import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog}>
                    <NavLink to={'/dialogs/1'} activeClassName={c.active}>Mari</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to={'/dialogs/2'} activeClassName={c.active}>Sergei</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to={'/dialogs/3'} activeClassName={c.active}>Lyubov</NavLink>
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>
                    Hello!
                </div>
                <div className={c.message}>
                    Hay!
                </div>
                <div className={c.message}>
                    Salute!
                </div>
            </div>
        </div>
    )
}