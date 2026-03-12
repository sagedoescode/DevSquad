import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';
import { Blog } from './components/Blog';
import { BookingModal } from './components/BookingModal';
import { motion, AnimatePresence } from 'framer-motion';

type View = 'home' | 'blog';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="bg-[#030814] min-h-screen text-white font-sans selection:bg-[#6037ff]/30 selection:text-white overflow-x-hidden">
      <Navbar currentView={currentView} onNavigate={setCurrentView} onOpenBooking={openBooking} />

      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onOpenBooking={openBooking} />
              <Features />
              <HowItWorks />
              <Pricing onOpenBooking={openBooking} />
              <Testimonials />
              <FAQ />
              <CallToAction onOpenBooking={openBooking} />
            </motion.div>
          ) : (
            <motion.div
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Blog />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentView} />
      <FloatingSupport onOpenBooking={openBooking} />

      <AnimatePresence>
        {isBookingOpen && (
            <BookingModal
                isOpen={isBookingOpen}
                onClose={closeBooking}
            />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;