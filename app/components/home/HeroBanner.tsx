import { Button } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import FormDefault from "../FormDefault";

function HeroBanner() {
  return (
    <section>
      <div className="relative z-10 before:content-[''] before:bg-[#000000ab] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[8]">
        <ReactPlayer
          src="/assets/videos/271841_medium.mp4"
          width="100%"
          height="100%"
          muted
          autoPlay
          className="!h-[70vh] lg:!h-[93vh] object-cover"
        />
        <div className="absolute bottom-[45%] md:bottom-[5%] lg:bottom-auto lg:top-[50%] -translate-y-1/2 left-[4%] lg:left-[8%] z-10">
          <h1 className=" text-[50px] lg:text-[70px] font-bold uppercase leading-[1.09] bg-gradient-to-r from-[#6bffca] to-[#6bffca] [background-clip:text] [-webkit-text-fill-color:transparent]">
            <span>Where</span><br className="block lg:hidden" /> <span>upskilling</span>
            <br />
            <span>meets</span><br className="block lg:hidden"/> <span>real-world</span>
            <br />
            <span> success</span>
          </h1>
        </div>
        <div className="relative md:absolute top-[0%] md:top-[50%] lg:top-[50%] mx-auto max-w-[95%] w-[400px] lg:w-[500px] md:-translate-y-1/2 right-[0%] md:right-[5%] lg:right-[8%] z-10 py-6">
          <FormDefault/>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
