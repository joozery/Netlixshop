import service1 from "../../assets/services/intro.png";
import service2 from "../../assets/services/intro.png";
import service3 from "../../assets/services/intro.png";
import { FaStar } from "react-icons/fa";

const services = [
  {
    title: "บริการด้านแอพสตรีมมิ่ง (Streaming)",
    image: service1,
    desc: `THXKSHOP เราพร้อมบริการสตรีมมิ่งหลากหลายบริการ ได้แก่ NETFLIX, YOUTUBE, VIU Premium, WeTV, TrueID, Ch3Plus, Disney+, MONOMAX, HBO GO, Amazon Prime Video, Spotify Premium, AIS Play, Bilibili, YOUKU VIP, BeinSports และอื่น ๆ อีกมากมาย ให้คุณเพลิดเพลินกับความสุขของการรับชมและการฟังเพลง ราคาถูก ปลอดภัย หากมีปัญหามีงานซัพพอร์ตตลอดเวลา`,
  },
  {
    title: "บริการด้านแอคเคาท์ (Account)",
    image: service2,
    desc: `THXKSHOP บริการแอคเคาท์หลากหลายบริการ ได้แก่ Facebook, Instagram, Gmail, Hotmail, Garena, Discord, Canva, Outlook, Twitter, Freepik, Steam และอื่น ๆ อีกมากมาย ให้คุณพร้อมใช้งานได้ทันที ไม่ต้องเสียเวลานานนั่งสมัครเอง ราคาถูก ปลอดภัย หากมีปัญหามีทีมงานซัพพอร์ตตลอดเวลา`,
  },
  {
    title: "THXKSHOP ให้บริการอะไร ?",
    image: service3,
    desc: `THXKSHOP เราเป็นตัวแทนจำหน่ายแอพสตรีมมิ่ง, แอคเคาท์เกม, เติมเกมออนไลน์, เติมเงินโทรศัพท์, บัตรเงินสด และบริการเพิ่มเติมอื่นๆ เราเป็นเพียง "ตัวแทนจำหน่าย" เท่านั้น โดยไม่ได้มีส่วนเกี่ยวข้องกับองค์กรหรือบริษัทใด ๆ ทั้งสิ้น`,
  },
];

const ServiceSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-1 py-12 text-white font-prompt">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 flex justify-center items-center gap-2">
        "บริการของเรา"
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-6 bg-[#0f0f0f] p-6 rounded-xl border border-white/10 shadow-md hover:shadow-blue-500/10 transition"
          >
            {/* Left: Text */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-[280px] lg:w-[300px]">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg border border-white/5 shadow"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;