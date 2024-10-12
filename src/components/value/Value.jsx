import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./value.css";
import value from "../../images/value.png";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="v-container paddings innerWidth flexCenter">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={value} alt="" width={"auto"} height={"unset"} />
          </div>
        </div>
        {/* right side */}
        <div className="v-right flexColStart">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Cumque cupiditate ipsum dolor quas veritatis. Fugit!
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((value, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [className, setClassName] = useState(null);
              return (
                // <>
                  <AccordionItem
                    className={` accordionItem ${className} `}
                    key={index}
                    uuid={index}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton flexCenter">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="icon flexCenter">
                          <i className={value.icon}></i>
                        </div>
                        <span className="primaryText">{value.heading}</span>
                        <div className="icon flexCenter">
                          <i className="fas fa-angle-down"></i>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{value.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                // </>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
