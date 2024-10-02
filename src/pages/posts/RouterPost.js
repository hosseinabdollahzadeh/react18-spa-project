import {Route, Routes} from "react-router-dom";
import IndexPost from "./Index";

const RouterPost = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPost />} />
        </Routes>
    )
}

export default RouterPost