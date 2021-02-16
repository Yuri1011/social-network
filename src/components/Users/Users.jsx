import React from "react";
import c from './Users.module.css'
import axios from "axios";
import avatar from '../../assets/images/avatar.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.getUsers}>Get Users</button>
                </div>
                {this.props.users.map(u => <div className={c.container} key={u.id}>
                    <div>
                        <div>
                            <img className={c.avatar} src={u.photos.small != null ? u.photos.small : avatar}
                                 alt="avatar"/>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users;