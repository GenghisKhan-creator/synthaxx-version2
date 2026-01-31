import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="Client Stories"
                description="Trust earned through technical excellence. See what industry leaders are saying about their partnership with Synthaxx Solutions."
            />
            <Testimonials isPage={true} />

            {/* Additional page-specific content could go here, like a 'Work with us' CTA */}
            <div className="pb-20 sm:pb-32 px-4 sm:px-6">
                <div className="max-w-[1400px] mx-auto bg-brand-green p-8 sm:p-12 md:p-20 rounded-[32px] md:rounded-[60px] text-white flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] md:leading-[0.8]">
                        BE OUR NEXT <br />SUCCESS STORY.
                    </h2>
                    <Link
                        to="/contact"
                        className="w-full md:w-auto bg-black text-white px-8 sm:px-12 py-5 sm:py-8 rounded-full font-bold text-lg sm:text-xl hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap flex justify-center"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
