import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Cpu,
  BarChart,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";

import nexusCoreImg from "../assets/generated/nexus_core.png";
import vividUiImg from "../assets/generated/vivid_ui.png";
import synthaxxV2Img from "../assets/generated/synthaxx_v2.png";
import nexusCoreDetailImg from "../assets/generated/nexus_core_detail.png";
import vividUiDetailImg from "../assets/generated/vivid_ui_detail.png";
import synthaxxV2DetailImg from "../assets/generated/synthaxx_v2_detail.png";
import quantumLedgerImg from "../assets/generated/quantum_ledger.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const container = useRef();

  // Mock project data - normally this would come from an API or a shared constant
  const projects = {
    "nexus-core": {
      title: "Necessary Aid Alliance",
      category: "Web Development",
      year: "2025",
      image: nexusCoreImg,
      detailImage: nexusCoreDetailImg,
      stats: [
        {
          label: "Performance",
          value: "+45%",
          icon: <Cpu className="text-brand-green" />,
        },
        {
          label: "Scale",
          value: "10M+",
          icon: <BarChart className="text-brand-green" />,
        },
        {
          label: "Uptime",
          value: "99.9%",
          icon: <Globe className="text-brand-green" />,
        },
      ],
      description:
        "Necessary Aid Alliance is a youth-led NGO dedicated to driving social change and empowering marginalized communities. Their website serves as a digital hub for advocacy, showcasing community-driven initiatives and providing a platform for volunteers and partners to connect with their mission of sustainable development.",
      liveUrl: "https://necessary-v2.onrender.com/",
      caseStudyUrl: "#",
    },
    "vivid-ui": {
      title: "History Archive",
      category: "Web Development",
      year: "2026",
      image: vividUiImg,
      detailImage: vividUiDetailImg,
      stats: [
        {
          label: "Load Time",
          value: "-60%",
          icon: <Cpu className="text-brand-green" />,
        },
        {
          label: "Conversion",
          value: "+22%",
          icon: <BarChart className="text-brand-green" />,
        },
        {
          label: "Accessibility",
          value: "100",
          icon: <Globe className="text-brand-green" />,
        },
      ],
      description:
        "This platform is a bespoke history-keeping system engineered for longevity and rapid scaling. Built with React and Tailwind CSS, the site prioritizes accessible interaction patterns and optimized rendering performance. By integrating GSAP for fluid, high-performance motion, we’ve ensured that the preservation of history is not just functional, but a seamless and immersive user experience.",
      liveUrl: "https://upper-west-arc.onrender.com/",
      caseStudyUrl: "#",
    },
    "synthaxx-v2": {
      title: "FRN™",
      category: "Web Development",
      year: "2026",
      image: synthaxxV2Img,
      detailImage: synthaxxV2DetailImg,
      stats: [
        {
          label: "Brand Recall",
          value: "85%",
          icon: <Cpu className="text-brand-green" />,
        },
        {
          label: "Engagement",
          value: "+40%",
          icon: <BarChart className="text-brand-green" />,
        },
        {
          label: "Assets",
          value: "500+",
          icon: <Globe className="text-brand-green" />,
        },
      ],
      description:
        "A meticulous visual language balancing technical precision with artistic avant-garde. Built for the next era of fashion retail, the FRM platform utilizes a high-performance stack of React, Tailwind CSS, and GSAP to create a state-of-the-art shopping experience. It is a design system engineered for rapid scaling, where optimized rendering meets high-fashion aesthetics.",
      liveUrl: "https://fashion-app-fv4k.onrender.com/",
      caseStudyUrl: "#",
    },
    "quantum-ledger": {
      title: "Quantum Ledger",
      category: "Fintech Systems",
      year: "2025",
      image: quantumLedgerImg,
      detailImage: quantumLedgerImg,
      stats: [
        {
          label: "Tx / Sec",
          value: "100K",
          icon: <Cpu className="text-brand-green" />,
        },
        {
          label: "Security",
          value: "L1",
          icon: <BarChart className="text-brand-green" />,
        },
        {
          label: "Nodes",
          value: "500+",
          icon: <Globe className="text-brand-green" />,
        },
      ],
      description:
        "A decentralized consensus engine built for high-frequency financial transitions. Quantum Ledger provides the backbone for next-generation digital assets with military-grade encryption.",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
  };

  const project = projects[id] || projects["nexus-core"];

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      const tl = gsap.timeline();
      tl.from(".project-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".project-image-view",
        {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.5",
      );

      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="pt-32 pb-20 px-4 min-h-screen">
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
      />
      <div className="max-w-[1400px] mx-auto">
        {/* Header Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Link
            to="/portfolio"
            data-cursor="BACK"
            className="flex items-center gap-2 font-bold uppercase text-xs hover:text-brand-green transition-colors"
          >
            <ArrowLeft size={16} /> Portfolio
          </Link>
          <div className="text-right">
            {/* <span className="block text-[10px] font-bold uppercase tracking-widest text-black/40">
              Project // {id.toUpperCase().replace("-", "_")}
            </span> */}
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-green">
              EST. {project.year}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
          <div>
            <h1 className="project-hero-text text-[10vw] md:text-[120px] font-bold leading-[0.8] tracking-tighter uppercase mb-8">
              {project.title.split(" ")[0]}
              <br />
              <span className="text-brand-green">
                {project.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="project-hero-text text-xl font-bold uppercase text-black/40 max-w-lg leading-tight">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 uppercase">
            <div className="px-6 py-3 border border-black/10 text-black/40 rounded-full text-xs font-bold tracking-widest">
              {project.category}
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-black rounded-full text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2"
            >
              View Project Live <Globe size={14} />
            </a>
            <a
              href={project.caseStudyUrl}
              className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-brand-green transition-all"
            >
              Full Case Study <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Main Image */}
        <div className="project-image-view aspect-[21/9] w-full border border-black rounded-[40px] overflow-hidden mb-32">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid md:grid-cols-3 gap-1 bg-black border border-black rounded-[40px] overflow-hidden mb-32">
          {project.stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card bg-white p-16 flex flex-col justify-between aspect-square group"
            >
              <div className="p-4 bg-accent-green-mint rounded-2xl w-fit group-hover:bg-accent-green-deep group-hover:text-white transition-colors duration-500">
                {stat.icon}
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-black/40 mb-2">
                  {stat.label}
                </div>
                <div className="text-7xl font-bold tracking-tighter group-hover:text-brand-green transition-colors">
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-green mb-6 block">
              Module_Technical_Specs
            </span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
              Technical <br />
              <span className="text-brand-green">Deep Dive.</span>
            </h2>
            <p className="text-lg font-bold uppercase text-black/60 leading-relaxed mb-10">
              Our architecture is designed for extreme durability. We
              implemented a multi-layered verification system that ensures data
              integrity at every node, resulting in a system that doesn't just
              work—it prevails.
            </p>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-4 border-b border-black/10 group cursor-pointer hover:border-brand-green transition-colors"
                >
                  <span className="text-xs font-black text-brand-green">
                    0{item}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest group-hover:text-black transition-colors">
                    Architecture_Audit_v1.0
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto opacity-20 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-square rounded-[40px] overflow-hidden border border-black group">
            <img
              src={project.detailImage}
              alt="Technical Detail"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border border-black rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-accent-green-mint">
          <div className="text-5xl font-bold uppercase tracking-tighter">
            NEXT PROJECT
          </div>
          <Link
            to="/portfolio"
            data-cursor="VIEW ALL"
            className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-brand-green transition-all uppercase group flex items-center gap-4"
          >
            Back to gallery{" "}
            <ArrowUpRight
              size={24}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
