import { Routes, Route } from "react-router-dom";
import About from "./pages/site/About";
import Contacts from "./pages/site/Contacts";

import Home from "./pages/site/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default App;
