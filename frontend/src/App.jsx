import Navbar from "./components/Navbar/Navbar";
import SidebarPage from "./pages/SidebarPage";
import Home from "./pages/Home"; // ✅ import หน้า Home

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      {/* Navbar ด้านบน */}
      <Navbar />

      {/* Layout แบ่ง Sidebar กับ Main Content */}
      <div className="flex flex-1">
        {/* Sidebar ซ้าย */}
        <SidebarPage />

        {/* เนื้อหาหลัก */}
        <div className="flex-1 text-white">
          <Home /> {/* ✅ เรียกหน้า Home มาแสดงตรงนี้ */}
        </div>
      </div>
    </div>
  );
}

export default App;