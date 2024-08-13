import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { formatTitle } from "./js/helpers";
import Logo from "./assets/logo.png";
import "./app.css";

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const loc = useLocation();

    return (
        <div className="w-full h-full flex overflow-hidden">
            <nav
                className={`bg-black py-8 px-8 text-primary h-full transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 w-64 fixed md:relative`}
            >
                <a href="#" className="nav-header flex justify-around items-center gap-2">
                    <img width={60} src={Logo} alt="AJL Services" className="circle" />
                    <span className="text-xl font-bold">Services</span>
                </a>
                <ul className="nav-body pt-8">
                    <li className="mb-6">
                        <Link
                            to="/"
                            className={`link-primary flex items-center ${
                                loc.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <i className="fa-solid fa-chart-line w-2/12"></i> Dashboard
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link
                            to="/clientes"
                            className={`link-primary flex items-center ${
                                loc.pathname.includes("/clientes") ? "active" : ""
                            }`}
                        >
                            <i className="fa-solid fa-users w-2/12"></i> Clientes
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link
                            to="/trabajadores"
                            className={`link-primary flex items-center ${
                                loc.pathname.includes("/trabajadores") ? "active" : ""
                            }`}
                        >
                            <i className="fa-solid fa-user-tie w-2/12"></i> Trabajadores
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link
                            to="/servicios"
                            className={`link-primary flex items-center ${
                                loc.pathname.includes("/servicios") ? "active" : ""
                            }`}
                        >
                            <i className="fa-solid fa-sheet-plastic w-2/12"></i> Servicios
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link
                            to="/finanzas"
                            className={`link-primary flex items-center ${
                                loc.pathname.includes("/finanzas") ? "active" : ""
                            }`}
                        >
                            <i className="fa-solid fa-dollar-sign w-2/12"></i> Finanzas
                        </Link>
                    </li>
                </ul>
            </nav>

            <main
                className={`flex-grow bg-primary-soft h-full overflow-scroll scroll-hide transition-all duration-300 ${
                    isOpen ? "ml-64" : "ml-0"
                }`}
            >
                <div className="header p-4 bg-primary sticky top-0 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <button
                            className="p-1 rounded-lg text-black block md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <h2 className="text-xl">{formatTitle(loc.pathname)}</h2>
                    </div>
                    <div></div>
                </div>
                <div className="p-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
