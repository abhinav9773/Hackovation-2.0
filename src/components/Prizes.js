import React from "react";

const Prizes = () => {
  const prizes = [
    { title: "1st Prize", amount: "₹10,000", emoji: "🏆" },
    { title: "2nd Prize", amount: "₹5,000", emoji: "🥈" },
    { title: "3rd Prize", amount: "₹3,000", emoji: "🥉" },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-900 via-purple-900 to-black">
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        Prizes
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md shadow-md rounded-2xl p-6 flex flex-col items-center text-center text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{prize.emoji}</div>
            <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
            <p className="text-lg font-semibold">{prize.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
