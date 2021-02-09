import c from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a href="#">Profile</a>
            </div>
            <div className={c.item}>
                <a href="#">Messages</a>
            </div>
            <div className={c.item}>
                <a href="#">News</a>
            </div>
            <div className={c.item}>
                <a href="#">Music</a>
            </div>
            <div className={c.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}