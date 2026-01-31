import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import HorizontalServices from '../components/HorizontalServices';
import BentoStats from '../components/BentoStats';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-700">
            <SEO
                title="Innovation Redefined"
                description="Synthesizing future-forward digital solutions. We specialize in software development, web architecture, and brand intelligence."
            />
            <Hero />
            <LogoMarquee />
            <HorizontalServices />
            <BentoStats />
            <Process />
            <Testimonials />
        </div>
    );
};

export default Home;
