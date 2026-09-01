'use client'

import { useState } from 'react'

// 1. PROJET : LIEN SACRÉ (Mariages en Algérie)
const lienSacreProject = {
  title: 'Lien sacré',
  description: `Je vous invite à plonger dans une autre dimension, celle de nos mariages en Algérie, où chaque instant est une véritable symphonie d'émotions, de traditions et de couleurs. Ici, la présence des femmes s’impose naturellement, du début à la fin des festivités.

Dès les premiers préparatifs, ce sont elles qui dirigent. Mères, tantes, sœurs et amies se réunissent pour veiller à chaque détail avec une minutie sans faille. Qu’il s’agisse du choix des tenues, des bijoux ou des plats à servir, tout passe entre leurs mains habiles. Leur savoir-faire et leur engagement transforment cette période en un moment de solidarité intense. Derrière chaque geste se cache la détermination de rendre ce mariage exceptionnel.

La mariée est au cœur de toutes les attentions, entourée de celles qui lui prodiguent conseils et soutien dans cette étape importante de sa vie. Quand elle quitte la maison familiale, l'émotion est palpable, marquée par des larmes et des sourires mêlés. Ce moment, empreint de traditions, est aussi une démonstration de l'unité et de l’affection qui lient les femmes autour de cet événement. Ce passage n’est pas seulement un adieu, c’est une étape de transmission où elles l’accompagnent vers un nouveau chapitre.

Tout au long des festivités, l’enthousiasme des femmes anime la célébration. Elles chantent, dansent, et célèbrent l’union avec une joie et une vitalité qui insufflent une énergie unique. Leur présence, bien plus qu’un simple ornement, est l’essence de ces rassemblements. Elles incarnent la continuité des traditions tout en apportant un vent de modernité et d’innovation. Les mariages algériens sont ainsi le reflet de cet équilibre délicat entre respect des coutumes et adaptation à une époque nouvelle.

Même face aux défis et tensions qui peuvent surgir durant les préparatifs, ce sont souvent elles qui trouvent les mots pour apaiser les esprits et faire de chaque obstacle une opportunité de renforcer les liens. Leur rôle ne se limite pas à la coordination ; elles apportent une sagesse et une sérénité indispensables.

Le mariage algérien, dans son essence, repose en grande partie sur leur engagement et leur soutien. Elles sont les gardiennes des traditions, les architectes de cette célébration, assurant que l’union des deux êtres soit magnifiée à chaque étape. Peu importe le nombre d’invités ou les imprévus, leur contribution fait de chaque mariage un moment unique et inoubliable.

Je vous invite donc à découvrir l’univers de nos mariages algériens, où l’amour et la complicité féminine se tissent pour créer des souvenirs précieux. Venez vivre ces instants de bonheur où se mêlent tradition, émotion et modernité, portés par la grâce et l’engagement des femmes.`,
  videoUrl: '/lien_sacré/video-lien-sacre.mp4',
  images: [
    '/lien_sacré/1-Couscous pour tous-Avec accentuation.jpg',
    '/lien_sacré/2-un emblème_-Avec accentuation.jpg',
    '/lien_sacré/3-Grumeleuse-Avec accentuation.jpg',
    '/lien_sacré/4-Al-ḥamdu li-l-lāh-Avec accentuation.jpg',
    '/lien_sacré/5-Tradition ancestrale_-Avec accentuation.jpg',
    '/lien_sacré/6-contre le mauvais œil.jpg',
    '/lien_sacré/7-mariée sublimée.jpg',
    '/lien_sacré/8-Confessions intimes_-Avec accentuation.jpg',
    '/lien_sacré/9-souffle fort-Avec accentuation.jpg',
    '/lien_sacré/10-Toute de soie vêtue-Avec accentuation.jpg',
    '/lien_sacré/11-le passage crucial de la jeune fille à l_épouse-Avec accentuation.jpg',
    '/lien_sacré/12-mariée honorée-Avec accentuation.jpg',
    '/lien_sacré/13-el mahdar -Avec accentuation.jpg',
    '/lien_sacré/14-Sentir le cœur s_emballer-Avec accentuation.jpg',
    '/lien_sacré/15-Parcelle incandescente_.jpg',
    '/lien_sacré/16-une dance .jpg',
    '/lien_sacré/17-Tout ira à merveille.jpg',
    '/lien_sacré/18-el hzam-Avec accentuation.jpg',
    '/lien_sacré/19-pleins de couleur .jpg',
    '/lien_sacré/21-Unissons nous-Avec accentuation.jpg',
    '/lien_sacré/rêve (photo à présenter)_.jpg',
  ],
}

// 2. PROJET : MARHOUMOUN (Mémoire et rituels funéraires)
const marhoumounProject = {
  title: 'مرحومون / Marhoumoun',
  description: 'Un hommage visuel et intime à la perte, à la mémoire et aux rituels funéraires.',
  videoUrl: '/videos/marhoumoun.mp4',
  images: ['/photos/marhoumoun-1.jpg', '/photos/marhoumoun-2.jpg'],
}

// Données organisées par catégories
const projectsData = {
  photography: [
    lienSacreProject,
    marhoumounProject,
    {
      title: 'La lumière des années noires',
      description: `Dans l'Algérie des années 90, la décennie noire...`,
      images: ['/photos/annees-noires-1.jpg'],
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
    lienSacreProject,
    marhoumounProject,
    {
      title: 'La lumière des années noires',
      description: 'Documentaire vidéo explorant les récits intimes.',
      videoUrl: '/videos/annees-noires.mp4',
    },
    {
      title: 'Acte manqué',
      description: 'Court-métrage expérimental.',
      videoUrl: '/videos/acte-manque.mp4',
    },
  ],
  audiography: [
    marhoumounProject,
  ],
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  return (
    <div className="font-sans bg-[#e2e1dd] text-zinc-900 min-h-screen px-6 md:px-20 py-10 selection:bg-zinc-300">
      {/* Navigation Minimaliste & Fine */}
      <header className="mb-20">
        <nav className="flex justify-center space-x-10 text-[11px] md:text-xs tracking-[0.25em] uppercase font-extralight text-zinc-800">
          <button 
            onClick={() => setSelectedProject(null)} 
            className="hover:text-black transition duration-300"
          >
            Biographie
          </button>

          {/* PHOTOGRAPHY */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-black transition duration-300 py-2">
              Photography
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block pt-3 w-56 text-center z-50">
              <div className="bg-[#e2e1dd]/90 backdrop-blur-md p-3 border border-zinc-400/20 shadow-sm space-y-2">
                {projectsData.photography.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedProject(project)}
                    className="block w-full text-[11px] tracking-wide font-extralight text-zinc-700 hover:text-black transition duration-200"
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* VIDEOGRAPHY */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-black transition duration-300 py-2">
              Videography
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block pt-3 w-56 text-center z-50">
              <div className="bg-[#e2e1dd]/90 backdrop-blur-md p-3 border border-zinc-400/20 shadow-sm space-y-2">
                {projectsData.videography.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedProject(project)}
                    className="block w-full text-[11px] tracking-wide font-extralight text-zinc-700 hover:text-black transition duration-200"
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* AUDIOGRAPHY */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-black transition duration-300 py-2">
              Audiography
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block pt-3 w-56 text-center z-50">
              <div className="bg-[#e2e1dd]/90 backdrop-blur-md p-3 border border-zinc-400/20 shadow-sm space-y-2">
                {projectsData.audiography.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedProject(project)}
                    className="block w-full text-[11px] tracking-wide font-extralight text-zinc-700 hover:text-black transition duration-200"
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <a href="#contact" className="hover:text-black transition duration-300">
            Contact
          </a>
        </nav>
      </header>

      {/* Contenu Principal */}
      <main className="max-w-2xl mx-auto space-y-20">
        {selectedProject ? (
          /* VUE PROJET SÉLECTIONNÉ */
          <section className="space-y-10 animate-fadeIn">
            <div className="flex justify-between items-baseline border-b border-zinc-400/20 pb-4">
              <h1 className="text-2xl md:text-4xl font-extralight tracking-wide text-zinc-900 lowercase">
                {selectedProject.title}
              </h1>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-black transition"
              >
                [fermer]
              </button>
            </div>

            {selectedProject.description && (
              <div className="text-xs md:text-sm leading-relaxed font-extralight text-zinc-700 whitespace-pre-line max-w-lg ml-auto">
                {selectedProject.description}
              </div>
            )}

            {selectedProject.videoUrl && (
              <div className="aspect-video w-full my-8 bg-black/5">
                <video controls className="w-full h-full object-cover">
                  <source src={encodeURI(selectedProject.videoUrl)} />
                </video>
              </div>
            )}

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="space-y-12 pt-4">
                {selectedProject.images.map((imgUrl: string, idx: number) => (
                  <div key={idx} className="w-full">
                    <img
                      src={encodeURI(imgUrl)}
                      alt={`${selectedProject.title} - photo ${idx + 1}`}
                      className="w-full h-auto object-cover opacity-95"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : (
          /* VUE BIOGRAPHIE PAR DÉFAUT */
          <section className="space-y-10">
            <h1 className="text-3xl md:text-4xl font-extralight tracking-tight text-zinc-900">
              Biographie
            </h1>

            <div className="text-xs md:text-sm leading-relaxed font-extralight text-zinc-700 space-y-5 max-w-lg ml-auto">
              <p>
                <strong className="font-light text-zinc-900">WAFAA SOLTANE</strong>, née en 1994 à Oran, a étudié la littérature française à l'Université d'Oran avant de se tourner vers la photographie documentaire.
              </p>
              <p>
                Son parcours artistique s'enrichit d'une formation auprès de la photographe Liasmine Fodil, suivie d'un mentorat approfondi avec Lola Khalfa dans le cadre de la première édition du projet Tilawin (2021-2022).
              </p>
              <p>
                Au sein de ce programme, Wafaa développe plusieurs projets photographiques qu'elle expose notamment à l'Institut français d'Oran, au Magasin du CNAC de Grenoble et à la Nuit de l'Année des Rencontres d'Arles.
              </p>
              <p>
                Elle poursuit son chemin en 2023 avec une résidence au MICT de Tunis, où elle mène un projet documentaire sur le tatouage et la femme tunisienne ainsi qu'un autre projet constituant un hommage visuel et intime à la perte, à la mémoire et aux rituels funéraires intitulé « Marhoumoun ».
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}