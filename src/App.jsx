import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CaseStudyAppa from './pages/CaseStudyAppa'
import CaseStudyUW from './pages/CaseStudyUW'
import CaseStudyAmazon from './pages/CaseStudyAmazon'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/appa-health" element={<CaseStudyAppa />} />
        <Route path="/work/uw-research" element={<CaseStudyUW />} />
        <Route path="/work/amazon-ads" element={<CaseStudyAmazon />} />
      </Routes>
    </BrowserRouter>
  )
}
