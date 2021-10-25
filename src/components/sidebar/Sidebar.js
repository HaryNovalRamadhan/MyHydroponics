import "./Sidebar.css";


const Sidebar = ({sidebarOpen}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : "sidebar"} >
            <div className="sidebar__title">
               <h1>MyHydroponics</h1>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link">
                    <a href="#">Dasboard</a>
                </div>
                <div className="sidebar_link">
                    <a href="#">Log out</a>
                </div>      
            </div>
        </div>
    );
}

export default Sidebar;