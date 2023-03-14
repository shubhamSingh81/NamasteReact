import React from "react";
import { useContext } from "react";
import UserContext from "../utils/userContext";
const Footer = () => {
  const {user} =  useContext(UserContext)

  return (
    <div>
 <h4>Footer</h4>
    <h5 className="font-bold p-10 m-10">This site is developer by {user.name} and {user.email}</h5>
    </div>
   
  )
};

export default Footer;
