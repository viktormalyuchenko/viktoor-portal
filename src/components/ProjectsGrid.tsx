"use client";

import { useEffect, useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard"; // Ваш готовый компонент карточки

export default function ProjectsGrid() {
  // Изначально берем проекты как они есть в базе (важно для SEO роботов)
  const [items, setItems] = useState<Project[]>(projects);

  useEffect(() => {
    // Эта функция сработает только в браузере пользователя
    // Создаем копию массива и перемешиваем ее случайным образом
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {items.map((project, index) => (
        // Передаем index для чередования цветов в ProjectCard
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {/* Карточка "СКОРО" (всегда будет в самом конце) */}
      <div className="bg-white/50 backdrop-blur-sm border-4 border-black border-dashed p-8 flex flex-col items-center justify-center text-center min-h-[300px] opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-4xl mb-4">🚧</span>
        <h3 className="font-black text-xl mb-2">СКОРО</h3>
        <p className="font-mono text-sm">Новый проект в разработке</p>
      </div>
    </div>
  );
}
