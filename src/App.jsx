import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VibeMarquee from './components/VibeMarquee';
import ServicesSection from './components/ServicesSection';
import TrainersSection from './components/TrainersSection';
import FacilityShowcase from './components/FacilityShowcase';
import PricingSection from './components/PricingSection';
import Transformations from './components/Transformations';
import JoinForm from './components/JoinForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';
import FAQModal from './components/FAQModal';

export default function App() {
  const [selectedGoal, setSelectedGoal] = useState('Improve Strength');
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectGoal = (goalLabel) => {
    setSelectedGoal(goalLabel);
    scrollToSection('services');
  };

  const handleSelectService = (serviceTitle) => {
    if (serviceTitle.includes('Muscle')) setSelectedGoal('Build Muscle');
    else if (serviceTitle.includes('Fat Loss')) setSelectedGoal('Lose Fat');
    else if (serviceTitle.includes('Strength')) setSelectedGoal('Improve Strength');
    else setSelectedGoal('Personal Coaching');

    scrollToSection('join');
  };

  const handleSelectTrainer = (trainerName) => {
    setSelectedTrainer(trainerName);
    scrollToSection('join');
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    scrollToSection('join');
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-brand-light flex flex-col font-sans selection:bg-brand-lime selection:text-black pb-16 md:pb-0 overflow-x-hidden">
      {/* 1. Sticky Navigation & Mobile Info Hub with dedicated Close button */}
      <Navbar
        onOpenJoinModal={() => scrollToSection('join')}
        onOpenFAQ={() => setIsFaqOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1">
        {/* 1. Hero Section with Ken Burns Slideshow & Goal Quick-Selector */}
        <Hero onSelectGoal={handleSelectGoal} />

        {/* 2. Visual Contrast: High-Voltage Electric Lime Slanted Marquee */}
        <VibeMarquee theme="lime" />

        {/* 3. Core Services / "What We Provide" (Section ID: services) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Certified Coaches & Trainers Section (Section ID: trainers) */}
        <TrainersSection onSelectTrainer={handleSelectTrainer} />

        {/* 5. The Facility Experience & Equipment (Section ID: facility) */}
        <FacilityShowcase />

        {/* 6. Transparent Memberships & Pricing (Section ID: pricing) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 7. Visual Contrast: Counter-Slanted Dark Asphalt Marquee */}
        <VibeMarquee theme="dark" reverse={true} />

        {/* 8. Real Member Results & Milestone PRs (Section ID: results) */}
        <Transformations />

        {/* 9. VIP 1-Day Trial Pass Conversion Hub (Section ID: join) */}
        <JoinForm
          preselectedGoal={selectedGoal}
          preselectedTrainer={selectedTrainer}
          preselectedPlan={selectedPlan}
        />

        {/* 10. Location, Opening Hours & Map (Section ID: contact) */}
        <Contact />
      </main>

      {/* 11. Clean Footer */}
      <Footer />

      {/* Desktop-Only Floating WhatsApp Button (Hidden on Mobile to Prevent Any Overlap) */}
      <WhatsAppButton />

      {/* Mobile-Only Sticky Action Bar (Clean Side-by-Side: WhatsApp + Free 1-Day Pass) */}
      <MobileStickyBar onOpenJoin={() => scrollToSection('join')} />

      {/* FAQ Drawer Modal */}
      <FAQModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenJoin={() => scrollToSection('join')}
      />
    </div>
  );
}
