import { IoIosArrowForward } from "react-icons/io";

const Big3 = () => {
  const bannerPhotos = [
    {
      name: "Red Dead Redemption 2",
      url: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
      cover:
        "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg",
      price: "12",
    },
    {
      name: "Genshin Impact",
      url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399",
      cover:
        "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc",
      price: "12",
    },
    {
      name: "Black Myth Wukong",
      url: "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jz9yr.jpg",
      cover:
        "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png",
      price: "12",
    },
    {
      name: "Space Marine",
      url: "https://cdn1.epicgames.com/offer/f640a0c1648147fea7e81565b45a3003/EGS_Warhammer40000SpaceMarine2_SaberInteractive_S1_2560x1440-975214651d1d1bc6c6e5779b53958840",
      cover:
        "https://cdn1.epicgames.com/offer/f640a0c1648147fea7e81565b45a3003/EGS_Warhammer40000SpaceMarine2_SaberInteractive_S2_1200x1600-8b8777b3ce0c530a00af7bf8efda793b",
      price: "12",
    },
    {
      name: "Monster Jam Showdown",
      url: "https://cdn1.epicgames.com/offer/42c70202dc684966a827bfcb7b49ac5f/EGS_MonsterJamShowdown_MilestoneSrl_S1_2560x1440-f23945d70170675c8df2defe13956957",
      cover:
        "https://cdn1.epicgames.com/offer/42c70202dc684966a827bfcb7b49ac5f/EGS_MonsterJamShowdown_MilestoneSrl_S2_1200x1600-a819ba968f7f76350b1fa9bc1ee97f28",
      price: "12",
    },
    {
      name: "Star Wars Outlaws",
      url: "https://cdn1.epicgames.com/offer/e860fa919120430ca12c557bb676bc6a/EGST_StoreLandscape_2560x1440_2560x1440-e7beda03979167bed00fb2c73bb7998a",
      cover:
        "https://cdn1.epicgames.com/offer/e860fa919120430ca12c557bb676bc6a/EGST_StorePortrait_1200x1600_1200x1600-e6f41420c20529e7380243a6f6b7a38f",
      price: "12",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex-1 flex-grow h-[500px] flex flex-col justify-evenly border-r border-gray-500 p-3">
        <h2 className="text-xl mb-2 font-bold flex items-center justify-start gap-2">
          Top Seller <IoIosArrowForward />
        </h2>
        {bannerPhotos.map((bannerPhoto, idx) => (
          <div
            key={idx}
            className="flex items-center justify-start gap-2 p-2 py-3 hover:bg-[#28282c] rounded-lg font-medium"
          >
            <img className="h-14 rounded" src={bannerPhoto.cover} alt="" />
            <div>
              <p>{bannerPhoto.name}</p>
              <p className="text-[#969d9a] text-sm">{bannerPhoto.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex-grow h-[500px] flex flex-col justify-evenly border-r border-gray-500 p-3">
        <h2 className="text-xl mb-2 font-bold flex items-center justify-start gap-2">
          Most Played <IoIosArrowForward />
        </h2>
        {bannerPhotos.map((bannerPhoto, idx) => (
          <div
            key={idx}
            className="flex items-center justify-start gap-2 p-2 py-3 hover:bg-[#28282c] rounded-lg font-medium"
          >
            <img className="h-14 rounded" src={bannerPhoto.cover} alt="" />
            <div>
              <p>{bannerPhoto.name}</p>
              <p className="text-[#969d9a] text-sm">{bannerPhoto.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex-grow h-[500px] flex flex-col justify-evenly border-r border-gray-500 p-3">
        <h2 className="text-xl mb-2 font-bold flex items-center justify-start gap-2">
          Top Upcoming Wishlisted <IoIosArrowForward />
        </h2>
        {bannerPhotos.map((bannerPhoto, idx) => (
          <div
            key={idx}
            className="flex items-center justify-start gap-2 p-2 py-3 hover:bg-[#28282c] rounded-lg font-medium"
          >
            <img className="h-14 rounded" src={bannerPhoto.cover} alt="" />
            <div>
              <p>{bannerPhoto.name}</p>
              <p className="text-[#969d9a] text-sm">{bannerPhoto.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Big3;
