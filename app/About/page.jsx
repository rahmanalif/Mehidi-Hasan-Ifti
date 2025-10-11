import AboutMe from '@/components/sections/AboutMe';
import Timeline from '@/components/sections/Timeline';
import NewsletterSubscribe from '@/components/sections/NewsletterSubscribe';
import Footer from '@/components/sections/Footer';

export default function About() {
    return (
        <div>
            <AboutMe />
            <Timeline />
            <NewsletterSubscribe />
            <Footer />  
        </div>
    );
}