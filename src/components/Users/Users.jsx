import React from 'react';
import c from "./Users.module.css";
import avatar from "../../assets/images/avatar.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true, headers: {
                                            "API-KEY": "830641ed-510b-42e3-bd30-9338086d8ee0"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true, headers: {
                                        "API-KEY": "830641ed-510b-42e3-bd30-9338086d8ee0"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                })
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