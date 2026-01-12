'use client'
import Image from "next/image";
import avatar from "./assets/images/avatar-jessica.jpeg"
import "./styles.css"

export default function ResultsSummaryComponent() {
  return (
    <>
      <section className="main">
        <div>
          <div className="avatar-container">
            <Image className="avatar" src={avatar} width={100} height={100} alt="avatar-jessica" />
          </div>
          <div className="text-container">
            <span className="author-name">Jessica Randall</span>
            <span className="location">London, United Kingdom</span>
            <p className="description">Front-end developer and avid reader.</p>
          </div>
          <div className="buttons-container">
            <button>GitHub</button>
            <button>Frontend Mentor</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button>
          </div>
        </div>
      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/javierpernia/frontend-practices" target="_blank">Javier Pernía</a>.
      </div>
    </>
  )
}