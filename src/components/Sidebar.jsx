import React from 'react';
import { Home, Users, Settings } from 'lucide-react';

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 transform transition-transform duration-300 ease-in-out w-64 bg-gray-800 text-white pt-20 lg:pt-4`}>
      <nav className="mt-5 px-2">
        <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-700">
          <Home className="mr-4 h-6 w-6" />
          Home
        </a>
        <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-700">
          <Users className="mr-4 h-6 w-6" />
          Team
        </a>
        <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-700">
          <Settings className="mr-4 h-6 w-6" />
          Settings
        </a>
      </nav>
    </aside>
  );
}