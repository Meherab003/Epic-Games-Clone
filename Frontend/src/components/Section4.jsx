import { IoIosArrowForward } from "react-icons/io";

const Section4 = () => {
  const discountGames = [
    {
      name: "RAWMEN: Food Fighter",
      url: "https://cdn1.epicgames.com/spt-assets/925b89bff456434291f264924ab51443/rawmen-1d3pw.png",
      price: 13.99,
      discount: 80,
    },
    {
      name: "Deathbound",
      url: "https://cdn1.epicgames.com/spt-assets/94717ce5197c45919cce272f7e23c1f1/deathbound-lf6f0.jpg",
      price: 3.29,
      discount: 80,
    },
    {
      name: "Darkblade Ascent",
      url: "https://cdn1.epicgames.com/spt-assets/fcecaf1e6a4f44768444aee37f3b5c87/darkblade-ascent-1w74w.jpg",
      price: 32.99,
      discount: 80,
    },
    {
      name: "Cats On Duty",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL7ju1dDKPQuUXTrXhoEy4W-nNi-jHA7ILA&s",
      price: 4.99,
      discount: 80,
    },
    {
      name: "Apex Legends",
      url: "https://cdn1.epicgames.com/spt-assets/5dcd88f4e2094a698ebffa43438edc33/apex-legends-v4qf9.jpg",
      price: 56.69,
      discount: 75,
    },
  ];
  return (
    <div className="my-16">
      <h1 className="flex justify-start items-center gap-1 text-2xl font-bold mb-5">
        Featured Discount <IoIosArrowForward />
      </h1>
      <div className="grid grid-cols-5 gap-5">
        {discountGames.map((discountGame, idx) => (
          <div key={idx}>
            <img
              className="h-64 w-52 rounded-lg hover:rounded-none hover:opacity-75 object-cover"
              src={discountGame.url}
              alt={discountGame.name}
            />
            <p className="text-sm text-[#969d9a] mt-2">Base Game</p>
            <p className="font-medium mb-2">{discountGame.name}</p>
            <div className="flex items-center justify-start gap-2">
              <p className="text-black bg-sky-400 rounded-full px-2 text-xs font-medium">${discountGame.discount}</p>
              <p className="text-[#969d9a] line-through font-medium">{discountGame.price}%</p>
              <p>${((discountGame.discount/100)* discountGame.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
