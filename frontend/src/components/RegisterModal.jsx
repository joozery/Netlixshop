import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SiLine } from "react-icons/si";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#111] text-white w-full max-w-md rounded-xl p-6 shadow-xl relative font-prompt">
        {/* ปุ่มปิด */}
        <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-red-500 text-xl">
          <IoClose />
        </button>

        {/* หัวข้อ */}
        <h2 className="text-center text-2xl font-semibold mb-2">“ สมัครสมาชิก ”</h2>
        <p className="text-center text-sm text-gray-400 mb-6">หน้าหลัก / สมัครสมาชิก</p>

        {/* ฟอร์ม */}
        <form className="space-y-4">
          <div>
            <label className="text-sm flex items-center gap-2 mb-1">
              <FaUser /> Username (ชื่อผู้ใช้งาน)
            </label>
            <input type="text" className="w-full rounded-md bg-black border border-gray-700 px-4 py-2 outline-none" />
          </div>

          <div>
            <label className="text-sm flex items-center gap-2 mb-1">
              <FaEnvelope /> Email (อีเมล)
            </label>
            <input type="email" className="w-full rounded-md bg-black border border-gray-700 px-4 py-2 outline-none" />
          </div>

          <div>
            <label className="text-sm flex items-center gap-2 mb-1">
              <FaLock /> Password (รหัสผ่าน)
            </label>
            <input type="password" className="w-full rounded-md bg-black border border-gray-700 px-4 py-2 outline-none" />
          </div>

          <div>
            <label className="text-sm flex items-center gap-2 mb-1">
              <FaLock /> Password Confirm (ยืนยันรหัสผ่าน)
            </label>
            <input type="password" className="w-full rounded-md bg-black border border-gray-700 px-4 py-2 outline-none" />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-white text-black font-semibold rounded-md py-2 hover:bg-gray-200 transition"
          >
            ✅ สมัครสมาชิก
          </button>

          <button
            type="button"
            className="w-full border border-green-500 text-green-400 font-semibold rounded-md py-2 flex items-center justify-center gap-2 hover:bg-green-500/10"
          >
            <SiLine className="text-lg" />
            สมัครสมาชิกด้วย LINE
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;