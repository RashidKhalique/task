import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdLogIn, IoMdSettings } from 'react-icons/io';  // Example imports from react-icons

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="w-30">
      <aside className="fixed top-0 left-0 h-screen flex-shrink-0 border-r-[1px] w-[270px] border-gray-400 bg-white transition-all duration-300">
        <div className="scroll-sidebar overflow-y-auto" data-simplebar="">
          <div className="px-6 mt-8">
            <nav className="w-full flex flex-col sidebar-nav">
              <ul className="text-gray-600 text-sm">
                <li className="text-4xl font-bold pb-4 cursor-default">
                  <span onClick={() => navigate('/dashboard')}>HOME</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500"
                    onClick={() => navigate('/dashboard')}
                  >
                    <IoMdSettings className="text-2xl" /> {/* Updated icon */}
                    <span>Dashboard</span>
                  </a>
                </li>
                {/* Other sidebar items */}
                <li className="sidebar-item">
                  <a onClick={handleLogout} className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500">
                    <IoMdLogIn className="text-2xl" /> {/* Updated icon */}
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
