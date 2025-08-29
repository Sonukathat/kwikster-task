import banner2 from '../assets/images.jpeg'

function Banner2() {
    return (
        <div className='px-8 pt-8 xl:px-32 bg-[#f9f6ee]'>
            <img className='rounded-4xl min-h-[40rem]' src={banner2} alt="heroimg" />
            <button className='bg-amber-400 py-3 px-8 rounded-4xl relative bottom-20 left-2'>READ MORE</button>
        </div>
    )
}

export default Banner2
