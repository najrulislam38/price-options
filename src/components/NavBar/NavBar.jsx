import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];
  return (
    <nav className=" text-black bg-yellow-400 p-6 ">
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        {open === true ? (
          <RxCross2 className="text-2xl"></RxCross2>
        ) : (
          <GiHamburgerMenu className="text-2xl"></GiHamburgerMenu>
        )}
      </div>
      <ul
        className={`md:flex bg-yellow-400 absolute ${
          open ? "top-14 left-12" : "left-12 -top-60"
        } duration-1000 md:static`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
