import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">SHOP</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">New Arrivals</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Accessories</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Mens</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Womens</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">HELP</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Sign Up</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Login</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Terms of Services</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
            <p className="mb-2">Contact us if need help with anything</p>
            <p className="mb-4">+01 123-456-7890</p>
            <div className="flex space-x-2">
              <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-red-500"><i className="fab fa-google"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-apple"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer
