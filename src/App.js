import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import { Main } from "./pages/main/main";
import { SignIn } from "./pages/signIn/signIn";
import { Temp } from "./pages/temp/temp";

//components
import { Header } from "./components/header/header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/main" />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/temp" element={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
