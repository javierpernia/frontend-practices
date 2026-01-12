
'use client'
import Image from "next/image";
import "./styles.css";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

export default function ResultsSummaryComponent() {
  return (
    <>
      <section className="main">
        <div className="score-container">
          <h2 className="score-title">Your Result</h2>
          <div className="score-value">
            <h3>76</h3>
            <p>of 100</p>
          </div>
          <h2 className="congrats-title">Great</h2>
          <p className="congrats-description">You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className="summary-container">
          <h2 className="summary-title">Summary</h2>
          <div className="summary-specific-container">
            <div className="summary-specific" id="reaction-title">
              <Image src={iconReaction} alt="icon-reaction" width={24} height={24} />
              <h3>Reaction</h3>
            </div>
            <p id="reaction-value"><span className="summary-value">80</span> / 100</p>
          </div>
          <div className="summary-specific-container">
            <div className="summary-specific" id="memory-title">
              <Image src={iconMemory} alt="icon-memory" width={24} height={24} />
              <h3>Memory</h3>
            </div>
            <p id="memory-value"><span className="summary-value">92</span> / 100</p>
          </div>
          <div className="summary-specific-container">
            <div className="summary-specific" id="verbal-title">
              <Image src={iconVerbal} alt="icon-verbal" width={24} height={24} />
              <h3>Verbal</h3>
            </div>
            <p id="verbal-value"><span className="summary-value">61</span> / 100</p>
          </div>
          <div className="summary-specific-container">
            <div className="summary-specific" id="visual-title">
              <Image src={iconVisual} alt="icon-visual" width={24} height={24} />
              <h3>Visual</h3>
            </div>
            <p id="visual-value"><span className="summary-value">73</span> / 100</p>
          </div>
          <button id="continue-button">Continue</button>
        </div>

      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/javierpernia">Javier Pernía</a>.
      </div>
    </>
  )
}
