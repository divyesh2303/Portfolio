import "./App.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Divyesh from "./assets/images/Divyesh.png";
import tag from "./assets/images/tag.png";
import computer from "./assets/images/computer.png";

import whatsapp from "./assets/svg/whatsapp.svg";
import linkdin from "./assets/svg/linkedin.svg";
import github from "./assets/svg/github.svg";
import email from "./assets/svg/email.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 20,
      opacity: 0,
      duration: 1,
      scale: 0.2,
    });
    gsap.from(".buttons a", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    // page2
    gsap.from(".imgSide1", {
      opacity: 0,
      duration: 2,
      x: 300,
      scrollTrigger: {
        trigger: ".imgSide1",
        scroller: "body",
        markers: true,
        start: "top 60%",
      },
    });
    gsap.from(".imgSide2", {
      opacity: 0,
      duration: 2,
      x: -300,
      scrollTrigger: {
        trigger: ".imgSide1",
        scroller: "body",
        markers: true,
        start: "top 60%",
      },
    });
    // page3
    gsap.from(".pages3 a", {
      scale: 0,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: ".pages3 a",
        scroller: "body",
        markers: true,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <div className="container pages1">
        <div className="hero-text">
          <p>I am Divyesh</p>
          <p>
            Frontend Developer crafting beautiful, accessible, and performant
            web experiences
          </p>
        </div>
        <div className="buttons">
          <a href="#">
            <button className="view-work">View My Work</button>
          </a>
          <a
            href="https://drive.google.com/file/d/17givvi-sH9LDIAlPBk6sutOtyqiTxDYE/view?usp=drive_link"
            target="_blank"
          >
            <button className="download-resume">Download Resume</button>
          </a>
        </div>
      </div>
      <div className="container pages2">
        <img className="imgSide2" src={Divyesh} width={400} height={410} />
        <img className="imgSide1" src={tag} width={500} height={410} />
        <p className="imgSide2">
          "Passionate web developer pursuing an integrated MCA, skilled in
          React.js, Redux, and APIs. Built projects like an Expense Tracker and
          Spotify Clone, focusing on user-friendly, high-performance apps with
          engaging GSAP animations."
        </p>
        <img className="imgSide1" src={computer} width={500} height={410} />
      </div>
      <div className="text-center ">
        <h1>Contact Me</h1>
      </div>
      <div className="container pages3">
        <a href="https://wa.me/qr/6P63ABIWYGVSH1" target="_blank">
          <img
            className="logo whatsapp "
            src={whatsapp}
            alt="WhatsApp"
            width={190}
            height={200}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/divyesh-solanki-01628a254/"
          target="_blank"
        >
          <img
            className="logo"
            src={linkdin}
            alt="LinkedIn"
            width={190}
            height={200}
          />
        </a>
        <a href="https://github.com/Divyeshs2303" target="_blank">
          <img
            className="logo github"
            src={github}
            alt="GitHub"
            width={190}
            height={200}
          />
        </a>
        <a
          href="mailto:divyeshsolanki2303@gmail.com" /* Replace with your email */
          target="_blank"
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
    </>
  );
}

export default App;
