import {useState} from 'react';
import Main from "./components/main/Main"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className={sidebarOpen? "container2" : "container"} >
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} openSidebar={closeSidebar} />
    </div>
  );
}

export default App;
