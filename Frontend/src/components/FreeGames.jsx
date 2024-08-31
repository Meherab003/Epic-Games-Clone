import { ImGift } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

const FreeGames = () => {
  const freeGames = [
    {
      name: "Fallout Classic Collection",
      url: "https://cdn1.epicgames.com/offer/2e412cfcbd954e7180930e9784a47e18/EGS_FalloutAPostNuclearRolePlayingGame_BethesdaGameStudios_S2_1200x1600-f4406e1a479760bfbebc4459f7c17932",
      class:
        "bg-sky-400 w-56 rounded-b-lg text-center text-black font-bold text-sm py-1",
      from: "Now",
      to: "Sep 05",
      context: 'FREE NOW'
    },
    {
      name: "Wild Card Football",
      url: "https://cdn1.epicgames.com/offer/3072dbe471f84dac8b2e9ba8af253ee2/EGS_WildCardFootball_SaberInteractive_S2_1200x1600-a5e01b328b18fd5a5c54704b0c47a983",
      class:
        "bg-sky-400 w-56 rounded-b-lg text-center text-black font-bold text-sm py-1",
      from: "Now",
      to: "Sep 05",
      context: 'FREE NOW'
    },
    {
      name: "Football Manager 2024",
      url: "https://cdn1.epicgames.com/offer/610a546d4e204215a0b9a1c8a382bacb/EGS_FootballManager2024_SportsInteractive_S2_1200x1600-d59e8b3545615cbc8a51d8acd316dd60",
      class: "bg-black w-56 rounded-b-lg text-center  font-bold text-sm py-1",
      from: "Sep 05",
      to: "Sep 12",
      context: 'COMING SOON'
    },
    {
      name: "Sniper Ghost Warrior Contracts",
      url: "https://cdn1.epicgames.com/spt-assets/4ad9b2d4a92141a09e3ca4df8bfbcfea/sniper-ghost-warrior-contracts-tp431.jpg",
      class: "bg-black w-56 rounded-b-lg text-center  font-bold text-sm py-1",
      from: "Sep 05",
      to: "Sep 12",
      context: 'COMING SOON'
    },
  ];
  return (
    <div className="my-16 p-8 bg-[#202024] rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h1 className="flex justify-start items-center gap-1 text-2xl font-bold mb-5">
          <ImGift className="text-4xl mr-2" />
          Featured Discount <IoIosArrowForward />
        </h1>
        <button className="border border-gray-200 p-2 px-4 rounded-lg">
          View More
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {freeGames.map((freeGame, idx) => (
          <div key={idx}>
            <img
              className="h-64 w-56 rounded-lg rounded-b-none hover:rounded-none hover:opacity-75 object-cover"
              src={freeGame.url}
              alt={freeGame.name}
            />
            <p className={freeGame.class}>{freeGame.context}</p>
            <p className="font-bold mt-3">{freeGame.name}</p>
            <p className="text-[#969d9a] font-semibold">
              Free From {freeGame.from} - {freeGame.to}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeGames;
