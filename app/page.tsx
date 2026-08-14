import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Mission from '@/components/sections/Mission';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Events from '@/components/sections/Events';
import Community from '@/components/sections/Community';
import WhyJoin from '@/components/sections/WhyJoin';
import WhoShouldApply from '@/components/sections/WhoShouldApply';
import ApplyNow from '@/components/sections/ApplyNow';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <WhatWeDo />
      <Events />
      <Community />
      <WhyJoin />
      <WhoShouldApply />
      <ApplyNow />
      <FinalCTA />
      <Footer />
    </main>
  );
}
