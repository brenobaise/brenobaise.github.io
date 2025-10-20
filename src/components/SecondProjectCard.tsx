import ImageCarousel from "./ImageCarousel";
export default function SecondProjectCard() {
  return (
    <section className='py-20 mx-auto max-w-4xl text-left  text-white '>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8  items-center'>
        {/* Project Description */}
        <div className='order-2 lg:order-2'>
          <h3 className='text-2xl font-semibold text-amber-400 mb-4 '>
            Some site
          </h3>
          <p className='text-lg text-slate-300 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolore fuga sit perferendis, ut debitis quibusdam quo deleniti
            temporibus iusto maiores veniam amet repellat. Dolore autem
            blanditiis rerum praesentium ut.
          </p>
        </div>

        {/* Project Carousel */}
        <div className='order-1 lg:order-1'>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}
