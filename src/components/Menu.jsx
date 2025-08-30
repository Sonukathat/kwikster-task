
function Menu() {
  return (
    <div className="bg-[#f9f6ee]">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mt-16 sm:text-5xl">View Our Menu</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-8 pt-10 xl:px-32">
        <div className="flex flex-col items-center gap-4">
            <img className="w-full h-72 sm:h-96 lg:h-64 xl:h-80 rounded-4xl" src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/delicious-pizza-isolated-white.jpg" alt="pizza" />
            <h3 className="font-bold text-lg">HOT PIZZA</h3>
            <button className="text-white bg-yellow-500 px-10 py-4 rounded-4xl font-light">READ MORE</button>
        </div>
        <div className="flex flex-col items-center gap-4">
            <img className="w-full h-72 sm:h-96 lg:h-64 xl:h-80 rounded-4xl" src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/high-angle-shot-vegetable-salad-white-bowl.jpg" alt="salads" />
            <h3 className="font-bold text-lg">SALADS</h3>
            <button className="text-white bg-yellow-500 px-10 py-4 rounded-4xl font-light">READ MORE</button>
        </div>
        <div className="flex flex-col items-center gap-4">
            <img className="w-full h-72 sm:h-96 lg:h-64 xl:h-80 rounded-4xl" src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3681641.jpeg" alt="dessert" />
            <h3 className="font-bold text-lg">DESSERT</h3>
            <button className="text-white bg-yellow-500 px-10 py-4 rounded-4xl font-light">READ MORE</button>
        </div>
        <div className="flex flex-col items-center gap-4">
            <img className="w-full h-72 sm:h-96 lg:h-64 xl:h-80 rounded-4xl" src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3939602.jpeg" alt="drinks" />
            <h3 className="font-bold text-lg">DRINK</h3>
            <button className="text-white bg-yellow-500 px-10 py-4 rounded-4xl font-light">READ MORE</button>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <p className="text-lg font-light text-center">Sample text. Click to select the Text Element. Image from <span className="text-yellow-500 font-bold">Freepik</span></p>
      </div>
    </div>
  )
}

export default Menu
