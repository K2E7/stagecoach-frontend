import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Stagecoach</div>
            <ul className="menu">
                <li className="navItem">Home</li>
                <li className="navItem">About</li>
                <li className="navItem">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;