import ProjectsGrid from "@/components/ProjectsGrid";

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

      {/* Вызываем наш новый компонент с сеткой */}
      <main className="container mx-auto px-4 pb-20">
        <ProjectsGrid />
      </main>
    </>
  );
}
