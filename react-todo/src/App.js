import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from './component/Todo';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Board from "./component/Board";
function App (){
    return (
        <Router>
            <div>
                <Header />
                <hr />
                <Routes>
                    <Route path="/todo" element={<Todo/>} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                </Routes>
                <Routes>
                    <Route path="/board" element={<Board/>} />
                </Routes>

                <Routes>
                    <Route path="/about" element={<About/>} />
                </Routes>
                <Footer></Footer>
            </div>
        </Router>
    )
}
export default App;