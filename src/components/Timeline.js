import { useRef, useEffect, useState } from "react";

const timelineData = [
  { time: "0h - 1h", title: "Registration & Kickoff" },
  { time: "1h - 2h", title: "Idea Pitching" },
  { time: "2h - 18h", title: "Hacking Begins" },
  { time: "12h & 24h", title: "Checkpoints / Mini Demos" },
  { time: "36h", title: "Submission Deadline" },
  { time: "36h - 38h", title: "Judging & Awards" },
];

export default function DynamicTimelineBigger() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const container = containerRef.current;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      const scrollInSection = Math.min(
        Math.max(scrollY - sectionTop, 0),
        sectionHeight - window.innerHeight
      );
      const maxTranslate = container.scrollWidth - window.innerWidth;

      const translateX =
        (scrollInSection / (sectionHeight - window.innerHeight)) * maxTranslate;
      container.style.transform = `translateX(-${translateX}px)`;

      const progress = translateX / maxTranslate;
      const index = Math.round(progress * (timelineData.length - 1));
      setActiveIndex(index);

      setProgressWidth(progress * container.scrollWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[220vh]">
      <div className="sticky top-0 left-0 w-full h-screen flex items-center overflow-hidden">
        <div
          ref={containerRef}
          className="flex items-center space-x-24 px-12 transition-transform duration-0"
        >
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Marker */}
              <div
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  index <= activeIndex
                    ? "bg-blue-400 scale-125 shadow-lg"
                    : "bg-white/50"
                }`}
              ></div>
              {/* Connecting line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute top-3 left-7 w-40 h-1 bg-white/30"></div>
              )}
              {/* Card */}
              <div
                className={`mt-4 p-6 min-w-[200px] text-center rounded-2xl transition-all duration-500 transform ${
                  index === activeIndex
                    ? "bg-white/20 backdrop-blur-md shadow-xl scale-110 translate-y-0"
                    : "bg-white/10 backdrop-blur-sm scale-95 translate-y-4 opacity-70"
                }`}
              >
                <p className="text-sm text-gray-200">{item.time}</p>
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Progress line */}
        <div
          className="absolute bottom-24 left-12 h-1 bg-blue-400/50"
          style={{ width: progressWidth }}
        ></div>
      </div>
    </section>
  );
}
