import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import RouterUser from "./pages/users/RouterUser";
import ShowUser from "./pages/users/Show";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users/:userId" element={<ShowUser/>}/>
                <Route path="/users" element={<RouterUser/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
