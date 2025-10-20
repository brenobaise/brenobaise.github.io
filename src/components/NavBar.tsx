export default function NavBar() {
  const navItems = ["About", "Services", "Projects", "Contact"];

  return (
    <nav className='flex justify-center text-white text-3xl py-4 '>
      <ul className='flex justify-center gap-10 pt-10 font-outfit space-x-3  mr-10'>
        {/* Home icon */}
        <li>
          <a
            href='#'
            className='select-none cursor-pointer transform transition duration-200 hover:scale-110 hover:text-amber-100'
          >
            <img
              src='/home.svg'
              alt='Home'
              className='w-8 h-8 select-none transition-transform duration-200'
            />
          </a>
        </li>

        {/* Other nav links */}
        {navItems.map((item) => (
          <li key={item}>
            <a
              href='#'
              className='select-none cursor-pointer transform transition duration-200 hover:scale-110 hover:text-amber-400 hover:underline underline-offset-8 decoration-2'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
