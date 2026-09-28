import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Capstone from './pages/case-studies/Capstone';
import AppaHealth from './pages/case-studies/AppaHealth';
import AiEmbodied from './pages/case-studies/AiEmbodied';
import NerdWallet from './pages/case-studies/NerdWallet';
import VRChat from './pages/case-studies/VRChat';
import AmazonAds from './pages/case-studies/AmazonAds';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/capstone" element={<Capstone />} />
          <Route path="/work/appa-health" element={<AppaHealth />} />
          <Route path="/work/aiembodied" element={<AiEmbodied />} />
          <Route path="/work/nerdwallet" element={<NerdWallet />} />
          <Route path="/work/vrchat" element={<VRChat />} />
          <Route path="/work/amazon-ads" element={<AmazonAds />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
