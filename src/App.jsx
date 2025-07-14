import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import SideNavbar from "./pages/SideNavbar/SideNavbar";
import Add from "./component/Add/Add";
import List from "./component/List/List";
import Order from "./component/Order/Order";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const url = "http://localhost:4000";

  return (
    <>
      <ToastContainer />
      <Navbar />
      <br />

      <div className="main-container">
        <SideNavbar />

        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
