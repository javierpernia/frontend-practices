'use client'

import Image from "next/image"
import iconStar from "./assets/images/icon-star.svg"
import Accordion from "./components/accordion"
import "./styles.css"

export default function FaqAccordionMain() {
  return (
    <>
      <section className="main">
        <div className="container-title">
          <Image className="title-icon" src={iconStar} width={24} height={24} alt="icon-star" />
          <h1 className="title">FAQs</h1>
        </div>
        <Accordion />
      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Javier Pernía</a>.
      </div>
    </>
  )
}