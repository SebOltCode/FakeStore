import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="bg-gray-700 p-5">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className=" text-gray-300 hover:text-white">
            FakeStore
            </Link>
            <div className="flex space-x-4">
                <Link to="" className="text-gray-300 hover:text-white">
                Home
                </Link>
                <Link to="Cart" className="text-gray-300 hover:text-white">
                Shopping Cart
                </Link>
            </div>


        </div>


    </nav>

    );
};
export default Navbar;