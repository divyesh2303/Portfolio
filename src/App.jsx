import "./App.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Divyesh from "./assets/images/Divyesh.png";
import tag from "./assets/images/tag.png";
import computer from "./assets/images/computer.png";
import whatsapp from "./assets/svg/whatsapp.svg";
import linkedin from "./assets/svg/linkedin.svg";
import github from "./assets/svg/github.svg";
import email from "./assets/svg/email.svg";
import Education from "./Education";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Animations for laptop and larger screens
      gsap.from(".hero-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        scale: 0.8,
      });

      gsap.from(".buttons a", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1,0.3)",
      });

      gsap.from(".imgSide1", {
        opacity: 0,
        duration: 2,
        x: 300,
        ease: "elastic.out(1,0.3)",
        scrollTrigger: {
          trigger: ".imgSide1",
          scroller: "body",
          start: "top 60%",
        },
      });

      gsap.from(".imgSide2", {
        opacity: 0,
        duration: 2,
        x: -300,
        ease: "elastic.out(1,0.3)",
        scrollTrigger: {
          trigger: ".imgSide2",
          scroller: "body",
          start: "top 60%",
        },
      });

      gsap.from(".pages3 a", {
        scale: 0,
        duration: 2,
        rotate: 360,
        scrollTrigger: {
          trigger: ".pages3",
          start: "top 80%",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Animations for mobile screens
      gsap.from(".hero-text", {
        y: 10,
        opacity: 0,
        duration: 1,
        scale: 0.6,
      });

      gsap.from(".buttons a", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power1.out",
      });

      gsap.from(".imgSide1", {
        opacity: 0,
        duration: 1.5,
        x: 200,
        ease: "elastic.out(1,0.75)",
        scrollTrigger: {
          trigger: ".imgSide1",
          scroller: "body",
          start: "top 70%",
        },
      });

      gsap.from(".imgSide2", {
        opacity: 0,
        duration: 1.5,
        x: -200,
        ease: "elastic.out(1,0.75)",
        scrollTrigger: {
          trigger: ".imgSide2",
          scroller: "body",
          start: "top 70%",
        },
      });

      gsap.from(".pages3 a", {
        scale: 0,
        duration: 1.5,
        rotate: 180,
        scrollTrigger: {
          trigger: ".pages3",
          start: "top 85%",
        },
      });
    });

    return () => mm.revert(); // Clean up animations on component unmount
  }, []);

  return (
    <>
      {/* Page 1 */}
      <div className="container pages1">
        <div className="hero-text">
          <p>I am Divyesh</p>
          <p>
            Frontend Developer crafting beautiful, accessible, and performant
            web experiences
          </p>
        </div>
        <div className="buttons">
          <a
            href="https://drive.google.com/file/d/17givvi-sH9LDIAlPBk6sutOtyqiTxDYE/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="view-work">View My Work</button>
          </a>
          <a
            href="https://drive.google.com/file/d/17givvi-sH9LDIAlPBk6sutOtyqiTxDYE/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-resume">Download Resume</button>
          </a>
        </div>
      </div>

      {/* Page 2 */}
      <div className="container pages2">
        <img
          className="imgSide2"
          src={Divyesh}
          alt="Divyesh"
          width={400}
          height={410}
        />
        <img
          className="imgSide1"
          src={tag}
          alt="Tag"
          width={500}
          height={410}
        />
        <p className="imgSide2">
          Passionate web developer pursuing an integrated MCA, skilled in
          React.js, Redux, and APIs. Built projects like an Expense Tracker and
          Spotify Clone, focusing on user-friendly, high-performance apps with
          engaging GSAP animations.
        </p>
        <img
          className="imgSide1"
          src={computer}
          alt="Computer"
          width={500}
          height={410}
        />
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h1>Contact Me</h1>
      </div>
      <div className="container pages3">
        <a
          href="https://wa.me/qr/6P63ABIWYGVSH1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo whatsapp"
            src={whatsapp}
            alt="WhatsApp"
            width={190}
            height={200}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/divyesh-solanki-01628a254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo linkedin"
            src={linkedin}
            alt="LinkedIn"
            width={190}
            height={200}
          />
        </a>
        <a
          href="https://github.com/Divyeshs2303"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo github"
            src={github}
            alt="GitHub"
            width={190}
            height={200}
          />
        </a>
        <a
          href="mailto:divyeshsolanki2303@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo email"
            src={email}
            alt="Email"
            width={190}
            height={200}
          />
        </a>
      </div>

      {/* Education Section */}
      <div className="container pages4">
        <Education />
      </div>
    </>
  );
}

export default App;
