export const profile = {
  name: "Alexia",
  email: "cojanalexia@yahoo.com",
  // Derived from the BunnyBuddy repository URL (github.com/alexiai/…). Change if needed.
  github: "https://github.com/alexiai",
  linkedin: "https://www.linkedin.com/in/alexia-ilaria-cojan-122bba2bb/",
}

export const aboutIntro = [
  "I'm a Computer Science graduate currently pursuing a Master's in Data Science at Babeș-Bolyai University.",
  "I enjoy the space where technology meets creativity: building useful things, exploring new technologies and finding thoughtful ways to make digital experiences feel intuitive and personal.",
  "I'm particularly interested in frontend development, visual design and the possibilities of AI as a creative and technical tool.",
]

export const aboutStories = [
  {
    id: "discipline",
    number: "01",
    title: "Discipline, in practice.",
    text: "I practised Qwan Ki Do for approximately ten years, learning patience, precision and perseverance. My competitive achievements include first place at an international competition and third place at the European Championship in Verona.",
  },
  {
    id: "erasmus",
    number: "02",
    title: "A semester away.",
    text: "My Erasmus exchange at the University of Rostock, Germany, gave me the opportunity to study in an international environment and experience a different academic and cultural perspective.",
  },
  {
    id: "volunteering",
    number: "03",
    title: "Showing up for others.",
    text: "From 2018 to 2022, I volunteered with children through the Salesian Don Bosco Oratory in Bacău and local community activities, supporting educational and recreational activities and summer camps.",
  },
  {
    id: "debate",
    number: "04",
    title: "Finding my voice.",
    text: "I participated in debate activities and competitions during grades 7–10, developing critical thinking, structured argumentation and public-speaking skills.",
  },
]

export const creative = {
  text: "I enjoy drawing, painting, sewing, handicrafts and creating nail designs. I also enjoy photography, travelling and documenting everyday moments.",
  groups: [
    {
      title: "Nail art",
      photos: [
        { slot: "wildlife-nails", label: "Wildlife and sculpted florals" },
        { slot: "woodland-nail-details", label: "Woodland nails with sculpted animals" },
        { slot: "woodland-nails", label: "Woodland details" },
        { slot: "clock-nails", label: "Painted clock and roses" },
        { slot: "strawberry-nails", label: "Strawberry nails" },
        { slot: "flower-nails", label: "Sculpted gold flower" },
      ],
    },
    {
      title: "Painting & clay",
      photos: [
        { slot: "bunny-painting", label: "A portrait of my friend’s bunny" },
        { slot: "painted-bottle", label: "Hand-painted wine bottle" },
        { slot: "clay-campfire", label: "Clay campfire scene" },
        { slot: "clay-campfire-candle", label: "Campfire with a tea light" },
      ],
    },
  ],
}

export const timeline = [
  {
    id: "bsc",
    dates: "2022–2025",
    title: "BSc Computer Science",
    place: "Babeș-Bolyai University, Cluj-Napoca",
  },
  {
    id: "msc",
    dates: "2025–2027",
    title: "MSc Data Science",
    place: "Babeș-Bolyai University, Cluj-Napoca",
  },
  {
    id: "erasmus",
    dates: "Apr–Oct 2026",
    title: "Erasmus+ Exchange",
    place: "University of Rostock, Germany — Computer Science",
    note: "during the MSc",
  },
]

export const toolbox = [
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "React Native"] },
  { group: "Design", items: ["Figma", "Interface design", "Prototyping", "Visual communication"] },
  { group: "Backend & development", items: ["Node.js", "Firebase", "REST APIs", "Git", "GitHub", "Python", "Java", "SQL"] },
  {
    group: "Data Science & AI",
    items: ["Statistical testing", "Regression", "Data visualisation", "Drift detection", "AI-assisted development", "LLM tools", "AI integrations"],
  },
]

export const languages = [
  { name: "Romanian", level: "native" },
  { name: "English", level: "C2" },
  { name: "Italian", level: "fluent" },
]
