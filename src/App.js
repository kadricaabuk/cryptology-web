import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components"

function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-2 ">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
