import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import { useResponsiveScale } from './hooks/useResponsiveScale';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scale = useResponsiveScale();

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      
      <div className="min-h-screen pt-16 bg-gray-100">
        <div className="flex">
          <Sidebar isOpen={isMenuOpen} />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Dashboard</h1>
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">
                  This is the main content area. You can add your content here.
                  The layout is fully responsive and includes a collapsible sidebar,
                  fixed navbar, and a right panel.
                </p>
              </div>
            </div>
          </main>

          <div className="hidden lg:block w-64">
            <RightPanel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;