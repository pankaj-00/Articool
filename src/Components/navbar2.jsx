import React from 'react'
import { Card } from 'react-bootstrap'
import logo from "./Phymii_logo_3.png"
import { Link } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";
import { Button } from "react-bootstrap";


export default function Navbar2() {
    
    
    const { currentUser, logOut } = useAuth();
    const handleLogout = async () => {
    await logOut();
    };
    return (
       
        <Card className='flex sticky top-0 mx-2 my-2 NavbarElement'>

            
            <div className=" flex items-center NavContainer">
            <button className=' ml-5 mr-auto '>
              <i className="cursor-pointer text-2xl mr-auto fas fa-bars"></i>
            </button>
            <Link to="/">
            <div className='fixed m-auto items-center'> 
              <img className="cursor-pointer ml-40 PhymiiLogo" src={logo} alt="Logo" />
            </div> 
            </Link>

            {currentUser ? (
          <div className='flex items-center ml-auto'>
            <img
              src={currentUser.photoURL}
              alt={currentUser.displayName}
              className="cursor-pointer rounded-circle w-14 mr-2 "
            />
            <Button
              className="flex mr-5 h-10 "
              variant="outline-info"
              style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Link to="/Login" className="Link">
            <Button
              className="mr-5"
              variant="outline-info"
              style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
            >
              LOG IN
            </Button>
          </Link>
        )}
            </div> 

        </Card>
        
    )
}
