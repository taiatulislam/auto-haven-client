import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' style={({ isActive }) => {
            return { backgroundColor: isActive ? "#fd9c01" : "", color: isActive ? 'white' : 'black' }
        }}>Home</NavLink></li>
        <li><NavLink to='/addProduct' style={({ isActive }) => {
            return { backgroundColor: isActive ? "#fd9c01" : "", color: isActive ? 'white' : 'black' }
        }}>Add Product</NavLink></li>
        <li><NavLink to='/cart' style={({ isActive }) => {
            return { backgroundColor: isActive ? "#fd9c01" : "", color: isActive ? 'white' : 'black' }
        }}>My Cart</NavLink></li>
        <li><NavLink to='/about' style={({ isActive }) => {
            return { backgroundColor: isActive ? "#fd9c01" : "", color: isActive ? 'white' : 'black' }
        }}>About Us</NavLink></li>
    </>

    const { user, signout } = useContext(AuthContext);

    const handleSignOut = () => {
        return signout();
    }

    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center font-semibold font-serif">
                        <img src='https://i.ibb.co/SJrWC87/car-logo.png' alt="" className="h-[70px] w-[120px]" />
                        <div>
                            <p className="normal-case text-2xl">Auto <span className="text-[#fd9c01]">Haven</span></p>
                            <p className="text-xs">Bringing Dreams to Driveways</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user ?
                            <div className="flex flex-row items-center">
                                <img src={user?.photoURL} alt="profile" className="w-[40px] h-[40px] rounded-full mr-3" />
                                <p><span className="md:mr-3 text-xs md:text-md lg:text-lg font-semibold">{user?.displayName}</span></p>
                                <button onClick={handleSignOut} className="btn normal-case font-semibold border-2 border-black py-2 px-5 rounded-lg">Sign Out</button>
                            </div>
                            :
                            <div className="flex gap-3">
                                <Link to='/signUp'><p className="btn normal-case border-2 border-[#fd9c01]">Sign Up</p></Link>
                                <Link to='/signIn'><p className="btn normal-case border-2 border-[#fd9c01]">Sign In</p></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;