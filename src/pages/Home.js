import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ipsum possimus quaerat quos ut. Atque blanditiis, delectus doloremque ducimus earum, et excepturi facere fugit in laboriosam laborum maxime numquam repudiandae.
                        <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda autem blanditiis commodi ducimus eaque est fugiat modi nemo, nesciunt omnis quis quos repellendus suscipit veniam voluptas. Iste, molestiae.
                    </p>
                    <Link className="btn btn-dark" to="/users">Users</Link>
                    <Link className="btn btn-light ms-3" to="/posts">Posts</Link>
                </div>
            </div>
        </div>
    )
}

export default Home