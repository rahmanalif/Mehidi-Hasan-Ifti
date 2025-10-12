import HeroNew from '@/components/sections/HeroNew';
import HowICanHelp from '@/components/sections/HowICanHelp';
import AboutMe from '@/components/sections/AboutMe';
import Footer from '@/components/sections/Footer';
import ProfessionalMe from '@/components/sections/ProfessionalMe';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroNew />
      <HowICanHelp />
      <AboutMe />
      <ProfessionalMe />
      <Footer />
    </main>
  );
}
