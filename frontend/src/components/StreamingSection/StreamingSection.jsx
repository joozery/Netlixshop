import { FaShoppingBasket } from "react-icons/fa";

// ✅ รูปสินค้า (นำเข้าแบบโมดูล)
import netflix from "../../assets/streaming/1.png";
import netflixTv from "../../assets/streaming/34.png";
import youtube from "../../assets/streaming/2.png";
import disney from "../../assets/streaming/3.png";
import ch3 from "../../assets/streaming/4.png";
import youku from "../../assets/streaming/5.png";
import bein from "../../assets/streaming/6.png";
import aisplay from "../../assets/streaming/7.png";
import trueid from "../../assets/streaming/8.png";
import spotify from "../../assets/streaming/9.png";
import prime from "../../assets/streaming/10.png";
import viu from "../../assets/streaming/11.png";

const streamingProducts = [
  { name: "NETFLIX", image: netflix },
  { name: "NETFLIX TV", image: netflixTv },
  { name: "YOUTUBE PREMIUM", image: youtube },
  { name: "DISNEY PLUS", image: disney },
  { name: "CH3 PLUS", image: ch3 },
  { name: "YOUKU", image: youku },
  { name: "BEIN SPORTS", image: bein },
  { name: "AIS PLAY", image: aisplay },
  { name: "TRUE ID", image: trueid },
  { name: "SPOTIFY PREMIUM", image: spotify },
  { name: "PRIME VIDEO", image: prime },
  { name: "VIU PREMIUM", image: viu },
];

const StreamingSection = () => {
  return (
    <section className="text-white font-prompt">
      <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <FaShoppingBasket />
        แอพสตรีมมิ่ง
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {streamingProducts.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0b0b] rounded-xl p-6 flex flex-col items-center justify-between border border-white/10 hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 min-h-[240px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-28 mb-4 object-contain drop-shadow"
            />
            <p className="text-sm font-medium mb-3 text-center">{item.name}</p>
            <button className="w-full text-sm border border-white/20 px-4 py-2 rounded-md hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
              <FaShoppingBasket />
              เลือกสินค้า
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StreamingSection;