import {Link} from "react-router-dom";

const PostsList = ({posts}) => {
    return (
        <>
            {posts.map(post => (
                <div className="col-md-4" key={post.id}>
                    <div className="card">
                        <div className="card-header fw-bold">
                            <span>{post.title}</span>
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