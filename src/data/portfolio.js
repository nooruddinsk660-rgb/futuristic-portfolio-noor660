import { Phone } from "lucide-react"

export const personalInfo = {
  name: "Sk Nooruddin",
  title: "Full Stack Developer",
  tagline: "I build futuristic web experiences with MERN stack",
  email: "nooruddinsk660@gmail.com",
  github: "https://github.com/nooruddinsk660-rgb",
  linkedin: "https://linkedin.com/in/noor",
  Phone: "https://wa.me/+912345678",
  twitter: "https://twitter.com/noor",
  resumeLink: "/resume.pdf",
  profileImage: "/profile.jpg"
}

export const about = {
  intro: "I'm a passionate full-stack developer specializing in building modern, scalable web applications. With expertise in the MERN stack, I transform ideas into elegant digital solutions.",
  highlights: [
         "Proficient in React,TailWindCSS and modern javascript with hands-on project experience",
         "Built responsive,fast and accesible websites using Vite + React",
         "skilled in creating animations,transitions and dynamic UI/UX with Framer Motion",
         "Strong foundation in Data Structures & Algorithms for efficient coding solution"

  ],
  passion: "I believe in writing clean, maintainable code and creating user experiences that make people say 'wow'. When I'm not coding, I'm learning new technologies or contributing to open source projects."
}

export const projects = [
  {
    id: 1,
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses, built with MERN stack and OpenAI API",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
    features: [
      "Real-time messaging with WebSocket",
      "AI chatbot integration",
      "User authentication with JWT",
      "Message encryption"
    ],
    liveLink: "https://ai-chat-demo.vercel.app",
    githubLink: "https://github.com/noor/ai-chat",
    image: "/projects/ai-chat.jpg",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, payments, and admin dashboard",
    techStack: ["React", "Express", "MongoDB", "Stripe", "Redux"],
    features: [
      "Product search and filtering",
      "Shopping cart with local storage",
      "Stripe payment integration",
      "Admin panel for inventory management"
    ],
    liveLink: "https://shop-demo.vercel.app",
    githubLink: "https://github.com/noor/ecommerce",
    image: "/projects/ecommerce.jpg",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across platforms",
    techStack: ["React", "Chart.js", "Node.js", "REST APIs"],
    features: [
      "Multi-platform data aggregation",
      "Interactive data visualizations",
      "Real-time metrics updates",
      "Export reports as PDF"
    ],
    liveLink: "https://analytics-demo.vercel.app",
    githubLink: "https://github.com/noor/analytics",
    image: "/projects/analytics.jpg",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with kanban boards and team features",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    features: [
      "Drag-and-drop kanban boards",
      "Real-time collaboration",
      "Task assignments and deadlines",
      "Team chat integration"
    ],
    liveLink: "https://tasks-demo.vercel.app",
    githubLink: "https://github.com/noor/tasks",
    image: "/projects/tasks.jpg",
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Beautiful weather app with 7-day forecasts and location-based alerts",
    techStack: ["React", "OpenWeather API", "Geolocation", "PWA"],
    features: [
      "Current weather and 7-day forecast",
      "Location-based weather alerts",
      "Hourly weather predictions",
      "Offline support with PWA"
    ],
    liveLink: "https://weather-demo.vercel.app",
    githubLink: "https://github.com/noor/weather",
    image: "/projects/weather.jpg",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Track workouts, calories, and fitness goals with interactive charts",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "JWT"],
    features: [
      "Workout logging and tracking",
      "Calorie counter with food database",
      "Progress visualization",
      "Goal setting and reminders"
    ],
    liveLink: "https://fitness-demo.vercel.app",
    githubLink: "https://github.com/noor/fitness",
    image: "/projects/fitness.jpg",
    gradient: "from-red-500 to-pink-600"
  }
]

export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 95, icon: "🟨" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "Redux", level: 85, icon: "🔄" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Express", level: 90, icon: "🚂" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "Socket.io", level: 80, icon: "🔌" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "📦" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 85, icon: "📮" },
    { name: "Vercel", level: 90, icon: "▲" },
    { name: "Docker", level: 75, icon: "🐳" },
  ]
}

export const achievements = [
  { number: "15+", label: "Projects Built" },
  { number: "2+", label: "Years Experience" },
  { number: "50K+", label: "Lines of Code" },
  { number: "100%", label: "Client Satisfaction" }
]