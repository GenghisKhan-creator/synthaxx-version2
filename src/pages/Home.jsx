import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import HorizontalServices from '../components/HorizontalServices';
import Process from '../components/Process';

const Home = () => {
    return (
        <div className="animate-in fade-in duration-700">
            <Hero />
            <LogoMarquee />
            <HorizontalServices />
            <Process />
        </div>
    );
};

export default Home;
