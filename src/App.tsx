import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn"; // Correct spelling
import ShoppingBagMobile from "./components/elements/ShoppingBag/ShoppingBagMobile";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ShoppinBagMobile" element={<ShoppingBagMobile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
