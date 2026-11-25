import type { OtherProject } from "./types"

/** Compact "Other things I've built" cards. Add an object here to add a card. */
export const otherProjects: OtherProject[] = [
  {
    id: "walk-safe",
    title: "Walk Safe",
    tagline: "Pedestrian routing, by lighting, traffic, air and green cover",
    description: [
      "A team project developed during my Software Developer internship at CS InnoHUB, Babeș-Bolyai University.",
      "I built the responsive map interface for a pedestrian routing application that helps users choose paths based on street lighting, traffic, air quality and green cover. I implemented address search, reverse geocoding, car route display and live bus tracking.",
    ],
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "OpenLayers"],
    github: "https://github.com/alexiai/Walk-Safe-In-Cluj-Napoca",
    demo: { label: "Demo video", href: "https://drive.google.com/file/d/1ILFkGFQHERc202kRAVM75j5j08A1zfrF/view?usp=sharing" },
  },
  {
    id: "lst-downscaling",
    title: "Land Surface Temperature Downscaling",
    boardTitle: "Satellite temperature maps",
    tagline: "A tool for comparing satellite temperature maps and exporting GeoTIFFs",
    description: [
      "I independently developed the web interface, backend and file-processing workflow for comparing satellite temperature maps and exporting GeoTIFF files.",
      "I also co-developed the regression model combining Landsat 8 and Sentinel-2 data to estimate land surface temperature on a 10m grid.",
    ],
    tech: ["JavaScript", "Node.js", "Python", "Google Earth Engine", "Rasterio", "Matplotlib"],
    github: "https://github.com/alexiai/Estimation-Of-Land-Surface-Temperature",
    demo: { label: "Demo video", href: "https://drive.google.com/file/d/1sTktpgRfE6f2Y9g4Sxj3Fb2MxqkTwQLV/view?usp=sharing" },
  },
  {
    id: "java-social-network",
    title: "Java Social Network",
    tagline: "A SQL-backed desktop social app",
    description: [
      "A desktop application where users can register, manage friend requests, exchange private messages and export activity or message history as PDF reports.",
      "I independently built it and used MVC architecture to separate the interface from business logic and database access.",
    ],
    tech: ["Java", "JavaFX", "FXML", "SQL", "Gradle"],
    github: "https://github.com/alexiai/Social-Network-App",
    demo: { label: "Screenshots", href: "https://drive.google.com/drive/folders/13RSEmcAQz8I2Pd1coBlVC9jO_iiHXDeL?dmr=1&ec=wgc-drive-hero-goto" },
  },
]
