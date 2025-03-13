const Hero = () => {
  return (
    <div className='h-screen' style={{ paddingTop: '25vh' }}>
      <div data-aos="zoom-in" className='w-fit mx-auto'>
        <h3 className='text-3xl lg:text-4xl font-semibold text-on-primary'>Hi, I'm</h3>
        <h1 className='text-6xl lg:text-8xl font-extrabold my-4 text-primary'>LUTHFI NOER</h1>
        <div className='flex items-center'>
          <h3 className='text-3xl lg:text-4xl font-semibold text-on-primary w-fit lg:ms-auto me-0'>Frontend Developer</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero