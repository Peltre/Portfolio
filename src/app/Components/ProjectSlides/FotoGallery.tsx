"use client";

import React, { useState, useEffect } from 'react'

import slide1 from "../../Assets/KoD/Gallery/KOD.png"
import slide2 from "../../Assets/KoD/Gallery/KOD 2.png"

const FotoGallery = () => {
    const slides = [slide1, slide2]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Change slide automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true)
            setCurrentSlide((prev) => (prev + 1) % slides.length)
            setTimeout(() => setIsTransitioning(false), 500)
        }
    }

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true)
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
            setTimeout(() => setIsTransitioning(false), 500)
        }
    }
    
  return (
    <div className='h-full relative group'>
      <div className='carousel w-full h-full relative'>
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`carousel-item absolute inset-0 w-full h-full border-6 border-purple-500/50 box-border rounded-md overflow-hidden transition-opacity duration-500 ${
                            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <img
                            src={slide.src}
                            alt={`Screenshot ${index + 1}`}
                            className='object-cover w-full h-full rounded-md'
                        />
                    </div>
                ))}
            </div>

      {/* Switch slide left arrow */}
      <button 
        onClick={prevSlide}
        className='absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300'
        aria-label='Slide anterior'
      >
        ←
        </button>

        {/* Switch slide Right arrow */}
        <button
            onClick={nextSlide}
            className='absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-opacity duration-300'
            aria-label='Siguiente slide'
        >
         →
        </button>

        {/* Slide indicator */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (!isTransitioning) {
                            setIsTransitioning(true)
                            setCurrentSlide(index)
                            setTimeout(() => setIsTransitioning(false), 500)
                        }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index ? 'bg-purple-500 w-8' : 'bg-white/50 hover:bg-white/80'
                        }`}
                    aria-label={`Ir a slide ${index + 1}`}
                />
            ))}
        </div>
    </div>
  )
}

export default FotoGallery
