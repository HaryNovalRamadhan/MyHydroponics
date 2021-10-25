import "./Navbar.css";


const Navbar = ({sidebarOpen, openSidebar, closeSidebar}) => {
    const bar = () => {
        if(sidebarOpen){
            closeSidebar()
        }else{
            openSidebar()
        }
    }
    return (
    <nav>
        
        <div className="toggle" onClick={() => bar()}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
        </div>
            
        <ul>
            <li><a href="#">Temperature</a></li>
            <li><a href="#">Lighting</a></li>
        </ul>

        
    </nav>
    );
}


export default Navbar;