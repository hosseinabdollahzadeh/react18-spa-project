const UsersList = ({users}) => {
    return (
        <>
            {users.map(user => (
                <div className="col-md-4">
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
                </div>
            ))}
        </>
    )
}

export default UsersList