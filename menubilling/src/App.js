import Navbar from "./Navbar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import MyOrder from "./pages/MyOrder";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
