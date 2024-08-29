import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { formatTitle } from "./js/helpers";
import Logo from "./assets/logo.png";

import "./app.css";

export default function Layout() {

    const loc = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 transform bg-black text-white w-64 md:w-96 p-4 transition-transform duration-300 ease-in-out 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
            >
                <div className="flex justify-end">
                    <button className="block md:hidden text-primary" 
                    onClick={toggleSidebar}>
                        <i className="fa-solid fa-x"></i>
                    </button>
                </div>
                <div className="flex justify-start items-center flex-wrap gap-4">
                    <img src={Logo} alt="ALT Services" className="rounded-full" width={80}/>
                    <h2 className="text-xl text-primary">AJL Services</h2>
                </div>
                <ul className="py-8">
                    <li className="mb-4">
                        <Link className={`link-primary flex gap-2 items-center ${loc.pathname==='/' ? 'active' : ''}`} to={'/'}>
                            <i className="fa-solid fa-chart-line"></i> Dashboard
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link className={`link-primary flex gap-2 items-center ${loc.pathname==='/clientes/' ? 'active' : ''}`} to={'clientes/'}>
                            <i className="fa-solid fa-users"></i> Clientes
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link className={`link-primary flex gap-2 items-center ${loc.pathname==='/servicios/' ? 'active' : ''}`} to={'servicios/'}>
                            <i className="fa-solid fa-book"></i> Servicios
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link className={`link-primary flex gap-2 items-center ${loc.pathname==='/trabajadores/' ? 'active' : ''}`} to={'trabajadores/'}>
                            <i className="fa-solid fa-user-tie"></i> Trabajadores
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link className={`link-primary flex gap-2 items-center ${loc.pathname==='/finanzas/' ? 'active' : ''}`} to={'finanzas/'}>
                            <i className="fa-solid fa-dollar-sign"></i> Finanzas
                        </Link>
                    </li>
                </ul>
            </aside>
            
            <div className="w-full flex flex-col">
                {/* header */}
                <div className="px-4 py-5 w-full flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        {/* Toggle button for mobile */}
                        <div className="md:hidden flex items-center p-4">
                            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            </button>
                        </div>
                        <h2>
                            {formatTitle(loc.pathname)}
                        </h2>
                    </div>
                    <div></div>
                </div>

                {/* Main content */}
                <div className="flex-1 overflow-scroll scroll-hide bg-slate-50">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
