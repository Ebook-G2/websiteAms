import React from "react";
import "../styles/slider.css";

function SliderCollab() {
  const cooperate = [
    {
      src: "/assets/svg/adobe.svg",
      alt: "Adobe",
      name: "Adobe",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-ae.svg",
      alt: "After Effects",
      name: "After Effects",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-ai.svg",
      alt: "Illustrator",
      name: "Illustrator",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-id.svg",
      alt: "InDesign",
      name: "InDesign",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-pr.svg",
      alt: "Premiere Pro",
      name: "Premiere Pro",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-ps.svg",
      alt: "Photoshop Express",
      name: "Photoshop Express",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/adobe-xd.svg",
      alt: "Adobe XD",
      name: "Adobe XD",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/envato.svg",
      alt: "Envato",
      name: "Envato",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/freepik.svg",
      alt: "Freepik",
      name: "Freepik",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/midjourney.svg",
      alt: "Midjourney",
      name: "Midjourney",
      link: "https://www.youtube.com/",
    },
    {
      src: "/assets/svg/suno.svg",
      alt: "Suno",
      name: "Suno",
      link: "https://www.youtube.com/",
    },
  ];
  return (
    <div className="overflow-hidden p-10">
      <div className="flex animate-marquee space-x-8 text-2xl font-bold ">
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
