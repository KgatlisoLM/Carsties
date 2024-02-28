import React from "react";
import { PiCarProfileLight } from "react-icons/pi";
import LoginButton from "./LoginButton";
import { getCurrentUser } from "../actions/authActions";
import UserActions from "./UserActions";
import Logo from "./Logo";

async function NavBar() {
  const user = await getCurrentUser();

  
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white shadow-md  p-5 items-center text-gray-800">
      <div></div>
         <Logo/>
      <div>
        {user ? (
          <UserActions user={user}/>
        ): (
          <LoginButton />
        )}
     
      </div>
    </header>
  );
}

export default NavBar;
