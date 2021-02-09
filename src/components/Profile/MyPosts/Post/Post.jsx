import s from "./Post.module.css";
import avatar from "../../../../assets/images/avatar.jpg";

export const Post = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src={avatar} alt="avatar"/>
                {props.message}
                <div>
                    <span>
                        like
                        <span> {props.like} </span>
                    </span>
                </div>
            </div>
        </div>
    )
}