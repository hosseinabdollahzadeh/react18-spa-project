import {Route, Routes} from "react-router-dom";
import IndexUser from "./Index";
import ShowUser from "./Show";

const RouterUser = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexUser />} />
            <Route path="/:userId" element={<ShowUser />} />
        </Routes>
    )
}

export default RouterUser