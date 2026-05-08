"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";

const cardColors = ["bg-neo-secondary", "bg-neo-primary", "bg-neo-accent"];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const colorClass = cardColors[index % cardColors.length];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border-4 border-black shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all duration-200 reveal flex flex-col h-full"
    >
      <div className="aspect-video w-full overflow-hidden border-b-4 border-black bg-gray-100 flex items-center justify-center relative">
        <img
          src={project.imageUrl}
          alt={`Баннер ${project.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Контентная часть. flex-1 позволяет карточкам быть одной высоты */}
      <div
        className={`p-6 flex-1 flex flex-col ${colorClass} group-hover:bg-white transition-colors duration-200`}
      >
        <h2 className="text-2xl font-black mb-2">{project.name}</h2>

        {/* Блок с описанием, который раскрывается при наведении (Трюк с grid-rows) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
          <div className="overflow-hidden">
            <p className="font-mono text-sm mb-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.description || "Описание проекта скоро появится..."}
            </p>
          </div>
        </div>

        {/* Кнопка прижата к низу (mt-auto) */}
        <button className="mt-auto font-mono font-bold text-sm bg-black text-white px-4 py-2 hover:opacity-80 transition-opacity self-start">
          ОТКРЫТЬ
        </button>
      </div>
    </a>
  );
}
