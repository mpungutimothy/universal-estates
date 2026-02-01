import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import PreLoader from './components/PreLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import SiteUpdates from './pages/SiteUpdates';
import CSR from './pages/CSR';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AppProvider>
      <BrowserRouter>
        {loading && <PreLoader onComplete={() => setLoading(false)} />}
        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:slug" element={<PropertyDetail />} />
              <Route path="/site-updates" element={<SiteUpdates />} />
              <Route path="/csr" element={<CSR />} />
              {/* <Route path="/team" element={<Team />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <FloatingButtons />
          </>
        )}
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
