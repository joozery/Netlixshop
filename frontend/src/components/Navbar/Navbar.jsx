import { useState } from "react";
import { FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import RegisterModal from "../RegisterModal";
import LoginModal from "../LoginModal"; // ✅ import login modal

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // ✅ login modal state

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 md:px-10 py-3 shadow-lg font-prompt border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="TS24 Logo" className="h-12 drop-shadow-lg" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setShowLogin(true)} // ✅ เปิด Login
              className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 hover:from-white hover:to-white hover:text-black transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg text-sm"
            >
              <FaSignInAlt />
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => setShowRegister(true)}
              className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 hover:from-white hover:to-white hover:text-black transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg text-sm"
            >
              <FaUserPlus />
              สมัครสมาชิก
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col gap-2 mt-3 md:hidden animate-slideDown">
            <button
              onClick={() => {
                setShowLogin(true);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 hover:from-white hover:to-white hover:text-black transition text-sm"
            >
              <FaSignInAlt />
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => {
                setShowRegister(true);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 hover:from-white hover:to-white hover:text-black transition text-sm"
            >
              <FaUserPlus />
              สมัครสมาชิก
            </button>
          </div>
        )}
      </nav>

      {/* ✅ Register & Login Modal */}
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;