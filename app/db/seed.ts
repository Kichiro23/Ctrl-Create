import { getDb } from "../api/queries/connection";
import { projects } from "./schema";

async function seed() {
  const db = getDb();
  console.log("Seeding database...");

  const existing = await db.query.projects.findMany({ limit: 1 });
  if (existing.length > 0) {
    console.log("Projects already seeded. Skipping.");
    process.exit(0);
  }

  await db.insert(projects).values([
    {
      title: "Aurora Beauty Lounge",
      category: "Websites",
      description: "A premium beauty salon website with online booking, service showcases, and elegant visual design.",
      imageUrl: "/portfolio-1.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "The Fusion Studio",
      category: "Websites",
      description: "A dynamic fitness studio website featuring class schedules, trainer profiles, and membership management.",
      imageUrl: "/portfolio-2.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "The Crust & Crumb",
      category: "Websites",
      description: "A charming bakery website with online ordering, menu displays, and cozy brand aesthetics.",
      imageUrl: "/portfolio-3.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "Atelier Noir",
      category: "Websites",
      description: "A sophisticated fashion ecommerce platform with product grids, lookbook, and seamless checkout.",
      imageUrl: "/portfolio-4.jpg",
      link: "#",
      featured: false,
    },
    {
      title: "Arcadia Wellness Spa",
      category: "Design",
      description: "Complete brand identity including logo, business cards, stationery, and packaging design.",
      imageUrl: "/portfolio-5.jpg",
      link: "#",
      featured: true,
    },
    {
      title: "Cinematic Productions",
      category: "Video",
      description: "Professional video editing and motion graphics for a documentary film project.",
      imageUrl: "/portfolio-6.jpg",
      link: "#",
      featured: false,
    },
    {
      title: "Academic Portfolio System",
      category: "Websites",
      description: "A capstone defense portfolio website for an IT graduate student with thesis showcase.",
      imageUrl: "/portfolio-7.jpg",
      link: "#",
      featured: false,
    },
    {
      title: "Wanderlust Travel App",
      category: "Design",
      description: "UI/UX design for a travel booking mobile application with intuitive navigation.",
      imageUrl: "/portfolio-8.jpg",
      link: "#",
      featured: false,
    },
  ]);

  console.log("Seeded 8 portfolio projects.");
  process.exit(0);
}

seed();
