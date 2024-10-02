import {Route, Routes} from "react-router-dom";
import IndexPost from "./Index";
import ShowPost from "./Show";

const RouterPost = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPost />} />
            <Route path=":postId" element={<ShowPost />} />
        </Routes>
    )
}

export default RouterPost