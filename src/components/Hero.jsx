import heroimg from '../assets/pexels-ella-olsson-572949-1640777.jpg'

function Hero() {
  return (
    <div className='px-8 pt-8 xl:px-32 bg-[#f9f6ee]'>
      <img className='rounded-4xl min-h-[40rem]' src={heroimg} alt="heroimg" />
      <button className='bg-amber-400 py-3 px-8 rounded-4xl relative bottom-18 left-2 md:left-7'>READ MORE</button>
    </div>
  )
}

export default Hero
