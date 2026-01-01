import { Button } from "./button";
import { Menu } from "lucide-react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='min-w-screen bg-gray-100'>
      <nav className=' max-w-350  mx-auto  flex items-center justify-between  px-6 md:px-2   py-5 bg-transparent '>
        <h1 className=' text-3xl font-bold  text-violet-700'>Workora</h1>
        <ul className=' md:flex gap-8  text-xl font-medium text-gray-700 hidden '>
          <li className='text-md text-gray-600 hover:text-dark-violate cursor-pointer hover:text-violet-700 '>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }>
              Home
            </NavLink>
          </li>
          <li className='text-md text-gray-600 hover:text-dark-violate cursor-pointer hover:text-violet-700 '>
            <NavLink
              to='/workspaces'
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }>
              Workspaces
            </NavLink>
          </li>
          <li className='text-md text-gray-600 hover:text-dark-violate cursor-pointer hover:text-violet-700 '>
            <NavLink
              to='/membership'
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Membership
            </NavLink>
          </li>
          <li className='text-md text-gray-600 hover:text-dark-violate cursor-pointer hover:text-violet-700 '>
            <NavLink
              to='/blog'
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }>
              Blog
            </NavLink>
          </li>
          <li className='text-md text-gray-600 hover:text-dark-violate cursor-pointer hover:text-violet-700 '>
            <NavLink
              to='/favorites'
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }>
              Favorite
            </NavLink>
          </li>
        </ul>
        <div className='md:flex gap-2 hidden '>
          <Button className='bg-transparent  border-violet-600 border-2 text-sm text-violet-800 font-semibold    '>
            Contact Us
          </Button>
          <Button className='  bg-dark-violate border-dark-violate border-2s text-sm text-white  font-semibold  '>
            Login
          </Button>
        </div>
        <div className='border p-1  border-gray-400 rounded md:hidden '>
          <Menu className='text-gray-700' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
