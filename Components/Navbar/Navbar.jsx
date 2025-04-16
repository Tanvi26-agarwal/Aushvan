import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoaush.png";
import useStore from "../../Zustand/State"


function Navbar() {

    const {sectionRefs, user, setUser, logout } = useStore();
    const navigate = useNavigate();

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClick = () => {
        navigate("/terms");
    };

    const homeClick = () => {
        navigate("/");
    };
    const loginClick = () => {
        navigate("/login");
    };
    
    const signupClick = () => {
        navigate("/signup");
    };

    const recommendationClick = () => {
        navigate("/recommendation");
    };
    

    const handleLogout = () => {
        localStorage.removeItem("token");
        logout(); // from Zustand
        navigate("/");
      };
    
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10">
            <div className="flex-1 pl-20">
                <img src={logo} alt="" className="h-20" />
            </div>
            <div className="flex-none pr-20">
                <ul className="menu menu-horizontal px-1">
                    <li className="" onClick={homeClick}><a>Home</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.searchingHerbRef)}><a>Details</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.exploreHerbsRef)}><a>Features</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.herbalEducationRef)}><a>Fact</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.usersEntryRef)}><a>Users</a></li>
                    <li onClick={handleClick}><a>Terms Condition</a></li>

                    {user ? (
            <>
              <li onClick={recommendationClick}><a>Recommendations</a></li>
              <li><span className="font-semibold text-green-600 px-2">Hi, {user.name}</span></li>
              <li><button onClick={handleLogout} className="btn btn-sm btn-outline btn-error">Logout</button></li>
            </>
          ) : (
            <>
            
                    <li><button onClick={loginClick} className="btn btn-sm btn-outline btn-success">Login</button></li>
                    <li className="ml-2"><button onClick={signupClick} className="btn btn-sm btn-outline btn-primary">Signup</button></li>
                    </>
          )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
