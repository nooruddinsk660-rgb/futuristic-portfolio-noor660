// Personal Information
export const personalInfo = {
    name: "Nooruddin SK",
    title: "Full Stack Developer",
    email: "nooruddinsk660@gmail.com",
    phone: "+91 1234567890",
    location: "West Bengal, India",
    github: "https://github.com/nooruddinsk660-rgb",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    bio: "Passionate Full Stack Developer specializing in building exceptional digital experiences. I create responsive, user-friendly applications with modern technologies."
};

// Skills Data
export const skills = {
    frontend: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "JavaScript", icon: "🟨", level: 85 },
        { name: "HTML/CSS", icon: "🎨", level: 95 },
        { name: "Tailwind CSS", icon: "🎐", level: 88 },
        { name: "TypeScript", icon: "🔷", level: 80 },
        { name: "Next.js", icon: "▲", level: 82 }
    ],
    backend: [
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Express", icon: "⚡", level: 82 },
        { name: "MongoDB", icon: "🍃", level: 78 },
        { name: "PostgreSQL", icon: "🐘", level: 75 },
        { name: "REST API", icon: "🔌", level: 88 },
        { name: "GraphQL", icon: "💜", level: 70 }
    ],
    tools: [
        { name: "Git", icon: "📦", level: 90 },
        { name: "VS Code", icon: "💻", level: 95 },
        { name: "Figma", icon: "🎨", level: 70 },
        { name: "Postman", icon: "📮", level: 85 },
        { name: "Docker", icon: "🐳", level: 65 },
        { name: "AWS", icon: "☁️", level: 60 }
    ]
};

// Projects Data
export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        gradient: "from-blue-500 to-purple-600",
        techstack: ["React", "Node.js", "MongoDB", "Stripe"],
        features: [
            "User authentication and authorization",
            "Product catalog with search and filters",
            "Shopping cart and checkout process",
            "Payment integration with Stripe",
            "Admin dashboard for product management"
        ],
        liveLink: "https://your-ecommerce-demo.com",
        githubLink: "https://github.com/nooruddinsk660-rgb/ecommerce"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        gradient: "from-green-500 to-teal-600",
        techstack: ["React", "Firebase", "Tailwind CSS"],
        features: [
            "Real-time task updates",
            "Team collaboration features",
            "Drag-and-drop task organization",
            "Progress tracking and analytics",
            "Mobile responsive design"
        ],
        liveLink: "https://your-taskapp-demo.com",
        githubLink: "https://github.com/nooruddinsk660-rgb/task-manager"
    },
    {
        id: 3,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        gradient: "from-pink-500 to-rose-600",
        techstack: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
        features: [
            "Multi-platform analytics integration",
            "Real-time data visualization",
            "Custom report generation",
            "Performance metrics tracking",
            "Scheduled post management"
        ],
        liveLink: "https://your-dashboard-demo.com",
        githubLink: "https://github.com/nooruddinsk660-rgb/social-dashboard"
    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "Beautiful weather application with location-based forecasts and interactive maps.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
        gradient: "from-cyan-500 to-blue-600",
        techstack: ["React", "OpenWeather API", "Mapbox"],
        features: [
            "Real-time weather data",
            "5-day forecast predictions",
            "Interactive weather maps",
            "Location-based search",
            "Weather alerts and notifications"
        ],
        liveLink: "https://your-weather-demo.com",
        githubLink: "https://github.com/nooruddinsk660-rgb/weather-app"
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "Modern blogging platform with markdown support and SEO optimization.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
        gradient: "from-orange-500 to-red-600",
        techstack: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
        features: [
            "Markdown content support",
            "SEO optimization",
            "Comment system",
            "Category and tag management",
            "Reading time estimation"
        ],
        liveLink: "https://your-blog-demo.com",
        githubLink: "https://github.com/nooruddinsk660-rgb/blog-platform"
    },
    {
        id: 6,
        title: "Portfolio Generator",
        description: "SaaS application for creating professional portfolios with customizable templates.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        gradient: "from-purple-500 to-indigo-600",
        techstack: ["React", "Node.js", "Express", "MongoDB"],
        features: [
            "Multiple template options",
            "Drag-and-drop editor",
            "Custom domain support",
            "Analytics integration",
            "Export to PDF feature"
        ],
        liveLink: "https://your-portfolio-demo.com",
        githubLink: "https://github.com/nooruddinsk660-rgb/portfolio-generator"
    }
];

// Experience Data
export const experiences = [
    {
        id: 1,
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022 - Present",
        description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Leading a team of 3 developers.",
        icon: "💼"
    },
    {
        id: 2,
        company: "Creative Agency",
        position: "Frontend Developer",
        duration: "2020 - 2022",
        description: "Built responsive websites and web applications for various clients using modern frontend technologies.",
        icon: "🎨"
    },
    {
        id: 3,
        company: "Startup Hub",
        position: "Junior Developer",
        duration: "2019 - 2020",
        description: "Assisted in developing MVPs for startups, focusing on rapid prototyping and agile development.",
        icon: "🚀"
    }
];

// Education Data
export const education = [
    {
        id: 1,
        institution: "University of Technology",
        degree: "Bachelor of Computer Science",
        duration: "2015 - 2019",
        description: "Focused on software engineering, algorithms, and web development.",
        icon: "🎓"
    },
    {
        id: 2,
        institution: "Online Learning Platforms",
        degree: "Various Certifications",
        duration: "2019 - Present",
        description: "Continuous learning through platforms like Udemy, Coursera, and freeCodeCamp.",
        icon: "📚"
    }
];

// Services Data
export const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building responsive and performant web applications using modern technologies.",
        icon: "🌐"
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user interfaces with great user experience.",
        icon: "🎨"
    },
    {
        id: 3,
        title: "API Development",
        description: "Designing and implementing RESTful and GraphQL APIs for scalable applications.",
        icon: "🔌"
    },
    {
        id: 4,
        title: "Database Design",
        description: "Architecting efficient database schemas for both SQL and NoSQL databases.",
        icon: "💾"
    }
];

// Testimonials Data (Optional)
export const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO, Tech Company",
        comment: "Excellent work! Very professional and delivered on time.",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Project Manager",
        comment: "Great communication and technical skills. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?img=2"
    }
];