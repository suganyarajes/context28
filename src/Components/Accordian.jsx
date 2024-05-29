import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

export default function Accordian({ options }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Accordion open={openIndex} toggle={toggleAccordion}>
        {options.map((option, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={index} onClick={() => toggleAccordion(index)}>
              {option.title}
            </AccordionHeader>
            <AccordionBody accordionId={index}>
              {option.description}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
