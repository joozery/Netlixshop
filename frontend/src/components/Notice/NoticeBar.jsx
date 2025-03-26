import { FaShoppingCart } from "react-icons/fa";

const NoticeBar = () => {
  return (
    <div className="w-full bg-[#111] py-2 px-4 rounded-xl border border-gray-700 overflow-hidden">
      <div className="relative w-full h-6">
        <div className="absolute animate-marquee flex items-center gap-2 text-white text-sm font-prompt font-normal whitespace-nowrap">
          <span className="inline-block w-10" /> {/* 👈 ช่องว่างซ้าย */}
          <FaShoppingCart className="text-gray-300 min-w-[20px]" />
          <span>
            ซื้อสินค้าอัตโนมัติ 24 ชม. ไม่ต้องง้อแอดมินตอบ รองรับระบบเติมเงินผ่านพร้อมเพย์, ยืนยันสลิป และ Truewallet หากมีปัญหาการใช้งานติดต่อผ่านไลน์ Line : 861pbzaj (เปิดทำการ 08.00 - 23.59 ทุกวัน)
          </span>
          <span className="inline-block w-10" /> {/* 👈 ช่องว่างขวา */}
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;