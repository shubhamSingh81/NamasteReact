import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2">
            <Link to={"/"}>Home </Link>{" "}
          </li>
          <li className="px-2">
            <Link to={"/about"}> About </Link>
          </li>
          <li className="px-2"> <Link to={"/contact"}> Contact </Link></li>
          <li className="px-2"><Link to={"/cart"}>Cart</Link></li>
          <li className="px-2"><Link to={"/instaMart"}>InstaMart</Link></li>
        </ul>
      </div>
      <h1 className="py-2">{isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>LogedIn</button>
      )}</h1>

    </div>
  );
};

export default Header;
