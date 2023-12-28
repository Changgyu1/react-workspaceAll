import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

const Home = () => <div>홈페이지</div>;
export default function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}
