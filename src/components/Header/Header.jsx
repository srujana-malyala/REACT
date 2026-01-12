import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import {Login} from "./Login";
import "./Header.css"
import { Link } from "react-router-dom";

export const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    return (
        <>
            <nav className="nav-container">
                <div className="navv"><h1>Tech-Shop</h1></div>

                <div className="nav-link" style={{ marginLeft: "auto" }} >

                    {showInput && (
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{
                                padding: "10px", width: "500px", backgroundColor: "grey"
                                , color: "whitesmoke", border: "1px solid", borderColor: "black", alignItems: "center",
                                textAlign: "center"
                            }}
                        />
                    )}

                    <FaSearch
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowInput(!showInput)}
                    />

                    <Link className="nav-link"> <FaShoppingCart /></Link>
                    {/* <Link className="nav-link"><AiOutlineUser /></Link> */}
                    
                        <AiOutlineUser
                            className="user-icon"
                            onClick={() => setShowAuth(true)}
                        />
                   
                </div>

            </nav>
             {/* Login / Signup Popup */}
      {showAuth && <Login closeModal={() => setShowAuth(false)} />}
        </>
    )
}