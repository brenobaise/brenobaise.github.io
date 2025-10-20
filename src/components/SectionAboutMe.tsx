export default function SectionAboutMe() {
  return (
    <section className='py-20 mt-20 mx-auto max-w-4xl text-left  text-white border-t-2  border-amber-400/40 pt-5'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-bold text-slate-100 tracking-wide pb-4'>
          A bit about me ...{" "}
        </h2>
        <p className='py-2 text-slate-300 text-lg'>
          I graduated with a
          <span className='text-amber-400 font-medium'>
            {" "}
            First Class Honours{" "}
          </span>
          degree in <span className='font-bold'>Software Engineering</span> from
          the
          <span className='text-amber-400 font-medium'>
            {" "}
            University of Westminster
          </span>
          . Specialised in building{" "}
          <span className='font-bold'>RESTful APIs</span> and web applications
          using <span className='font-bold'>Java</span> and
          <span className='font-bold'> Spring</span>, with a strong focus on
          clean architecture and scalable design.
        </p>

        <p className='py-2 text-slate-300 text-lg'>
          Currently, I’m deepening my knowledge of microservices and distributed
          systems. I also have hands-on experience with
          <span className='font-bold'> Python</span> and
          <span className='font-bold'> JavaScript</span>, and have recently
          worked with
          <span className='font-bold'> Next.js</span> to build a modern,
          <span className='font-bold'> serverless</span> booking system for
          small-scale businesses.
        </p>
      </div>
    </section>
  );
}
