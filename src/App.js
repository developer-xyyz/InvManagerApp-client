import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import ItemsView from "./components/item/ItemsView";
import Home from "./Home";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from "./components/item/AddItem";
import EditItem from "./components/item/EditItem";
import ItemProfile from "./components/item/ItemProfile";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`container mt-5 ${darkMode ? "dark-mode" : ""}`}>
      <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-items" element={<ItemsView />}></Route>
          <Route exact path="/add-items" element={<AddItem />}></Route>
          <Route exact path="/edit-item/:id" element={<EditItem />}></Route>
          <Route exact path="/view-item/:id" element={<ItemProfile />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
