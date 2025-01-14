import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-center ">
            <p className="link">Watch the film</p>
            <img src={watchImg} alt="watchImg" className="ml-2" />
          </div>
          <div className="flex flex-wrap items-center  ">
            <p className="link">Watch the Event</p>
            <img src={rightImg} alt="rightImg" className="ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
