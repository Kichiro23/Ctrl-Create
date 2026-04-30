import { connectDb } from "./mongoose";
import { Project } from "./models";

async function seed() {
  await connectDb();
  console.log("Seeding database...");

  const existing = await Project.findOne();
  if (existing) {
    console.log("Projects already seeded. Skipping.");
    process.exit(0);
  }

  await Project.insertMany([
    {
      title: "Aurora Beauty Lounge",
      category: "Websites",
      description: "A premium beauty salon website with online booking, service showcases, and elegant visual design.",
      imageUrl: "/images/portfolio/portfolio-1.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "The Fusion Studio",
      category: "Websites",
      description: "A dynamic fitness studio website featuring class schedules, trainer profiles, and membership management.",
      imageUrl: "/images/portfolio/portfolio-2.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "The Crust & Crumb",
      category: "Websites",
      description: "A charming bakery website with online ordering, menu displays, and cozy brand aesthetics.",
      imageUrl: "/images/portfolio/portfolio-3.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "Atelier Noir",
      category: "Websites",
      description: "A sophisticated fashion ecommerce platform with product grids, lookbook, and seamless checkout.",
      imageUrl: "/images/portfolio/portfolio-4.jpg",
      link: "#",
      featured: false,
    },
    {
      title: "Arcadia Wellness Spa",
      category: "Design",
      description: "Complete brand identity including logo, business cards, stationery, and packaging design.",
      imageUrl: "/images/portfolio/portfolio-5.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "Cinematic Productions",
      category: "Video",
      description: "Professional video editing and motion graphics for a documentary film project.",
      imageUrl: "/images/portfolio/portfolio-6.jpg",
      link: "#",
      featured: false,
    },
    {
      title: "Academic Portfolio System",
      category: "Websites",
      description: "A capstone defense portfolio website for an IT graduate student with thesis showcase.",
      imageUrl: "/images/portfolio/portfolio-7.jpg",
      link: "#",
      featured: false,
    },
    {
      title: "Wanderlust Travel App",
      category: "Design",
      description: "UI/UX design for a travel booking mobile application with intuitive navigation.",
      imageUrl: "/images/portfolio/portfolio-8.jpg",
      link: "#",
      featured: false,
    },
  ]);

  console.log("Seeded 8 portfolio projects.");
  process.exit(0);
}

seed();
