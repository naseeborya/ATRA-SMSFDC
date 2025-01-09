"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const faqs = [
    {
      question: "What should I do if I forget to fill out a required field?",
      answer:
        "If you miss a required field, the form will usually prompt you to fill it in before submitting. Make sure to complete all fields marked with an asterisk (*).",
    },
    {
      question: "How do I know if the information entered is correct?",
      answer:
        "Double-check all fields to ensure they are filled out correctly. Look for typos, missing information, or incorrect formatting before submitting.",
    },
    {
      question: "What happens if I make a mistake while filling out the form?",
      answer:
        "If you make a mistake, you can usually go back and correct it before submitting. Some forms also allow editing after submission, but it's best to double-check beforehand.",
    },
    {
      question: "Is agreeing to terms and conditions necessary?",
      answer:
        "Yes, agreeing to the terms and conditions is often mandatory to proceed with form submission. Make sure to read them carefully before agreeing.",
    },
    {
      question: "What should I do if I can't submit the form?",
      answer:
        "Check for any error messages or incomplete fields. Ensure you have a stable internet connection. If the problem persists, try refreshing the page or contacting support.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-[256px] py-12  mb-12">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold text-brand-primary text-center my-20">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-white rounded-[10px]  p-6 space-y-4">
              {/* Question Section */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="font-semibold text-base text-brand-primary">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FiChevronUp size={24} className="text-brand-primary" />
                ) : (
                  <FiChevronDown size={24} className=" text-brand-primary" />
                )}
              </div>
              {/* Answer Section */}
              {openIndex === index && (
                <div className="mt-4 p-4 bg-brand-gray rounded-[10px] text-[16px] ">
                  <p className=" text-brand-primary">{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
