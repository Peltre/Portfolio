"use client";

import React, { useState, useEffect } from 'react'

import slide1 from "../../Assets/KoD/Gallery/KOD.png"
import slide2 from "../../Assets/KoD/Gallery/KOD 2.png"

const FotoGallery = () => {
    const slides = [slide1, slide2]
    const [currentSlide, setCurrentSlide] = useState(0)

    // Change slide automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
    
  return (
    <div className='h-full'>
      <div className='carousel w-full h-full'>
        <div id='slide1' className='carousel-item relative w-full border-6 border-purple-500/50 box-border rounded-md overflow-hidden'>
            <img
                src={slides[currentSlide].src}
                alt={`Screenshot ${currentSlide + 1}`}
                className='object-cover w-full h-full rounded-md transition-opacity duration-500'
            />
        </div>
      </div>

      {/* Switch slide left arrow */}
      <button 
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg/black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        aria-label='Slide anterior'
      >
        A 
        </button>

        {/* Switch slide Right arrow */}
        <button
            onClick={nextSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg/black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            aria-label='Siguiente slide'
        >
            B
        </button>

        {/* Slide indicator */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
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
