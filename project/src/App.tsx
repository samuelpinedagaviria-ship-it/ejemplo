import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsRaices from '@/components/WhatIsRaices';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import AppPreview from '@/components/AppPreview';
import HowItWorks from '@/components/HowItWorks';
import DownloadSection from '@/components/DownloadSection';
import QrSection from '@/components/QrSection';
import CommandCenter from '@/components/CommandCenter';
import AppVsCommandCenter from '@/components/AppVsCommandCenter';
import Security from '@/components/Security';
import Screenshots from '@/components/Screenshots';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsRaices />
        <Mission />
        <Features />
        <AppPreview />
        <HowItWorks />
        <DownloadSection />
        <QrSection />
        <CommandCenter />
        <AppVsCommandCenter />
        <Security />
        <Screenshots />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
