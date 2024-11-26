import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
    </div>
  );
}

export default App;
