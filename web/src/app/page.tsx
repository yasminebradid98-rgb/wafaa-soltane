'use client'

import { useState, useEffect } from 'react'

const lienSacreProject = {
  id: 'lien-sacre',
  title: 'Lien sacré',
  description: `Je vous invite à plonger dans une autre dimension, celle de nos mariages en Algérie...`,
  images: Array.from({ length: 21 }, (_, i) => `/liensacre/${i + 1}.jpg`),
}

const marhoumounProject = {
  id: 'marhoumoun',
  title: 'مرحومون / Marhoumoun',
  description: `La mort n’a pas de sens...`,
  // Remplacez videoUrl par votre fichier local /marhoumoun/video.mp4 ou un lien MP4/YouTube
  videoUrl: '/marhoumoun/video.mp4', 
  audioUrl: '/marhoumoun/audio.mp3',
  images: Array.from({ length: 57 }, (_, i) => `/marhoumoun/${i + 1}.jpeg`),
}

const projectsData = {
  photography: [lienSacreProject, marhoumounProject],
  videography: [lienSacreProject, marhoumounProject],
  audiography: [marhoumounProject],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [darkMode, setDarkMode] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  // État du Carrousel
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
      className={`min-h-screen transition-colors duration-700 font-sans ${
        darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#e2e1dd] text-zinc-900'
      }`}
    >
      {/* Bouton Dark / Light */}
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

      <div className="px-6 md:px-20 py-12 max-w-5xl mx-auto">
        <header className="mb-16 relative z-30">
          <nav className="flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.3em] font-extralight">
            <button
              onClick={() => {
                setSelectedProject(null)
                setActiveMenu(null)
              }}
              className="hover:opacity-50 transition"
            >
              Biographie
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
                    className={`p-5 border shadow-2xl space-y-3 backdrop-blur-xl rounded-sm ${
                      darkMode ? 'bg-zinc-900/95 border-zinc-800' : 'bg-[#e2e1dd]/95 border-zinc-300'
                    }`}
                  >
                    {projectsData[category as keyof typeof projectsData].map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleSelectProject(project)}
                        className="block w-full text-[11px] text-left opacity-70 hover:opacity-100"
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

        <main className="max-w-2xl mx-auto space-y-12 relative z-10">
          {selectedProject ? (
            <section className="space-y-10 animate-fadeIn">
              <div className="flex justify-between items-baseline border-b border-zinc-500/20 pb-4">
                <h1 className="text-2xl font-extralight">{selectedProject.title}</h1>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100"
                >
                  [fermer]
                </button>
              </div>

              {selectedProject.description && (
                <p className="text-xs md:text-sm leading-relaxed font-extralight opacity-85 whitespace-pre-line">
                  {selectedProject.description}
                </p>
              )}

              {/* Player Audio Corrigé */}
              {selectedProject.audioUrl && (
                <div
                  className={`p-4 rounded-lg border space-y-2 ${
                    darkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-300 bg-zinc-200/40'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                    🔊 Ambiance Sonore
                  </p>
                  <audio controls preload="metadata" className="w-full h-8 opacity-80 hover:opacity-100">
                    <source src={selectedProject.audioUrl} type="audio/mpeg" />
                    Votre navigateur ne supporte pas l'élément audio.
                  </audio>
                </div>
              )}

              {/* Player Vidéo Direct (Sans blocage Vimeo) */}
              {selectedProject.videoUrl && (
                <div className="w-full rounded-lg overflow-hidden border border-zinc-500/10 shadow-lg bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-auto max-h-[450px]"
                  >
                    <source src={selectedProject.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
              )}

              {/* CARROUSEL DE PHOTOS (Remplaçant la longue liste) */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-4 pt-4">
                  <div className="relative group overflow-hidden rounded-sm bg-black/5 aspect-[4/3] flex items-center justify-center">
                    <img
                      src={selectedProject.images[carouselIndex]}
                      alt={`${selectedProject.title} - ${carouselIndex + 1}`}
                      className="max-h-full max-w-full object-contain cursor-zoom-in transition-all duration-300"
                      onClick={() => setActiveImageIndex(carouselIndex)}
                    />

                    {/* Flèches du Carrousel */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full text-xs transition"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full text-xs transition"
                    >
                      ›
                    </button>

                    <span className="absolute bottom-3 right-3 text-[9px] tracking-widest text-white/80 bg-black/60 px-2 py-1 backdrop-blur-sm rounded">
                      {carouselIndex + 1} / {selectedProject.images.length} [Cliquer pour agrandir]
                    </span>
                  </div>
                </div>
              )}
            </section>
          ) : (
            <section className="space-y-6">
              <h1 className="text-3xl font-extralight">Biographie</h1>
              <p className="text-xs md:text-sm leading-relaxed opacity-80">
                WAFAA SOLTANE, née en 1994 à Oran, a étudié la littérature française à l'Université d'Oran avant de se tourner vers la photographie documentaire...
              </p>
            </section>
          )}
        </main>
      </div>

      {/* Lightbox / Zoom Plein Écran */}
      {activeImageIndex !== null && selectedProject?.images && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white text-xs tracking-widest uppercase p-2"
          >
            ✕ Fermer
          </button>
          <img
            src={selectedProject.images[activeImageIndex]}
            alt="Zoom"
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  )
}