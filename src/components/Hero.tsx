export default function Hero() {
  return (
    <section className='pt-10  py-10 mt-10 px-2'>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
        {/* LEFT TEXT */}
        <div className='text-slate-200 font-outfit max-w-xl'>
          <h1 className='font-bold tracking-tight text-slate-100 text-5xl sm:text-6xl md:text-7xl leading-tight'>
            Breno Baise
          </h1>

          <h3 className='mt-3 text-amber-400 text-sm sm:text-2xl font-semibold'>
            BEng Software Engineering
          </h3>

          <p className='mt-6 text-slate-300 text-lg leading-relaxed pb-2'>
            I'm a
            <span className='text-amber-400 font-medium'> Java Developer </span>
            passionate about creating clean, scalable, and engaging solutions
            for real-world scenarios. Here you’ll find my projects, a bit about
            me, and how I can help bring your ideas to life.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img
          className='w-2/3 sm:w-3/4 md:w-full mx-auto rounded-2xl shadow-xl object-contain border-2 border-amber-400'
          src='/breno.png'
          alt='Profile'
        />
      </div>
    </section>
  );
}
