function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <h1 className="text-xl font-bold">
          Vishal Kumar
        </h1>

        <ul className="flex gap-8 md:gap-10 text-sm md:text-base">
          <li className="cursor-pointer hover:text-orange-400" onClick={() => scrollToSection('home')}>Home</li>
          <li className="cursor-pointer hover:text-orange-400" onClick={() => scrollToSection('about')}>About</li>
          <li className="cursor-pointer hover:text-orange-400" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="cursor-pointer hover:text-orange-400" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar