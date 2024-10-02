import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ShowUser = () => {
    const {userId} = useParams();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [userId]);
    return (
        <>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {user && <div className="col-md-8">
                <div key={user.id} className="card">
                    <div className="card-header fw-bold">
                        <span>{user.name}</span>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username: {user.username}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">Phone: {user.phone}</li>
                    </ul>
                </div>
            </div>}
        </>
    )
}

export default ShowUser