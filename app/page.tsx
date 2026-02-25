"use client";

import { ArrowRight, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const Parallax = ({ children, offset = 50, className }: { children: React.ReactNode, offset?: number, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

const HeroParallax = ({ children, offset = 50, className }: { children: React.ReactNode, offset?: number, className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

const Soundwave = () => {
  const bars = [
    20, 35, 15, 50, 70, 30, 80, 40, 60, 20, 90, 50, 30, 70, 40, 60, 20, 80, 30, 50, 20, 70, 40, 60, 30, 50, 15, 35, 20,
    30, 45, 20, 60, 80, 40, 90, 50, 70, 30, 100, 60, 40, 80, 50, 70, 30, 90, 40, 60, 30, 80, 50, 70, 40, 60, 20, 45, 30
  ];
  return (
    <div className="flex items-center gap-[2px] h-16 text-[#f13b22]">
      {bars.map((h, i) => (
        <div key={i} className="w-[2px] bg-current rounded-full" style={{ height: `${h}%` }}></div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <div className="w-full flex flex-col">
        
        {/* Section 1: Series A Pitch */}
        <section className="bg-[#f2f2f0] p-8 md:p-16 lg:p-24 flex flex-col relative min-h-screen overflow-hidden">
          {/* Vertical Divider */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#1c1c1c]/10 hidden md:block"></div>
          
          {/* Header */}
          <div className="flex justify-between items-center text-[10px] md:text-sm font-medium tracking-widest uppercase mb-16 text-[#1c1c1c]/60 relative z-10">
            <span className="w-1/2">Series A Pitch</span>
            <span className="w-1/2 pl-8 hidden md:block">Page (N°001)</span>
          </div>
          
          {/* Top Right Number */}
          <HeroParallax offset={200} className="absolute top-8 right-8 md:right-16 lg:right-24">
            <span className="text-[#f13b22] text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold font-chakra leading-none">01</span>
          </HeroParallax>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-0 flex-1 relative z-10 mt-auto">
            <div className="flex flex-col justify-end relative md:pr-16 lg:pr-24">
              <div className="flex gap-1.5 mb-8 sm:mb-12">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1c]/40"></div>
                <div className="w-2.5 h-2.5 rounded-full border border-[#1c1c1c]/40"></div>
              </div>
              <HeroParallax offset={100}>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c]">
                  Scaling the <br />
                  <span className="text-[#f13b22]">Future -</span> <br />
                  of Intelligent <br />
                  Automation.
                </h1>
              </HeroParallax>
              <span className="text-[#f13b22] font-bold text-xl sm:text-2xl absolute top-[5%] sm:top-[20%] right-0 md:right-8 lg:right-16">TM</span>
            </div>
            
            <div className="md:pl-16 lg:pl-24 flex flex-col justify-end relative">
              <span className="absolute top-0 md:top-[20%] right-0 text-[10px] sm:text-xs md:text-sm font-medium text-[#f13b22]">©2026</span>
              <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#1c1c1c]/50 max-w-[320px] leading-[1.8] mb-6 sm:mb-8 mt-8 md:mt-0">
                We build AI-powered workflow infrastructure that helps modern companies automate operations, reduce costs, and scale faster.
              </p>
              <div className="flex items-center gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 bg-[#f13b22] text-[#f2f2f0] px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#d1331d] transition-colors">
                  Request a Demo
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </a>
              </div>
              <div className="w-6 h-[1px] bg-[#1c1c1c]/30 mt-8"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Year Overview */}
        <section className="bg-[#f2f2f0] border-t border-[#1c1c1c]/20 flex flex-col relative min-h-screen overflow-hidden">
          {/* Horizontal Divider */}
          <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-[#1c1c1c]/10"></div>
          {/* Vertical Divider Bottom */}
          <div className="absolute top-[40%] bottom-0 left-1/2 w-[1px] bg-[#1c1c1c]/10 hidden md:block"></div>

          {/* Top Section */}
          <div className="p-8 md:p-16 lg:p-24 h-[40%] flex flex-col">
            <div className="flex justify-between items-center text-[10px] md:text-sm font-medium tracking-widest uppercase mb-auto text-[#1c1c1c]/60">
              <span className="w-1/2">Year Overview</span>
              <span className="w-1/2 pl-8 hidden md:block">Page (N°002)</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 md:gap-16 mt-8 sm:mt-12">
              <Parallax offset={150}>
                <h2 className="text-6xl sm:text-7xl md:text-[10rem] lg:text-[14rem] font-bold font-chakra tracking-tighter text-[#1c1c1c] leading-none">2025</h2>
              </Parallax>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full border border-[#1c1c1c]/10 flex items-center justify-center text-[#f13b22] shrink-0">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
              <Parallax offset={-100} className="sm:ml-auto">
                <h2 className="text-6xl sm:text-7xl md:text-[10rem] lg:text-[14rem] font-light font-space tracking-tighter text-[#1c1c1c]/30 truncate leading-none">in Nu</h2>
              </Parallax>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 flex-1 h-[60%]">
            <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-between border-b md:border-b-0 border-[#1c1c1c]/10">
              <div className="flex gap-1.5 hidden md:flex">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1c]/40"></div>
                <div className="w-2.5 h-2.5 rounded-full border border-[#1c1c1c]/40"></div>
              </div>
              <div className="mt-8 md:mt-auto">
                <Parallax offset={180}>
                  <h3 className="text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold text-[#f13b22] font-chakra tracking-tighter leading-none mb-4 sm:mb-8">12%</h3>
                </Parallax>
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-8">
                  <div className="w-6 h-[1px] bg-[#1c1c1c]/30"></div>
                  <span className="text-xs font-medium uppercase tracking-widest text-[#1c1c1c]">MoM Revenue Growth</span>
                </div>
                <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#1c1c1c]/40 leading-[1.8] max-w-[320px]">
                  We build AI-powered workflow infrastructure that helps modern companies. Our consistent month-over-month revenue growth reflects strong product-market fit.
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-end">
              <div className="mt-8 md:mt-0">
                <Parallax offset={120}>
                  <h3 className="text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold text-[#f13b22] font-chakra tracking-tighter leading-none mb-4 sm:mb-8">8.4</h3>
                </Parallax>
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-8">
                  <div className="w-6 h-[1px] bg-[#1c1c1c]/30"></div>
                  <span className="text-xs font-medium uppercase tracking-widest text-[#1c1c1c]">Annual Recurrin...</span>
                </div>
                <p className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#1c1c1c]/40 leading-[1.8] max-w-[320px]">
                  Our annual recurring revenue demonstrates the strength of our subscription model and long-term enterprise contracts, ensuring revenue stability and visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Conference */}
        <section className="bg-[#f2f2f0] border-t border-[#1c1c1c]/20 p-8 md:p-16 lg:p-24 flex flex-col relative min-h-screen overflow-hidden">
          <div className="flex justify-between items-center text-[10px] md:text-sm font-medium tracking-widest uppercase mb-16 text-[#1c1c1c]/60">
            <span>Conference</span>
            <span className="text-[#1c1c1c]">©2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-12 flex-1">
            <div className="flex flex-col justify-between">
              <Parallax offset={120}>
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c]">
                  Join Us in <br />
                  Building <br />
                  <span className="text-[#f13b22]">the Next -</span> <br />
                  Automation <br />
                  Leader.
                </h2>
              </Parallax>
              <div className="flex items-end gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-auto">
                <Parallax offset={200}>
                  <h3 className="text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold text-[#f13b22] font-chakra tracking-tighter leading-none">04</h3>
                </Parallax>
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border border-[#1c1c1c]/20 flex items-center justify-center text-[#f13b22] mb-2 sm:mb-4 shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between items-start md:items-end">
              <div className="w-full flex justify-start md:justify-end overflow-hidden">
                <Soundwave />
              </div>
              
              <div className="flex items-center gap-6 sm:gap-8 w-full max-w-[300px] md:mr-auto mt-12 sm:mt-16 md:mt-auto">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[#f2f2f0] shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium leading-[1.3] text-[#1c1c1c]/80">
                  Silicon Valley, CA<br />
                  Investor Meetings<br />
                  Open
                </p>
              </div>

              <div className="flex gap-1.5 mt-12 sm:mt-16 md:mt-auto hidden md:flex">
                <div className="w-2.5 h-2.5 rounded-full border border-[#1c1c1c]/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1c]/40"></div>
              </div>
              
              <Parallax offset={150} className="mt-8 sm:mt-12 md:mt-4">
                <h3 className="text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold font-chakra tracking-tighter leading-none text-[#1c1c1c]">2026</h3>
              </Parallax>
            </div>
          </div>
        </section>

        {/* Section 4: The Solution */}
        <section className="bg-[#f2f2f0] border-t border-[#1c1c1c]/20 p-8 md:p-16 lg:p-24 flex flex-col relative min-h-screen overflow-hidden">
          <div className="text-[10px] md:text-sm font-medium tracking-widest uppercase mb-16 text-[#1c1c1c]/60">
            <span>The Solution</span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <Parallax offset={120}>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c] max-w-full md:max-w-[90%]">
                Unlike traditional tools,<br />
                <span className="text-[#f13b22]">our solution</span> is built for<br />
                scale — secure, modern,<br />
                and enterprise-ready<br />
                from day one.
              </h2>
            </Parallax>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-[#1c1c1c]/10 pt-12 gap-12 md:gap-0">
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#f13b22] border border-[#f13b22]/20 rounded-full px-6 py-2 shrink-0">Bottom Metrics</span>
            
            {/* Timeline graphic */}
            <div className="flex-1 w-full md:mx-16 flex items-center relative">
              <div className="absolute w-full h-[1px] bg-[#1c1c1c]/20"></div>
              <div className="w-full flex justify-between relative z-10">
                <div className="w-3 h-3 rounded-full bg-[#1c1c1c]"></div>
                <div className="w-3 h-3 rounded-full bg-[#1c1c1c]"></div>
                <div className="w-3 h-3 rounded-full bg-[#1c1c1c]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testimonials */}
        <section className="bg-[#f2f2f0] border-t border-[#1c1c1c]/20 p-8 md:p-16 lg:p-24 flex flex-col relative min-h-screen overflow-hidden">
          <div className="flex justify-between items-center text-[10px] md:text-sm font-medium tracking-widest uppercase mb-16 text-[#1c1c1c]/60">
            <span>Testimonials</span>
            <span className="hidden md:block">Page (N°005)</span>
          </div>

          <div className="flex flex-col mb-12 sm:mb-16 md:mb-24">
            <Parallax offset={100}>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c]">
                Trusted by <br />
                <span className="text-[#f13b22]">Industry Leaders.</span>
              </h2>
            </Parallax>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 flex-1">
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between border-t border-[#1c1c1c]/10 pt-8">
              <div className="mb-8">
                <span className="text-6xl text-[#f13b22] font-chakra leading-none">"</span>
                <p className="text-sm md:text-base font-medium leading-[1.6] text-[#1c1c1c]/80 mt-4">
                  The automation infrastructure provided by this platform has completely transformed our operational efficiency. We've seen a 40% reduction in manual tasks within the first quarter.
                </p>
              </div>
              <div>
                <div className="w-6 h-[1px] bg-[#1c1c1c]/30 mb-4"></div>
                <h4 className="text-lg font-bold text-[#1c1c1c] font-space">Sarah Jenkins</h4>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#f13b22]">CTO, TechFlow Inc.</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between border-t border-[#1c1c1c]/10 pt-8">
              <div className="mb-8">
                <span className="text-6xl text-[#f13b22] font-chakra leading-none">"</span>
                <p className="text-sm md:text-base font-medium leading-[1.6] text-[#1c1c1c]/80 mt-4">
                  Secure, scalable, and incredibly intuitive. It's rare to find an enterprise-ready solution that deploys this quickly without compromising on compliance or performance.
                </p>
              </div>
              <div>
                <div className="w-6 h-[1px] bg-[#1c1c1c]/30 mb-4"></div>
                <h4 className="text-lg font-bold text-[#1c1c1c] font-space">Marcus Chen</h4>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#f13b22]">VP of Engineering, Nexus</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between border-t border-[#1c1c1c]/10 pt-8">
              <div className="mb-8">
                <span className="text-6xl text-[#f13b22] font-chakra leading-none">"</span>
                <p className="text-sm md:text-base font-medium leading-[1.6] text-[#1c1c1c]/80 mt-4">
                  Their AI-powered workflows allowed us to scale our customer success operations globally without proportionally increasing our headcount. A true game-changer.
                </p>
              </div>
              <div>
                <div className="w-6 h-[1px] bg-[#1c1c1c]/30 mb-4"></div>
                <h4 className="text-lg font-bold text-[#1c1c1c] font-space">Elena Rodriguez</h4>
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#f13b22]">Director of Ops, GlobalScale</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1c1c1c] text-[#f2f2f0] p-8 md:p-16 lg:p-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-space font-medium tracking-[-0.03em]">Intelligent<br />Automation.</h2>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#f2f2f0]/60">
              <a href="#" className="hover:text-[#f13b22] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#f13b22] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#f13b22] transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-8">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#f2f2f0]/20 flex items-center justify-center hover:border-[#f13b22] hover:text-[#f13b22] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#f2f2f0]/20 flex items-center justify-center hover:border-[#f13b22] hover:text-[#f13b22] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#f2f2f0]/40">©2026 Intelligent Automation. All rights reserved.</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
