import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <div>
      <Navbar />
      <Tasks/>
      <Outlet />
    </div>
  );
};

export default App;
