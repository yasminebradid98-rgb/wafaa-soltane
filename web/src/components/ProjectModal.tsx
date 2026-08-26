'use client'

import { useEffect } from 'react'

interface ProjectModalProps {
  project: {
    title: string
    description?: string
    videoUrl?: string
    audioUrl?: string
    images?: string[]
  } | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Fermer la modal avec la touche Échap (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 font-sans animate-fadeIn">
      {/* Zone de clic extérieur pour fermer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Conteneur de la Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 text-black dark:text-white p-6 md:p-12 rounded-sm shadow-2xl border border-zinc-200 dark:border-zinc-800">
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl font-light hover:opacity-60 transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Titre du Projet */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide mb-6">
          {project.title}
        </h2>

        {/* Texte Descriptif */}
        {project.description && (
          <div className="mb-8 text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line max-w-2xl">
            {project.description}
          </div>
        )}

        {/* Vidéo (si présente) */}
        {project.videoUrl && (
          <div className="mb-8 aspect-video w-full rounded-sm overflow-hidden bg-black">
            <video controls className="w-full h-full object-cover">
              <source src={project.videoUrl} />
            </video>
          </div>
        )}

        {/* Audio (si présent) */}
        {project.audioUrl && (
          <div className="mb-8 p-4 border border-zinc-200 dark:border-zinc-800 rounded-sm">
            <audio controls className="w-full">
              <source src={project.audioUrl} />
            </audio>
          </div>
        )}

        {/* Galerie Photos */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {project.images.map((imgUrl, idx) => (
              <div key={idx} className="overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={imgUrl}
                  alt={`${project.title} image ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}