'use client'

import { useState } from 'react'
import Link from 'next/link'

// Projets avec leur contenu complet (Texte, Photos, Vidéos, Audios)
const projectsData = {
  photography: [
    {
      title: 'مرحومون / Marhoumoun',
      description: 'Série photographique dédiée à la mémoire et au recueillement.',
      images: ['/photos/marhoumoun-1.jpg', '/photos/marhoumoun-2.jpg'],
    },
    {
      title: 'La lumière des années noires',
      description: `Dans l'Algérie des années 90, la décennie noire, la violence semblait partout : dans les rues, dans les regards, jusque dans les silences. Pourtant, derrière les murs clos, dans les interstices de la peur, des femmes ont continué de vivre, de résister, de rêver. Elles ont porté, souvent seules, le poids des disparitions, des deuils, des incertitudes.

Le début de cette série documentaire explore leurs voix, leurs luttes invisibles, leurs gestes du quotidien, en mêlant archives et récits intimes, pour rendre hommage à celles qui, dans la nuit de l'Histoire, ont maintenu la flamme de la vie.`,
      images: ['/photos/annees-noires-1.jpg', '/photos/annees-noires-2.jpg'],
    },
    {
      title: 'Des souvenirs doux',
      description: 'Exploration visuelle des souvenirs intimes et nostalgiques.',
      images: ['/photos/souvenirs-1.jpg'],
    },
    {
      title: 'Matbanch 3lik (Ça se voit pas sur toi)',
      description: 'Série sur les fardeaux invisibles et l’expression du regard.',
      images: ['/photos/matbanch-1.jpg'],
    },
  ],
  videography: [
    {
      title: 'Marhoumoun — Lien sacré',
      description: 'Essai vidéo documentaire et artistique.',
      videoUrl: '/videos/marhoumoun-lien-sacre.mp4',
    },
    {
      title: 'La lumière des années noires',
      description: 'Documentaire vidéo explorant les récits intimes et les voix des femmes.',
      videoUrl: '/videos/annees-noires.mp4',
    },
    {
      title: 'Acte manqué',
      description: 'Court-métrage expérimental.',
      videoUrl: '/videos/acte-manque.mp4',
    },
  ],
  audiography: [
    {
      title: 'مرحومون / Marhoumoun',
      description: 'Création sonore, récits et paysages acoustiques.',
      audioUrl: '/audio/marhoumoun.mp3',
    },
  ],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  return (
    <div className="font-sans dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      {/* Header */}
      <header className="flex w-full pt-10 pb-1">
        <nav id="nav" role="navigation" className="w-full">
          <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
            <div className="mr-4 md:mr-8">
              <Link href="/" className="text-2xl font-bold tracking-wide uppercase font-sans">
                WAFAA SOLTANE
              </Link>
            </div>

            <div id="menu" className="w-full transition-all ease-out duration-500 md:w-auto md:flex-grow md:flex md:items-center">
              <ul id="ulMenu" className="flex flex-col duration-300 ease-out md:space-x-8 mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0 font-sans">
                
                {/* PHOTOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <span className="text-xl font-normal tracking-wide uppercase cursor-pointer">
                    PHOTOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </span>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[260px] py-2 z-50 rounded-sm">
                    {projectsData.photography.map((project, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="w-full text-left block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-normal text-zinc-800 dark:text-zinc-200 transition duration-150"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </li>

                {/* VIDEOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <span className="text-xl font-normal tracking-wide uppercase cursor-pointer">
                    VIDEOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </span>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[260px] py-2 z-50 rounded-sm">
                    {projectsData.videography.map((project, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="w-full text-left block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-normal text-zinc-800 dark:text-zinc-200 transition duration-150"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </li>

                {/* AUDIOGRAPHY */}
                <li className="relative group py-2 transition duration-300">
                  <span className="text-xl font-normal tracking-wide uppercase cursor-pointer">
                    AUDIOGRAPHY
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </span>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg min-w-[260px] py-2 z-50 rounded-sm">
                    {projectsData.audiography.map((project, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="w-full text-left block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-normal text-zinc-800 dark:text-zinc-200 transition duration-150"
                      >
                        {project.title}
                      </button>
                    ))}
                  </div>
                </li>

                {/* ABOUT ME */}
                <li className="group transition duration-300 py-2">
                  <Link href="/about" className="text-xl font-normal tracking-wide uppercase">
                    ABOUT ME
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>

                {/* CONTACT */}
                <li className="group transition duration-300 py-2">
                  <Link href="/contact" className="text-xl font-normal tracking-wide uppercase">
                    CONTACT
                    <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto font-sans">
        <div className="pt-10 pb-6">
          <h1 className="text-4xl font-bold uppercase tracking-wide">PHOTOGRAPHY</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
            Photographer & Visual Artist
          </p>
        </div>
      </div>

      {/* MODAL POP-UP (S'affiche lors du clic sur un projet) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 font-sans">
          {/* Clic à l'extérieur pour fermer */}
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 text-black dark:text-white p-6 md:p-12 rounded-sm shadow-2xl border border-zinc-200 dark:border-zinc-800">
            {/* Bouton Fermer */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-6 text-2xl font-light hover:opacity-60 transition"
            >
              ✕
            </button>

            {/* Titre */}
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide mb-6">
              {selectedProject.title}
            </h2>

            {/* Description */}
            {selectedProject.description && (
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line max-w-2xl mb-8">
                {selectedProject.description}
              </p>
            )}

            {/* Vidéo */}
            {selectedProject.videoUrl && (
              <div className="mb-8 aspect-video w-full rounded-sm overflow-hidden bg-black">
                <video controls className="w-full h-full object-cover">
                  <source src={selectedProject.videoUrl} />
                </video>
              </div>
            )}

            {/* Audio */}
            {selectedProject.audioUrl && (
              <div className="mb-8 p-4 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                <audio controls className="w-full">
                  <source src={selectedProject.audioUrl} />
                </audio>
              </div>
            )}

            {/* Galerie d'images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {selectedProject.images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src={imgUrl}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="font-sans">
        <div className="max-w-screen-xl py-16 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-center mx-auto">
            <div>
              <p className="font-bold tracking-wide">WAFAA SOLTANE</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Photographer & Visual Artist
              </p>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
            © 2026 Wafaa Soltane
          </p>
        </div>
      </footer>
    </div>
  )
}