import React from 'react';
import c from "./Users.module.css";
import avatar from "../../assets/images/avatar.jpg";
import {NavLink} from "react-router-dom";

export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && c.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div className={c.container} key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile' + u.id}>
                            <img className={c.avatar} src={u.photos.small != null ? u.photos.small : avatar}
                                 alt="avatar"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                    </div>
                </div>
                <div className={c.dialog}>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>
                <div>
                    <div>
                        {'u.location.country'}
                    </div>
                    <div>
                        {'u.location.city'}
                    </div>
                </div>

            </div>)}
        </div>
    )
}