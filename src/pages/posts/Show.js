import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ShowPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [postId]);
    return (
        <div className="container mt-5">
            <div className="row g-3">
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {post && <div className="col-md-8">
                    <div key={post.id} className="card">
                        <div className="card-header fw-bold">
                            <span>{post.title}</span>
                        </div>
                        <ul className="card-body">
                            {post.body}
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ShowPost