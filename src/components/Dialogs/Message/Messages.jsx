import c from "./Messages.module.css";

export const Messages = (props) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    )
};