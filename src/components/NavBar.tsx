import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav className='md:bg-slate-900 text-white flex justify-end items-center md:text-3xl md:py-4 px-6'>
        {/* Hamburger button -  mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden flex flex-col gap-1.5 z-50 mt-10'
          aria-label='Toggle menu'
        >
          <span
            className={`w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop menu */}
        <ul className='hidden md:inline-flex gap-6 py-6 px-6 my-6 rounded-full text-center items-center justify-center select-none mx-auto'>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className='border-2 border-transparent hover:border-amber-200/50 
                hover:bg-amber-400 hover:text-slate-900 hover:px-5 
                rounded-full py-2 px-2 font-bold transition-all duration-400 ease-linear
                to-slate-900 cursor-pointer'
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden min-h-[100dvh] overflow-hidden fixed inset-0 bg-slate-900 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className='flex flex-col items-center justify-center h-full gap-8 text-2xl select-none '>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className='border-2 border-transparent active:border-amber-200/50 
                active:bg-amber-400 active:hover:text-slate-900 
                rounded-full py-3 px-8 font-bold transition-all duration-300 ease-linear
                text-white active:scale-110'
              onClick={() => setIsOpen(false)}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}

          <div className=' fixed text-white bottom-0 mb-10 italic font-mono text-sm'>
            brenobaise<span className='text-amber-400 inline-flex'>.dev</span>
          </div>
        </ul>
      </div>
    </>
  );
}
