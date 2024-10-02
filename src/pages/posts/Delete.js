import {useState} from "react";
import Swal from "sweetalert2";

const DeletePost = ({postId}) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleDelete = () => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        })
            .then((res) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Thanks!",
                    text: `Post ${postId} deleted successfully`,
                    icon: "success",
                    confirmButtonText: "Ok"
                });
            }).catch(err => {
            setLoading(false)
            setError(err.message)
            Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
                confirmButtonText: "Ok"
            });
        });
    }
    return (
        <>
            <button onClick={handleDelete} className="btn btn-sm btn-danger me-4">
                {loading && <div className="spinner-border"></div>}
                Delete
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
        </>
    )
}

export default DeletePost