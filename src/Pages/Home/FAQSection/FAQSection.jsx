import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";

const FAQSection =() => {
  const faqs = [
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
    {
      question: "How can Monster Studio help my startup grow through design?",
      answer:
        "What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies What makes Monster Studio different from other UI/UX design agencies",
    },
  
  ];

  return (
    <div className="max-w-[1416px] mx-auto py-20 px-5 bg-[#F5F5F5]">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-red-50 rounded-full text-red-600 text-sm font-medium mb-4">
          <AiOutlinePlus className="h-5 w-5" />
          Frequently asked questions
        </div>
        <h2 className="text-4xl font-bold">
          YOUR QUESTIONS <span className="text-red-600">ANSWERED</span>
        </h2>
      </div>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              bgcolor: index % 2 === 0 ? "background.paper" : "red.50",
              "&:before": { display: "none" }, // Removes the default outline
            }}
          >
            <AccordionSummary
              expandIcon={<AiOutlineDown />}
              sx={{
                px: 2,
                py: 1,
                textAlign: "left",
                "&:hover": { textDecoration: "none" },
              }}
            >
              <Typography variant="subtitle1" fontWeight="medium">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pb: 2, color: "text.secondary" }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

    </div>
  );
}

export default FAQSection