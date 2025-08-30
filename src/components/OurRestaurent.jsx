import restimg from '../assets/pexels-photo-1640773.jpeg'

function OurRestaurent() {
    return (
        <div className='px-8 pt-8 xl:px-32 bg-[#f9f6ee]'>
            <img className='rounded-4xl min-h-[40rem]' src={restimg} alt="heroimg" />
            <button className='bg-amber-400 py-4 px-10 text-white font-medium rounded-4xl relative bottom-18 left-2 md:left-7'>READ MORE</button>
        </div>
    )
}

export default OurRestaurent
