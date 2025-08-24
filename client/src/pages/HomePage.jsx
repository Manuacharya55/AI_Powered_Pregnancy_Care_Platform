import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { REASONS, TESTEMONIALS } from "../utils/placholder";
import {gsap} from "gsap";

const HomePage = () => {
  const navigate = useNavigate();
   const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const viewportWidth = window.innerWidth;

    // GSAP animation
    gsap.fromTo(
      textRef.current,
      { x: viewportWidth }, // Start off-screen (right side)
      {
        x: -textWidth, // End off-screen (left side)
        duration: 20, // Adjust speed of the movement
        repeat: -1, // Infinite repeat
        ease: "linear", // Smooth and consistent movement
      }
    );
  }, []);

  return (
    <div id="page">
      <div id="banner">
        <span ref={textRef}>A beautiful journey of love and new beginnings</span>
      </div>
      <div id="banner-image">
        <img src="home.jpg" alt="" />
      </div>
      <div id="benifits">
        <span id="title">
          More Than Promises <br /> Real Benefits for You
        </span>
        <div id="container">
          {REASONS.map((curEle, index) => (
            <Card
              index={index + 1}
              title={curEle.reason}
              description={curEle.description}
            />
          ))}
        </div>
      </div>
      <div id="testimonial">
        <span id="title">
          Dont Trust Our Words
          <br />
          Hear It From Our Partners
        </span>

        <div id="container">
          {TESTEMONIALS.map((curEle, index) => (
            <Card
              profile={curEle.image}
              title={curEle.name}
              description={curEle.description}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default HomePage;
