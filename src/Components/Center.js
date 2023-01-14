import React from "react";
import Achivement from "./Achivement";
import Carousel from "./Carousel";
import "./Center.css";
import Contact from "./Contact";
import Hero from "./Hero.js";
import Navbar from "./Navbar.js";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
const Center = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="main">
        <div className="stack">
          <div className="stack__card flex-col">
            <div className="w-full flex flex-col items-start rounded-lg border-navy-blue border-2 px-24 py-2">
              
              <h1 className="font-bold text-2xl px-2">SPOTLIGHT</h1>
              <ul>
              <li><p className="font-medium text-xl p-2"><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/> ACADEMIC CALENDER FOR FALL SEMESTER 2023-2024 For Junior Senior and Final Year Students</p></li>
              <li><p className="font-medium text-xl p-2"><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/> FAT TIMINGS For Junior Senior and Final Year Students for the winter semester 2022-2023</p></li>
              <li><p className="font-medium text-xl p-2"><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/> FFCS LINK- www.ffcs.com For Junior Senior and Final Year Students for the winter semester 2022-2023</p></li></ul>


            </div>
            <div className="text-6xl px-2 font-bold py-36 text-center flex items-center justify-center">
              <h1>
                Being mentored is a part of process <br></br>the other part is
                you.
              </h1>
            </div>
          </div>
          <div className="stack__card stack_card_border flex-col">
            <p className="p-2 px-12 text-xl font-regular italic">Campus -  Vit Vellore</p>

            <div className="paragraph flex flex-row  gap-6">
              <img
                src="https://images.shiksha.com/mediadata/images/articles/1584528545phpdljDz1.jpeg"
                className="vitv"
              />
              <div>
                <p className="text-7xl">
                  Where <i className="font">Challenges</i><br></br> meets <i>creativity.</i>
                  <p className="text-sm py-10 mb-36 pr-12">Vellore Institute of Technology (VIT) University, Vellore is one of the most popular engineering institutions in India which is not only recognized by prestigious national ranking organizations but also by prominent international ranking organizations such as QS Rankings
                  <a className="text-blue-500 p-1">  ....view more</a>
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="stack__card stack_card_border flex-col">
            <p className="p-2 px-12 text-xl font-regular italic">Campus -  Vit Chennai</p>

            <div className="paragraph flex flex-row  gap-6">
              <img
                src="vitc.jpg"
                className="vitv"
              />
              <div>
                <p className="text-7xl">
                  Building <i className="font">Excellence </i><br></br>through <i>Passion</i>
                  <p className="text-sm py-10 mb-36 pr-12">Vellore Institute of Technology (VIT) University, Vellore is one of the most popular engineering institutions in India which is not only recognized by prestigious national ranking organizations but also by prominent international ranking organizations such as QS Rankings
                  <a className="text-blue-500 p-1">  ....view more</a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Achivement />
      <Contact />
    </>
  );
};

export default Center;
