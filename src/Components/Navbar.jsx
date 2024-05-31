import { NavLink } from "react-router-dom"
import { FaSearch, FaBars, FaShoppingCart } from 'react-icons/fa';

export const Navbar = ({ count, brandname }) => {

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-semibold">
                        <NavLink to="/">
                            <span className="navbar-brand">
                                {brandname}
                            </span>
                        </NavLink>
                    </div>

                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-6 py-1 rounded-md focus:outline-none"
                        />
                        {/* count cart */}
                        <button className="text-white hover:text-gray-400">
                            <FaSearch size={25} />
                            <span className="absolute top-3 right-7 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                               {count}
                            </span>
                        </button>

                        <button className="text-white hover:text-gray-400">
                            <NavLink to="/cart">
                                <FaShoppingCart size={25}>
                                    {count}
                                </FaShoppingCart>
                            </NavLink>
                            
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white hover:text-gray-400">
                            <FaBars />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}