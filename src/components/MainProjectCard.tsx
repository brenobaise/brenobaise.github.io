import ImageCarousel from "../components/ImageCarousel";

export default function MainProjectCard() {
  return (
    <section className='py-20 mt-20 mx-auto max-w-4xl text-left  text-white border-t-2  border-amber-400/40 pt-5'>
      <h2 className='text-3xl font-bold text-slate-100 tracking-wide pb-4'>
        Recent Projects
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        {/* Project Description */}
        <div className='order-2 lg:order-1'>
          <h3 className='text-2xl font-semibold text-amber-400 mb-4 '>
            Beauty Salon Website
          </h3>
          <p className='text-lg text-slate-300 leading-relaxed'>
            A modern, responsive website built for a local beauty salon to
            showcase their services, talented staff, and contact information.
            The site features elegant visuals with a mobile-first design
            approach, ensuring seamless user experience across all devices.
          </p>
          <div className='mt-6 flex flex-wrap gap-2'>
            <span className='px-3 py-1 bg-slate-800 text-amber-400 rounded-full text-sm'>
              React
            </span>
            <span className='px-3 py-1 bg-slate-800 text-amber-400 rounded-full text-sm'>
              Tailwind CSS
            </span>
            <span className='px-3 py-1 bg-slate-800 text-amber-400 rounded-full text-sm'>
              Node.js
            </span>
            <span className='px-3 py-1 bg-slate-800 text-amber-400 rounded-full text-sm'>
              Express
            </span>
          </div>
        </div>

        {/* Project Carousel */}
        <div className='order-1 lg:order-2'>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}
