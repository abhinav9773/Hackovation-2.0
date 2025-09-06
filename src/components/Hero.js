import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-900 to-blue-900">
      {/* Arena floor pattern */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-800/50 via-black/0 to-transparent" />

      {/* Floating glowing orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      {/* Spark streaks */}
      <div className="absolute inset-0">
        <div className="w-[2px] h-full bg-pink-400/30 absolute left-1/4 animate-streak"></div>
        <div className="w-[2px] h-full bg-yellow-400/30 absolute left-1/2 animate-streak animation-delay-1000"></div>
        <div className="w-[2px] h-full bg-blue-400/30 absolute left-3/4 animate-streak animation-delay-2000"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-2xl mb-4 animate-fadeIn">
          ⚔ Hackovation 2.0
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl animate-fadeIn animation-delay-500">
          36 Hours of Coding, Creativity & Clash Royale Vibes! <br />
          Form your team, compete & conquer.
        </p>
        <button className="px-10 py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn animation-delay-1000">
          Register Now
        </button>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%,100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.3; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 10s ease-in-out infinite;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          @keyframes streak {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-streak {
            animation: streak 5s linear infinite;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
