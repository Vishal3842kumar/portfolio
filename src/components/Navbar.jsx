import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <h1 className="text-xl font-bold">
          Vishal Kumar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 md:gap-6 text-sm md:text-base">
          <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('home')}>Home</li>
          <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('about')}>About</li>
          <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('education')}>Education</li>
          <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <ul className="flex flex-col py-4 px-6 space-y-4">
            <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('home')}>Home</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('about')}>About</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('skills')}>Skills</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('projects')}>Projects</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('education')}>Education</li>
            <li className="cursor-pointer hover:text-orange-400 transition-colors" onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar