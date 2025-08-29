import banner from '../assets/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.avif'
function Banner() {
    return (
        <div className='px-8 pt-8 xl:px-32 bg-[#f9f6ee]'>
            <img className='rounded-4xl min-h-[40rem]' src={banner} alt="heroimg" />
            <button className='bg-amber-400 py-3 px-8 rounded-4xl relative bottom-20 left-2'>READ MORE</button>
        </div>
    )
}

export default Banner
