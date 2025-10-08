import Navigation from '@/components/ui/Navigation';
import HeroNew from '@/components/sections/HeroNew';
import HowICanHelp from '@/components/sections/HowICanHelp';
import AboutMe from '@/components/sections/AboutMe';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroNew />
      <HowICanHelp />
      <AboutMe />
      <Footer />
    </main>
  );
}
