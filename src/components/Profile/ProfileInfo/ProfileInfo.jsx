import c from "./ProfileInfo.module.css";
import contentBackground from "../../../assets/images/steampunk.jpg";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={c.content}>
                <img src={contentBackground} alt="img"/>
            </div>
            <div className={c.description}>
                ava + description
            </div>
        </div>
    )
}