import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen">
            <Testimonials isPage={true} />

            {/* Additional page-specific content could go here, like a 'Work with us' CTA */}
            <div className="pb-32 px-6">
                <div className="max-w-[1400px] mx-auto bg-brand-green p-20 rounded-[60px] text-white flex flex-col md:flex-row justify-between items-center gap-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8]">
                        BE OUR NEXT <br />SUCCESS STORY.
                    </h2>
                    <a
                        href="/contact"
                        className="bg-black text-white px-12 py-8 rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
