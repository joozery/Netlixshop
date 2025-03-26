import {
    FaHome,
    FaRocket,
    FaWallet,
    FaGamepad,
    FaCreditCard,
    FaPhoneAlt,
    FaWifi,
    FaEnvelope,
    FaFileAlt,
    FaFileContract,
    FaChevronLeft,
    FaChevronRight,
  } from "react-icons/fa";
  import { useState } from "react";
  
  const SidebarPage = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-prompt shadow-lg transition-all duration-300 p-4 flex flex-col`}
      >
        {/* Toggle button */}
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <h1 className="text-lg font-semibold">Menu</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white transition"
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>
  
        {/* Menu Sections */}
        <nav className="flex-1 space-y-2 text-sm">
  <MenuItem icon={<FaHome className="text-green-400" />} label="หน้าหลัก" collapsed={collapsed} active />
  <MenuItem icon={<FaRocket className="text-purple-400" />} label="แอพสตรีมมิ่ง" collapsed={collapsed} />
  <MenuItem icon={<FaWallet className="text-yellow-300" />} label="แอคเคาท์" collapsed={collapsed} />
  <MenuItem icon={<FaGamepad className="text-red-400" />} label="เติมเกมออนไลน์" collapsed={collapsed} />
  <MenuItem icon={<FaCreditCard className="text-blue-400" />} label="บัตรเติมเงิน" collapsed={collapsed} />
  <MenuItem icon={<FaPhoneAlt className="text-lime-400" />} label="เติมเงินโทรศัพท์" collapsed={collapsed} />
  <MenuItem icon={<FaWifi className="text-pink-400" />} label="เติมเน็ต-โปรเสริม" collapsed={collapsed} />

  <hr className="my-4 border-gray-700" />

  <MenuItem icon={<FaEnvelope className="text-rose-400" />} label="ช่องทางการติดต่อ" collapsed={collapsed} />
  <MenuItem icon={<FaFileAlt className="text-cyan-300" />} label="เงื่อนไขการใช้บริการ" collapsed={collapsed} />
  <MenuItem icon={<FaFileContract className="text-teal-300" />} label="นโยบายความเป็นส่วนตัว" collapsed={collapsed} />
</nav>
      </aside>
    );
  };
  
  const MenuItem = ({ icon, label, active, collapsed }) => {
    return (
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
          active
            ? "bg-white/10 text-white font-medium"
            : "hover:bg-white/5 text-gray-300"
        }`}
      >
        <div className="text-lg">{icon}</div>
        {!collapsed && <span className="truncate">{label}</span>}
      </div>
    );
  };
  
  export default SidebarPage;