export default function NavBar() {
  return (
    <nav className='text-white flex justify-center items-center '>
      <ul
        className='inline-flex gap-6 py-6 px-6 my-6
      rounded-full text-center items-center justify-center select-none '
      >
        {/* Home icon */}
        <li
          className='border-2 border-transparent hover:border-amber-200/50 
      hover:bg-amber-400 hover:text-slate-900 hover:px-5 
        rounded-full py-2 px-2 font-bold transition-all duration-400 ease-linear
         to-slate-900 cursor-pointer'
        >
          <a href='#'>Home</a>
        </li>
        <li
          className='border-2 border-transparent hover:border-amber-200/50 
      hover:bg-amber-400 hover:text-slate-900 hover:px-5 
        rounded-full py-2 px-2 font-bold transition-all duration-400 ease-linear
         to-slate-900 '
        >
          <a href='#'>Services</a>
        </li>
        <li
          className='border-2 border-transparent hover:border-amber-200/50 
      hover:bg-amber-400 hover:text-slate-900 hover:px-5 
        rounded-full py-2 px-2 font-bold transition-all duration-400 ease-linear
         to-slate-900 '
        >
          <a href='#'>Projects</a>
        </li>
        <li
          className='border-2 border-transparent hover:border-amber-200/50 
      hover:bg-amber-400 hover:text-slate-900 hover:px-5 
        rounded-full py-2 px-2 font-bold transition-all duration-400 ease-linear
         to-slate-900 '
        >
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
