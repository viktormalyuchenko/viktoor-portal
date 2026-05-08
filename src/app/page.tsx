import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block bg-neo-accent border-4 border-black p-6 shadow-neo mb-8 rotate-1 hover:rotate-0 transition-transform duration-300">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2">
            PORTAL
          </h1>
          <p className="font-mono font-bold text-lg md:text-xl">
            Все мои проекты в одном месте
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Автоматический рендер всех проектов из базы */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* Карточки "СКОРО" (Placeholders) */}
          <div className="bg-white/50 backdrop-blur-sm border-4 border-black border-dashed p-8 flex flex-col items-center justify-center text-center min-h-[300px] opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-4xl mb-4">🚧</span>
            <h3 className="font-black text-xl mb-2">СКОРО</h3>
            <p className="font-mono text-sm">Новый проект в разработке</p>
          </div>
        </div>
      </main>
    </>
  );
}
