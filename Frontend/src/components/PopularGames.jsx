const PopularGames = () => {
  const popularGames = [
    {
      category: 'Action Games',
      url: "https://cdn1.epicgames.com/offer/e860fa919120430ca12c557bb676bc6a/EGST_StoreLandscape_2560x1440_2560x1440-e7beda03979167bed00fb2c73bb7998a",
    },
    {
      category: 'Action-Advancer Games',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomdbGY9rIIXsBw-unLow-GougCbhPKqIiQ&s",
    },
    {
      category: 'Advancer Games',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7GpGSvv98i32SmjgaIZm9JOGPpKDHmyjwA&s",
    },
    {
      category: 'Casual Games',
      url: "https://cdn1.epicgames.com/spt-assets/8f8ded45773e4bcca29d4f4f5e42ad7f/the-companion-1dash.jpg",
    },
  ];
  return (
    <div>
      <h2 className="text-4xl font-extrabold">Popular Games</h2>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {popularGames.map((popularGame ,idx) => (
          <div key={idx} className="w-full bg-[#202024] hover:bg-[#343437] h-56 rounded-lg flex flex-col items-center justify-start gap-2 p-5">
            <img
              className="w-full h-36 object-cover rounded"
              src={popularGame.url}
              alt=""
            />
            <p className="mt-2 font-bold">{popularGame.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;
