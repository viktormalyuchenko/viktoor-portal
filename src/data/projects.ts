export type Project = {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  description?: string;
};

export const projects: Project[] = [
  // --- Проекты со скриншота ---
  {
    id: "artemis",
    name: "Artemis",
    url: "https://artemis.viktoor.ru",
    imageUrl: "/images/artemis.png",
    description: "Сервис отслеживания полета на луну Artemis 2.",
  },
  {
    id: "bots",
    name: "Мои Боты",
    url: "https://bots.viktoor.ru",
    imageUrl: "/images/bots.png",
    description: "Коллекция Telegram-ботов для разных задач.",
  },
  {
    id: "brain",
    name: "Brain",
    url: "https://brain.viktoor.ru",
    imageUrl: "/images/brain.png",
    description: "Тесты для тренировки мозга.",
  },
  {
    id: "colorstrology",
    name: "Колорострология",
    url: "https://colorstrology.viktoor.ru",
    imageUrl: "/images/colorstrology.png",
    description: "Гороскоп на основе цветов.",
  },
  {
    id: "dev",
    name: "Dev Tools",
    url: "https://dev.viktoor.ru",
    imageUrl: "/images/dev.png",
    description: "Каталог инструментов для разработчиков работы.",
  },
  {
    id: "minecraft-music",
    name: "Minecraft Music",
    url: "https://minecraft-music.viktoor.ru",
    imageUrl: "/images/minecraft.png",
    description: "Простой плеер музыки из Minecraft.",
  },
  {
    id: "olympics",
    name: "Олимпиада",
    url: "https://olympics.viktoor.ru",
    imageUrl: "/images/olympics.png",
    description: "Расписаниезимней олимпиады 2026 в Италии.",
  },
  {
    id: "paletto",
    name: "Paletto",
    url: "https://paletto.viktoor.ru",
    imageUrl: "/images/paletto.png",
    description: "Генератор цветовых палитр для дизайнеров и художников.",
  },
  {
    id: "print",
    name: "Print",
    url: "https://print.viktoor.ru",
    imageUrl: "/images/print.png",
    description: "Инструмент для создания таблиц и календарей для печати.",
  },
  {
    id: "screen",
    name: "Screen",
    url: "https://screen.viktoor.ru",
    imageUrl: "/images/screen.png",
    description: "Коллекция интерактивных экранов и визуальных эффектов.",
  },
  {
    id: "tiktok",
    name: "TikTok Tools",
    url: "https://tiktok.viktoor.ru",
    imageUrl: "/images/tiktok.png",
    description: "Сервис красивого отображения статистики TikTok из JSON.",
  },
  {
    id: "weather",
    name: "Погода",
    url: "https://weather.viktoor.ru",
    imageUrl: "/images/weather.png",
    description:
      "Простой прогноз погоды отвечающий на вопрос - можно ли надеть шорты.",
  },
  {
    id: "yt",
    name: "YouTube Utils",
    url: "https://yt.viktoor.ru",
    imageUrl: "/images/yt.png",
    description: "Просмотр истории подписок на вашем YouTube-канале.",
  },

  {
    id: "my-road-trip-simulator",
    name: "Путешествие",
    url: "https://roadtrip.viktoor.ru",
    imageUrl: "/images/road.png",
    description: "Симулятор путешествия по миру по гугл картам.",
  },
];
