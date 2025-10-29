function Blog() {
  const blogPosts = [
    {
      title: "POST 6 HEADLINE",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3662126.jpeg",
    },
    {
      title: "POST 5 HEADLINE",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3906526.jpeg",
    },
    {
      title: "POST 4 HEADLINE",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3850972.jpeg",
    },
    {
      title: "POST 3 HEADLINE",
      img: "https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3939685.jpeg",
    },
  ];

  return (
    <div className="bg-[#f9f6ee]">
      <h2 className="text-2xl sm:text-5xl font-bold text-center mt-16">Check Our Blog</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-8 xl:px-32 pt-10">
        {blogPosts.map((post, i) => (
          <div key={i} className="flex flex-col items-center gap-4 bg-white p-4 rounded-4xl xl:p-6 shadow-md hover:shadow-lg transition-all">
            <img className="w-full h-72 sm:h-96 lg:h-64 xl:h-60 object-cover rounded-4xl" src={post.img} alt={post.title} />
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-center text-gray-600">Sample small text. Lorem ipsum dolor sit amet.</p>
            <button className="text-black bg-[#99e54d] px-8 py-5 rounded-4xl font-medium">READ MORE</button>
          </div>
        ))}
      </div>
      <p className="text-lg text-center font-light mt-12 px-4">
        Sample text. Click to select the Text Element. Image from <span className="text-yellow-500 font-bold">Freepik</span>
      </p>
    </div>
  );
}

export default Blog;
