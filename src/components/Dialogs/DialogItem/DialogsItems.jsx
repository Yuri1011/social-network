import c from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";

export const DialogsItems = (props) => {

    return (
        <div className={c.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
}