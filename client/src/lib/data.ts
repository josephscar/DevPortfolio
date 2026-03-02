export const projects = [
  {
    id: 1,
    title: "Crown's Landing",
    description:
      "I acted as lead gameplay system developer for this low-poly exploration centered RPG. Apart from gameplay design, I managed a team of 5 developers to bring this project to fruition.",
    tags: ["Unity", "C#"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    longDescription: "As project manager and lead developer I oversaw the development of the core gameplay systems for Crown's Landing. We focused heavily on tactile feedback during combat, ensuring every action felt grounded in the game world's physics.",
    releaseDate: "MAY 2026",
    category: "GAMEPLAY"
  },
  {
    id: 2,
    title: "WIZARD 202",
    description:
      "Spellcasting PvE example inspired by Wizard101 I solo built from scratch. Created all gameplay systems by myself and used Unity Store assets for art and music.",
    tags: ["Unity", "C#", "AI DESIGN"],
    image:
      "https://images.unsplash.com/photo-1614726365723-49cfae974e6c?q=80&w=2574&auto=format&fit=crop",
    link: "#",
    longDescription: "I created a fully functional spellcasting system for Wizard 202 with a complimentary scene that simulates the Wizard101 combat loop versus intelligent AI I designed. I focused on creating modular spell creation that allowed for complex spell combinations alongside a  custom animation director pipeline to allow for streamlined animation events that simulate the Wizard101 combat loop.",
    releaseDate: "UNRELEASED",
    category: "PROTOTYPE"
  },
  {
    id: 3,
    title: "Animation Director Pipeline",
    description:
      "For my WIZARD 202 project, I created a custom animation director pipeline to allow for streamlined animation events.",
    tags: ["Unity", "C#", "Custom Editor Tools"],
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    longDescription: "A deep dive into the custom editor window tools built to support the animation event pipeline, making the workflow heavily automated for animators.",
    releaseDate: "JAN 2026",
    category: "UNITY TOOLS PROGRAMMING"
  },
  {
    id: 4,
    title: "PROJECT TRIBUNAL",
    description:
      "In progress turn-based strategy game with a unique grid-based combat system. Planned to be a multiplayer experience.",
    tags: ["Unity", "C#", "A* ALG", "NETWORKING"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "#",
    longDescription: "A look into the grid-based movement logic, pathfinding optimizations, and turn-based resolution state machines designed for Project Tribunal.",
    releaseDate: "TBD",
    category: "TURN-BASED MULTIPLAYER"
  },
];

export const skills = [
  {
    category: "ENGINES",
    items: ["Unity 6", "Unreal Engine 5"],
  },
  {
    category: "LANGUAGES",
    items: ["C#", "C++", "SQL", "Python", "TypeScript"],
  },
  {
    category: "TOOLS", items: ["Custom Unity Tools", "Git", "Jira", "Confluence"]
  },
];
