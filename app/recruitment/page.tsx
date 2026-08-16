import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import RecruitmentHero from '@/components/recruitment/RecruitmentHero';
import OpenPositions from '@/components/recruitment/OpenPositions';
import RecruitmentProcess from '@/components/recruitment/RecruitmentProcess';
import RecruitmentCTA from '@/components/recruitment/RecruitmentCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Recruitment | Startup Grind KIIT",
  description: "Join Startup Grind KIIT. Explore open positions across Tech, Marketing, Research, Partnerships, Content, Design and Video.",
  keywords: "Startup Grind KIIT recruitment, join startup grind, KIIT student opportunities, startup community positions",
  openGraph: {
    title: "Recruitment | Startup Grind KIIT",
    description: "Join Startup Grind KIIT. Explore open positions across Tech, Marketing, Research, Partnerships, Content, Design and Video.",
    type: "website",
  },
};

export default function RecruitmentPage() {
  return (
    <main>
      <Navbar />
      <RecruitmentHero />
      <OpenPositions />
      <RecruitmentProcess />
      <RecruitmentCTA />
      <Footer />
    </main>
  );
}
