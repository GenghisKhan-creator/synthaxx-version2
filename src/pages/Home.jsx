import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import HorizontalServices from '../components/HorizontalServices';
import BentoStats from '../components/BentoStats';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-700">
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
