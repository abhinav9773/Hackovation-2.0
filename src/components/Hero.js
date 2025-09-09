import React from "react";
import clash1 from "../assets/clash1.png";
import clash2 from "../assets/clash2.png";
import clash3 from "../assets/clash3.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Floating orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      {/* Spark streaks */}
      <div className="absolute inset-0">
        <div className="w-[2px] h-full bg-pink-400/30 absolute left-1/4 animate-streak"></div>
        <div className="w-[2px] h-full bg-yellow-400/30 absolute left-1/2 animate-streak animation-delay-1000"></div>
        <div className="w-[2px] h-full bg-blue-400/30 absolute left-3/4 animate-streak animation-delay-2000"></div>
      </div>

      {/* Floating Clash Royale Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={clash1}
          alt="Character 1"
          className="absolute w-32 md:w-40 top-24 md:top-28 left-6 md:left-10 opacity-70 animate-float1"
        />
        <img
          src={clash2}
          alt="Character 2"
          className="absolute w-32 md:w-40 bottom-16 md:bottom-20 right-6 md:right-10 opacity-75 animate-float2"
        />
        <img
          src={clash3}
          alt="Character 3"
          className="absolute w-32 md:w-40 top-24 md:top-28 right-3 md:right-5 opacity-75 animate-float3"
        />
      </div>

      {/* Home content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-2xl mb-4 animate-fadeIn break-words">
          ⚔ Hackovation <br className="block md:hidden" /> 2.0
        </h1>
        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-xl animate-fadeIn animation-delay-500">
          36 Hours of Coding, Creativity & Clash Royale Vibes! <br />
          Form your team, compete & conquer.
        </p>
        <button className="px-8 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bungee rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn animation-delay-1000">
          Register Now
        </button>
      </div>

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

          @keyframes float1 {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float1 {
            animation: float1 6s ease-in-out infinite;
          }
          @keyframes float2 {
            0%,100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(15px) translateX(10px); }
          }
          .animate-float2 {
            animation: float2 8s ease-in-out infinite;
          }
          @keyframes float3 {
            0%,100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(-15px); }
          }
          .animate-float3 {
            animation: float3 7s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
