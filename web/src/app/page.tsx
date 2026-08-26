'use client'

import { useState } from 'react'
import Link from 'next/link'

// Données des projets
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
              <Link
                href="/"
                onClick={() => setSelectedProject(null)}
                className="text-2xl font-bold tracking-wide uppercase font-sans"
              >
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

      {/* Main Content Area */}
      <div className="container mx-auto font-sans pt-10 pb-16">
        {selectedProject ? (
          /* SECTION PROJET SÉLECTIONNÉ (In-page view) */
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
                {selectedProject.title}
              </h1>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs uppercase tracking-widest px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition rounded-sm"
              >
                ← Clear selection
              </button>
            </div>

            {selectedProject.description && (
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line max-w-3xl">
                {selectedProject.description}
              </p>
            )}

            {/* Lecteur Vidéo */}
            {selectedProject.videoUrl && (
              <div className="aspect-video w-full max-w-4xl rounded-sm overflow-hidden bg-black my-6">
                <video controls className="w-full h-full object-cover">
                  <source src={selectedProject.videoUrl} />
                </video>
              </div>
            )}

            {/* Lecteur Audio */}
            {selectedProject.audioUrl && (
              <div className="max-w-2xl p-4 border border-zinc-200 dark:border-zinc-800 rounded-sm my-6">
                <audio controls className="w-full">
                  <source src={selectedProject.audioUrl} />
                </audio>
              </div>
            )}

            {/* Images du projet */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
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
        ) : (
          /* VUE PAR DÉFAUT (Titre Photography) */
          <div>
            <div className="pb-6">
              <h1 className="text-4xl font-bold uppercase tracking-wide">PHOTOGRAPHY</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
                Photographer & Visual Artist
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="font-sans border-t border-zinc-200 dark:border-zinc-900">
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