
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Vault from './pages/Vault';
import DisqusComments from './components/DisqusComments';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-100 text-stone-800 selection:bg-orange-500/30">
        <nav className="border-b border-stone-300/50 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-6">
              <Link to="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-300 hover:to-amber-400 transition-all duration-300">
                Eywa.ai
              </Link>
              <div className="flex items-center gap-8">
                <Link to="/" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Home</Link>
                <button className="px-5 py-2 rounded-full bg-orange-400 text-sm font-semibold text-white hover:bg-orange-500 transition-all border border-transparent">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vault/:category" element={<Vault />} />
          </Routes>
          <DisqusComments />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
