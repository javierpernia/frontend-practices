import { useState } from "react";
import accordionData from "../api/data.json"


export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {accordionData.map((item) => {
        const isActive = activeIndex === item.id;

        return (
          <div
            key={item.id}
            className={`accordion-item ${isActive ? 'active' : ''}`}
          >
            <div
              className="accordion-label"
              onClick={() => toggleAccordion(item.id)}
            >
              {item.question}
            </div>
            <div className="accordion-content">
              <div className="accordion-inner">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}