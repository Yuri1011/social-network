import contentBackground from "../../assets/images/steampunk.jpg";

export const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src={contentBackground} alt="img"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}