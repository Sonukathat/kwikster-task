import banner from '../assets/pexels-ella-olsson-572949-1640777.jpg'
function Banner() {
    return (
        <div className='px-8 pt-8 xl:px-32 bg-[#f9f6ee]'>
            <img className='rounded-4xl min-h-[40rem] lg:mt-16' src={banner} alt="heroimg" />
            <button className='bg-amber-400 py-4 px-10 text-white font-medium rounded-4xl relative bottom-18 left-2 md:left-7'>READ MORE</button>
        </div>
    )
}

export default Banner
