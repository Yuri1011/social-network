import c from "./ProfileInfo.module.css";
import contentBackground from "../../../assets/images/steampunk.jpg";
import {Preloader} from "../../Preloader/Preloader";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={c.content}>
                <img src={contentBackground} alt="img"/>
            </div>
            <div className={c.description}>
                <img src={props.profile.photos.small} alt="ava"/>
                ava + description
            </div>
        </div>
    )
}