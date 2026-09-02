'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Project Data
const lienSacreProject = {
  id: 'lien-sacre',
  title: 'Lien sacré',
  description: `Une immersion au cœur des mariages en Algérie, mettant en lumière le rôle central et la transmission des traditions par les femmes.`,
  images: Array.from({ length: 21 }, (_, i) => `/liensacre/${i + 1}.jpg`),
}

const marhoumounProject = {
  id: 'marhoumoun',
  title: 'مرحومون / Marhoumoun',
  description: `La mort n’a pas de sens. Dans ce projet, je retrace les trois jours qui suivent un décès en Oranie. Les membres de la famille mettent leur chagrin de côté pour accueillir, nourrir, prendre soin des invités.`,
  videoUrl: '/marhoumoun/video.mp4', 
  audioUrl: '/marhoumoun/audio.mp3',
  images: Array.from({ length: 57 }, (_, i) => `/marhoumoun/${i + 1}.jpeg`),
}

const projectsData: Record<string, typeof lienSacreProject[]> = {
  photography: [marhoumounProject, lienSacreProject],
  videography: [marhoumounProject, lienSacreProject],
  audiography: [marhoumounProject],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [darkMode, setDarkMode] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const handleSelectProject = (project: any) => {
    setSelectedProject(project)
    setCarouselIndex(0)
    setActiveMenu(null)
  }

  const prevSlide = () => {
    if (!selectedProject?.images) return
    setCarouselIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    if (!selectedProject?.images) return
    setCarouselIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#e2e1dd] text-zinc-900'
      }`}
    >
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all ${
            darkMode
              ? 'border-zinc-800 text-zinc-400 bg-zinc-900/80'
              : 'border-zinc-300 text-zinc-600 bg-[#e2e1dd]/80'
          }`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <div className="px-6 md:px-16 py-8 max-w-4xl mx-auto">
        {/* Navigation */}
        <header className="mb-10 relative z-30">
          <nav className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.3em] font-extralight">
            <button
              onClick={() => {
                setSelectedProject(null)
                setActiveMenu(null)
              }}
              className="hover:opacity-50 transition"
            >
              About Me
            </button>

            {['photography', 'videography', 'audiography'].map((category) => (
              <div key={category} className="relative group py-1">
                <button
                  onClick={() => toggleMenu(category)}
                  className="cursor-pointer hover:opacity-50 transition uppercase"
                >
                  {category} {activeMenu === category ? '▴' : '▾'}
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 text-center z-50 ${
                    activeMenu === category ? 'block' : 'hidden group-hover:block'
                  }`}
                >
                  <div
                    className={`p-4 border shadow-2xl space-y-2 backdrop-blur-xl rounded-sm ${
                      darkMode ? 'bg-zinc-900/95 border-zinc-800' : 'bg-[#e2e1dd]/95 border-zinc-300'
                    }`}
                  >
                    {projectsData[category]?.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleSelectProject(project)}
                        className="block w-full text-[11px] text-left opacity-70 hover:opacity-100 py-1"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </header>

        <main className="max-w-2xl mx-auto space-y-8 relative z-10">
          {selectedProject ? (
            <section className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-baseline border-b border-zinc-500/20 pb-3">
                <h1 className="text-xl font-extralight tracking-wide">{selectedProject.title}</h1>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100"
                >
                  [Clear Selection]
                </button>
              </div>

              {selectedProject.description && (
                <p className="text-xs md:text-sm leading-relaxed font-extralight opacity-85 whitespace-pre-line">
                  {selectedProject.description}
                </p>
              )}

              {/* Audio Player */}
              {selectedProject.audioUrl && (
                <div
                  className={`p-3 rounded-lg border space-y-1 ${
                    darkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-300 bg-zinc-200/40'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                    🔊 Ambiance Sonore
                  </p>
                  <audio controls preload="metadata" className="w-full h-8 opacity-80 hover:opacity-100">
                    <source src={selectedProject.audioUrl} type="audio/mpeg" />
                  </audio>
                </div>
              )}

              {/* Optimized HTML5 Video */}
              {selectedProject.videoUrl && (
                <div className="w-full rounded-lg overflow-hidden border border-zinc-500/10 shadow-lg bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-auto max-h-[350px]"
                  >
                    <source src={selectedProject.videoUrl} type="video/mp4" />
                  </video>
                </div>
              )}

              {/* Fast Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="relative group overflow-hidden rounded-sm bg-black/20 h-[450px] w-full flex items-center justify-center">
                    <Image
                      src={selectedProject.images[carouselIndex]}
                      alt={`${selectedProject.title} - ${carouselIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      quality={60}
                      priority
                      className="object-contain cursor-pointer"
                      onClick={() => setActiveImageIndex(carouselIndex)}
                    />

                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white w-8 h-8 rounded-full text-sm flex items-center justify-center transition z-10"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white w-8 h-8 rounded-full text-sm flex items-center justify-center transition z-10"
                    >
                      ›
                    </button>

                    <span className="absolute bottom-3 right-3 text-[9px] tracking-widest text-white/80 bg-black/60 px-2 py-1 backdrop-blur-sm rounded z-10">
                      {carouselIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {selectedProject.images.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`relative flex-shrink-0 w-12 h-12 rounded-sm overflow-hidden border transition-all ${
                          carouselIndex === idx
                            ? 'border-white opacity-100 scale-105'
                            : 'border-transparent opacity-40 hover:opacity-80'
                        }`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="48px"
                          quality={30}
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ) : (
            <section className="space-y-6">
              <h1 className="text-2xl font-extralight">Biographie</h1>
              <p className="text-xs md:text-sm leading-relaxed opacity-80 font-extralight">
                WAFAA SOLTANE, née en 1994 à Oran, a étudié la littérature française à l'Université d'Oran avant de se tourner vers la photographie documentaire...
              </p>
            </section>
          )}
        </main>
      </div>

      {/* Lightbox Zoom */}
      {activeImageIndex !== null && selectedProject?.images && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white text-xs tracking-widest uppercase p-2"
          >
            ✕ Close
          </button>
          <div className="relative w-full h-[85vh]">
            <Image
              src={selectedProject.images[activeImageIndex]}
              alt="Zoom"
              fill
              quality={85}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}