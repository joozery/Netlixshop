import { FaUser, FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SiLine } from "react-icons/si";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#111] text-white w-full max-w-md rounded-xl p-6 shadow-xl relative font-prompt">
        {/* ปุ่มปิด */}
        <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-red-500 text-xl">
          <IoClose />
        </button>

        {/* หัวข้อ */}
        <h2 className="text-center text-2xl font-semibold mb-2">“ เข้าสู่ระบบ ”</h2>
        <p className="text-center text-sm text-gray-400 mb-6">หน้าหลัก / เข้าสู่ระบบ</p>

        {/* ฟอร์ม Login */}
        <form className="space-y-4">
          <div>
            <label className="text-sm flex items-center gap-2 mb-1">
              <FaUser /> Username หรือ Email
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-black border border-gray-700 px-4 py-2 outline-none"
              placeholder="กรอกชื่อผู้ใช้หรืออีเมล"
            />
          </div>

          <div>
            <label className="text-sm flex items-center gap-2 mb-1">
              <FaLock /> Password
            </label>
            <input
              type="password"
              className="w-full rounded-md bg-black border border-gray-700 px-4 py-2 outline-none"
              placeholder="กรอกรหัสผ่าน"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-white text-black font-semibold rounded-md py-2 hover:bg-gray-200 transition"
          >
            ✅ เข้าสู่ระบบ
          </button>

          <button
            type="button"
            className="w-full border border-green-500 text-green-400 font-semibold rounded-md py-2 flex items-center justify-center gap-2 hover:bg-green-500/10"
          >
            <SiLine className="text-lg" />
            เข้าสู่ระบบด้วย LINE
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;