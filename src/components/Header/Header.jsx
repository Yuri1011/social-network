import c from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={c.header}>
            <div className={c.block}>
                <div className={c.loginBlock}>
                    {props.isAuth ? props.login
                        : < NavLink to={'/login'}> Login < /NavLink>
                    }
                </div>
            </div>
        </header>
    )
}