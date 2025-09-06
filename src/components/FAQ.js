import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in Hackovation?",
      answer:
        "Any student or professional with a passion for coding and innovation can participate.",
    },
    {
      question: "Is it a team event or individual?",
      answer: "Participants can register solo or in teams of up to 5 members.",
    },
    {
      question: "What are the prizes?",
      answer:
        "1st Prize: ₹10,000 🏆, 2nd Prize: ₹5,000 🥈, 3rd Prize: ₹3,000 🥉",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience is required, but basic programming knowledge is recommended.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 bg-black">
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col space-y-6 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md shadow-md rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-bold text-white flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-4 text-white/90 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
