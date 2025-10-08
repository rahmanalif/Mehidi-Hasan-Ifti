import Navigation from '@/components/Ui/Navigation';
import HeroNew from '@/components/sections/HeroNew';
import HowICanHelp from '@/components/sections/HowICanHelp';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroNew />
      <HowICanHelp />
      <Footer />
    </main>
  );
}
