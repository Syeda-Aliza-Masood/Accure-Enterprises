"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Surveillance Systems",
    description: "Advanced security solutions for comprehensive monitoring and protection",
    image: "/hero/1.png",
  },
  {
    id: 2,
    title: "Solar Solutions",
    description: "Sustainable energy systems for residential and commercial applications",
    image: "/hero/2.png",
  },
  {
    id: 3,
    title: "Electrical Distribution",
    description: "Professional electrical distribution systems and power management",
    image: "/hero/3.png",
  },
  {
    id: 4,
    title: "Lighting Systems",
    description: "Modern lighting solutions for enhanced ambiance and efficiency",
    image: "/hero/4.png",
  },
  {
    id: 5,
    title: "Industrial Automation",
    description: "Smart automation systems for improved productivity and control",
    image: "/hero/5.png",
  },
  {
    id: 6,
    title: "Custom Fabrication",
    description: "Tailored fabrication services for specialized industrial requirements",
    image: "/hero/6.png",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Images */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            priority={index === currentSlide} // optimization for current slide
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            {services[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            {services[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => (window.location.href = "/services")}
            >
              Get Started
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              onClick={() => (window.location.href = "/projects")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Service Counter */}
      <div className="absolute top-8 right-8 z-30 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <span className="text-white font-medium">
          {currentSlide + 1} / {services.length}
        </span>
      </div>
    </section>
  )
}
