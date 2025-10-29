function Menu() {
  const menuItems = [
    {
      title: "HOT PIZZA",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/delicious-pizza-isolated-white.jpg",
    },
    {
      title: "SALADS",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/high-angle-shot-vegetable-salad-white-bowl.jpg",
    },
    {
      title: "DESSERT",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3681641.jpeg",
    },
    {
      title: "DRINK",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3939602.jpeg",
    },
  ];

  return (
    <div className="bg-[#f9f6ee]">
      <h2 className="text-2xl sm:text-5xl font-bold text-center">View Our Menu</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-8 pt-10 xl:px-32">
        {menuItems.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 sm:h-96 lg:h-64 xl:h-80 rounded-4xl"
            />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <button className="text-white bg-yellow-500 px-10 py-4 rounded-4xl font-light">
              READ MORE
            </button>
          </div>
        ))}
      </div>

      <p className="text-lg font-light text-center py-10">
        Sample text. Click to select the Text Element. Image from{" "}
        <span className="text-yellow-500 font-bold">Freepik</span>
      </p>
    </div>
  );
}

export default Menu;
