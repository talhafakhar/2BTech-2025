import React, {useState} from "react";

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number | null) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: "How does 2BTech guarantee protection from cyber threats?",
            answer:
                "With our tried and tested cybersecurity solutions, 2BTech prides itself in being an ideal business IT solutions company to brand owners who want to expand their companies while prioritizing the safety of their data. Our system security experts are here to assist you around the clock.",
        },
        {
            question: "When can I expect a response to my query from the 2BTech team?",
            answer:
                "With our tried and tested cybersecurity solutions, 2BTech prides itself in being an ideal business IT solutions company to brand owners who want to expand their companies while prioritizing the safety of their data. Our system security experts are here to assist you around the clock.",
        },
        {
            question: "Are the experts at 2BTech familiar with AI?",
            answer:
                "With our tried and tested cybersecurity solutions, 2BTech prides itself in being an ideal business IT solutions company to brand owners who want to expand their companies while prioritizing the safety of their data. Our system security experts are here to assist you around the clock.",
        },
        {
            question: "Are the 2BTech professionals certified?",
            answer:
                "With our tried and tested cybersecurity solutions, 2BTech prides itself in being an ideal business IT solutions company to brand owners who want to expand their companies while prioritizing the safety of their data. Our system security experts are here to assist you around the clock.",
        },
        {
            question: "What is the purpose of booking a short call with 2BTech?",
            answer:
                "With our tried and tested cybersecurity solutions, 2BTech prides itself in being an ideal business IT solutions company to brand owners who want to expand their companies while prioritizing the safety of their data. Our system security experts are here to assist you around the clock.",
        },
    ];

    return (
        <div className="m-2">
            <div className="container mx-auto mt-10" data-track-name="faq_section"
                 data-track-hover="true">
                <div className="flex flex-col items-center p-5 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Got{" "}
                        <span
                            className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Questions?
            </span>
                    </h2>
                </div>
                <div className="w-full max-w-full md:max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b">
                            <button
                                onClick={() => toggleAccordion(index)}
                                data-track-name="question"
                                data-track-hover="true"
                                data-track-click="true"
                                className="w-full flex justify-between items-center py-5 text-xl text-white"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-content-${index}`}
                            >
                                <span>{faq.question}</span>
                                <span className="text-white transition-transform duration-300">
                  {openIndex === index ? (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4"
                      >
                          <path
                              fillRule="evenodd"
                              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                          />
                      </svg>
                  ) : (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4"
                      >
                          <path
                              fillRule="evenodd"
                              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                              clipRule="evenodd"
                          />
                      </svg>
                  )}
                </span>
                            </button>
                            <div
                                id={`faq-content-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? "max-h-screen" : "max-h-0"
                                }`}
                            >
                                <div className="pb-5 text-sm text-gray-400">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
