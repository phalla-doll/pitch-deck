import { ArrowRight, Globe } from 'lucide-react';

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
    <main className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-[1800px] w-full mx-auto">
        
        {/* Card 1: Series A Pitch */}
        <div className="bg-[#f2f2f0] rounded-3xl p-8 md:p-12 flex flex-col relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
          {/* Vertical Divider */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#1c1c1c]/10 hidden md:block"></div>
          
          {/* Header */}
          <div className="flex justify-between items-center text-[10px] md:text-xs font-medium tracking-widest uppercase mb-16 text-[#1c1c1c]/60 relative z-10">
            <span className="w-1/2">Series A Pitch</span>
            <span className="w-1/2 pl-8 hidden md:block">Page (N°001)</span>
          </div>
          
          {/* Top Right Number */}
          <span className="text-[#f13b22] text-7xl md:text-9xl font-bold absolute top-8 right-8 md:right-12 font-chakra leading-none">01</span>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 flex-1 relative z-10">
            <div className="flex flex-col justify-end relative md:pr-12">
              <div className="flex gap-1.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#1c1c1c]/40"></div>
                <div className="w-2 h-2 rounded-full border border-[#1c1c1c]/40"></div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c]">
                Scaling the <br />
                <span className="text-[#f13b22]">Future -</span> <br />
                of Intelligent <br />
                Automation.
              </h1>
              <span className="text-[#f13b22] font-bold text-xl absolute top-1/4 right-0 md:right-8">TM</span>
            </div>
            
            <div className="md:pl-12 flex flex-col justify-end relative">
              <span className="absolute top-0 md:top-1/4 right-0 text-[10px] md:text-xs font-medium text-[#f13b22]">©2026</span>
              <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]/50 max-w-[280px] leading-[1.8]">
                We build AI-powered workflow infrastructure that helps modern companies automate operations, reduce costs, and scale faster.
              </p>
              <div className="w-4 h-[1px] bg-[#1c1c1c]/30 mt-6"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Year Overview */}
        <div className="bg-[#f2f2f0] rounded-3xl flex flex-col relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
          {/* Horizontal Divider */}
          <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-[#1c1c1c]/10"></div>
          {/* Vertical Divider Bottom */}
          <div className="absolute top-[40%] bottom-0 left-1/2 w-[1px] bg-[#1c1c1c]/10 hidden md:block"></div>

          {/* Top Section */}
          <div className="p-8 md:p-12 h-[40%] flex flex-col">
            <div className="flex justify-between items-center text-[10px] md:text-xs font-medium tracking-widest uppercase mb-auto text-[#1c1c1c]/60">
              <span className="w-1/2">Year Overview</span>
              <span className="w-1/2 pl-8 hidden md:block">Page (N°002)</span>
            </div>
            
            <div className="flex items-center gap-6 md:gap-12 mt-8">
              <h2 className="text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold font-chakra tracking-tighter text-[#1c1c1c] leading-none">2025</h2>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#1c1c1c]/10 flex items-center justify-center text-[#f13b22] shrink-0">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h2 className="text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-light font-space tracking-tighter text-[#1c1c1c]/30 ml-auto truncate leading-none">in Nu</h2>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 flex-1 h-[60%]">
            <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 border-[#1c1c1c]/10">
              <div className="flex gap-1.5 hidden md:flex">
                <div className="w-2 h-2 rounded-full bg-[#1c1c1c]/40"></div>
                <div className="w-2 h-2 rounded-full border border-[#1c1c1c]/40"></div>
              </div>
              <div className="mt-auto">
                <h3 className="text-7xl md:text-8xl lg:text-[8rem] font-bold text-[#f13b22] font-chakra tracking-tighter leading-none mb-6">12%</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-[1px] bg-[#1c1c1c]/30"></div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]">MoM Revenue Growth</span>
                </div>
                <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]/40 leading-[1.8] max-w-[280px]">
                  We build AI-powered workflow infrastructure that helps modern companies. Our consistent month-over-month revenue growth reflects strong product-market fit.
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-end">
              <div>
                <h3 className="text-7xl md:text-8xl lg:text-[8rem] font-bold text-[#f13b22] font-chakra tracking-tighter leading-none mb-6">8.4</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-[1px] bg-[#1c1c1c]/30"></div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]">Annual Recurrin...</span>
                </div>
                <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]/40 leading-[1.8] max-w-[280px]">
                  Our annual recurring revenue demonstrates the strength of our subscription model and long-term enterprise contracts, ensuring revenue stability and visibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Conference */}
        <div className="bg-[#f2f2f0] rounded-3xl p-8 md:p-12 flex flex-col relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
          <div className="flex justify-between items-center text-[10px] md:text-xs font-medium tracking-widest uppercase mb-12 text-[#1c1c1c]/60">
            <span>Conference</span>
            <span className="text-[#1c1c1c]">©2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 flex-1">
            <div className="flex flex-col justify-between">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c]">
                Join Us in <br />
                Building <br />
                <span className="text-[#f13b22]">the Next -</span> <br />
                Automation <br />
                Leader.
              </h2>
              <div className="flex items-end gap-6 mt-12 md:mt-auto">
                <h3 className="text-7xl md:text-9xl font-bold text-[#f13b22] font-chakra tracking-tighter leading-none">04</h3>
                <div className="w-10 h-10 rounded-full border border-[#1c1c1c]/20 flex items-center justify-center text-[#f13b22] mb-2 shrink-0">
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between items-start md:items-end">
              <div className="w-full flex justify-start md:justify-end overflow-hidden">
                <Soundwave />
              </div>
              
              <div className="flex items-center gap-6 w-full max-w-[240px] md:mr-auto mt-12 md:mt-auto">
                <div className="w-12 h-12 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[#f2f2f0] shrink-0">
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <p className="text-[13px] font-medium leading-[1.3] text-[#1c1c1c]/80">
                  Silicon Valley, CA<br />
                  Investor Meetings<br />
                  Open
                </p>
              </div>

              <div className="flex gap-1.5 mt-12 md:mt-auto hidden md:flex">
                <div className="w-2 h-2 rounded-full border border-[#1c1c1c]/40"></div>
                <div className="w-2 h-2 rounded-full bg-[#1c1c1c]/40"></div>
              </div>
              
              <h3 className="text-7xl md:text-9xl font-bold font-chakra tracking-tighter leading-none mt-8 md:mt-4 text-[#1c1c1c]">2026</h3>
            </div>
          </div>
        </div>

        {/* Card 4: The Solution */}
        <div className="bg-[#f2f2f0] rounded-3xl p-8 md:p-12 flex flex-col relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
          <div className="text-[10px] md:text-xs font-medium tracking-widest uppercase mb-12 text-[#1c1c1c]/60">
            <span>The Solution</span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-space font-medium leading-[0.85] tracking-[-0.03em] text-[#1c1c1c] max-w-[90%]">
              Unlike traditional tools,<br />
              <span className="text-[#f13b22]">our solution</span> is built for<br />
              scale — secure, modern,<br />
              and enterprise-ready<br />
              from day one.
            </h2>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-[#1c1c1c]/10 pt-8 gap-8 md:gap-0">
            <span className="text-[9px] font-medium uppercase tracking-widest text-[#f13b22] border border-[#f13b22]/20 rounded-full px-4 py-1.5 shrink-0">Bottom Metrics</span>
            
            {/* Timeline graphic */}
            <div className="flex-1 w-full md:mx-12 flex items-center relative">
              <div className="absolute w-full h-[1px] bg-[#1c1c1c]/20"></div>
              <div className="w-full flex justify-between relative z-10">
                <div className="w-2 h-2 rounded-full bg-[#1c1c1c]"></div>
                <div className="w-2 h-2 rounded-full bg-[#1c1c1c]"></div>
                <div className="w-2 h-2 rounded-full bg-[#1c1c1c]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
