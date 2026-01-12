'use client'
import Image from "next/image";
import "./styles.css";
import illustrationArticle from "./assets/images/illustration-article.svg";
import imageAvatar from "./assets/images/image-avatar.webp";

export default function BlogPreviewCard() {
  return (
    <>
      <section className="main">
        <div>
          <div className="image-container">
            <Image className="image-header" src={illustrationArticle} width={336} height={201} alt="image-header" />
          </div>
          <div className="text-container">
            <span className="category">Learning</span> <br />
            <span className="published">Published 06 Dec 2026</span> <br />
            <a className="post-link" href="#">
              <h2>HTML & CSS foundations</h2>
            </a>
            <p>These Languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>
          <div className="author-container">
            <a href="#">
              <Image className="avatar" src={imageAvatar} width={40} height={40} alt="avatar-img" />
              <span className="author">Greg Hooper</span>
            </a>

          </div>
        </div>
      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/javierpernia/frontend-practices">Javier Pernía</a>.
      </div>
    </>
  )
}