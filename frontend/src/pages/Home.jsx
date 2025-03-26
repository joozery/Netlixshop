import Banner from "../components/Banner/Banner";
import NoticeBar from "../components/Notice/NoticeBar";
import StreamingSection from "../components/StreamingSection/StreamingSection";

const Home = () => {
  return (
    <div className="space-y-6">
      <Banner />

      <div className="px-4 md:px-8 lg:px-12">
        <NoticeBar />

        {/* ✅ ปรับเฉพาะ StreamingSection */}
        <div className="mt-6 rounded-xl space-y-6">
          <StreamingSection />
        </div>
      </div>
    </div>
  );
};

export default Home;