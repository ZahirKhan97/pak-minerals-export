"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Premium Minerals Export",
    desc: "Direct supply from Pakistan to worldwide buyers",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b43b4d0",
  },
  {
    title: "High Quality Gems",
    desc: "Natural stones with certified quality",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
  },
  {
    title: "Bulk Supply Available",
    desc: "Wholesale export at competitive prices",
    image:
      "https://images.unsplash.com/photo-1615484477201-9c72c2a70c55",
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              {slide.title}
            </h1>

            <p className="text-lg md:text-2xl mb-6">
              {slide.desc}
            </p>

            <a
              href="#minerals"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}