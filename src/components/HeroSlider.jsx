import React, { useState, useEffect } from "react";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";

const slides = [
  { image: h1, title: "Welcome to Our Website", subtitle: "Experience Innovation", text: "Empowering businesses with technology" },
  { image: h2, title: "We Build Solutions", subtitle: "Tailored for Your Needs", text: "Delivering excellence in every project" },
  { image: h3, title: "Join the Future", subtitle: "Embrace Digital Transformation", text: "Your success, our commitment" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          key={currentSlide} // Forces re-render to apply the transition
          src={slides[currentSlide].image}
          alt="slide"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>
      <div className="absolute z-10 bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl font-bold">{slides[currentSlide].title}</h1>
        <h2 className="text-2xl font-semibold mt-2">{slides[currentSlide].subtitle}</h2>
        <h3 className="text-lg mt-2">{slides[currentSlide].text}</h3>
      </div>
    </section>
  );
};

export default HeroSlider;
