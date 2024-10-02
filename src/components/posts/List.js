import {Link} from "react-router-dom";

const PostsList = ({posts}) => {
    return (
        <>
            {posts.map(post => (
                <div className="col-md-4" key={post.id}>
                    <div className="card">
                        <div className="card-header fw-bold">
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PostsList