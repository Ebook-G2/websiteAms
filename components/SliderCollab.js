import React from "react";
import "../styles/slider.css";

function SliderCollab() {
  const cooperate = [
    {
      src: "/assets/svg/adobe.svg",
      alt: "1",
      name: "Adobe",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-ae.svg",
      alt: "1",
      name: "After Effects",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-ai.svg",
      alt: "1",
      name: "Illustrator",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-id.svg",
      alt: "1",
      name: "InDesign",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-pr.svg",
      alt: "1",
      name: "Premiere Pro",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-ps.svg",
      alt: "1",
      name: "Photoshop Express",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-xd.svg",
      alt: "1",
      name: "Adobe XD",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/envato.svg",
      alt: "1",
      name: "Envato",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/freepik.svg",
      alt: "1",
      name: "Freepik",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/midjourney.svg",
      alt: "1",
      name: "Midjourney",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/suno.svg",
      alt: "1",
      name: "Suno",
      link: "https://www.youtube.com/",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee space-x-8 text-2xl font-bold font-roboto">
        {cooperate.map((cooperate, index) => (
          <div key={index} className="flex flex-row items-center">
            <img src={cooperate.src} className="w-12" alt={cooperate.name} />
            <h3>{cooperate.name}</h3>
          </div>
        ))}
        {cooperate.map((cooperate, index) => (
          <div key={index + "duplicate"} className="flex flex-row items-center">
            <img src={cooperate.src} className="w-12" alt={cooperate.name} />
            <h3>{cooperate.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderCollab;
