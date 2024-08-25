import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { formatTitle } from "./js/helpers";
import Logo from "./assets/logo.png";

import "./app.css";

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Toggle button for mobile */}
      <div className="md:hidden flex items-center p-4">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-gray-800 text-white w-64 p-4 transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
      >
        <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2"><a href="#" className="block p-2">Item 1</a></li>
          <li className="mb-2"><a href="#" className="block p-2">Item 2</a></li>
          <li className="mb-2"><a href="#" className="block p-2">Item 3</a></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}
