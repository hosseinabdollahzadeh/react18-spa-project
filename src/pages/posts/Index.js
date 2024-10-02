import {useEffect, useState} from "react";
import PostsList from "../../components/posts/List";
import {Link} from "react-router-dom";

const IndexPost = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, []);
    return (
        <>
            <h2>Posts:</h2>
            <div>
                <Link className="btn btn-dark" to="/posts/create"> Create Post</Link>
            </div>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {posts && <PostsList posts={posts}/>}
        </>
    )
}

export default IndexPost