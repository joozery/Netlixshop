import bannerBg from "../../assets/banner.webp";
import logo from "../../assets/logo.png";

const Banner = () => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={bannerBg}
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0e1c2f]/90 to-transparent" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white font-prompt text-center">
        <img
          src={logo}
          alt="THXK Logo"
          className="h-24 drop-shadow-xl mb-4"
        />
        <h1 className="text-3xl font-bold tracking-widest drop-shadow-md">
          THXK-SHOP
        </h1>
      </div>
    </section>
  );
};

export default Banner;