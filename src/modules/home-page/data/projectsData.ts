import webgis from "../../../../public/image/webgis.png";
import streetwear from "../../../../public/image/streetwear.png";

export interface ProjectItem {
  id: string
  title: string
  category: string
  techLine: string
  description: string
  highlights: string[]
  tags: string[]
  demoUrl: string
  githubUrl: string
  image: string
}

export const projects: ProjectItem[] = [
  {
    id: "peatland-webgis",
    title: "Peatland WebGIS",
    category: "Geospatial System",
    techLine: "React, FastAPI, PostGIS, Docker",
    description: "A spatial information system processing NASA FIRMS satellite data and ERA5 climate datasets.",
    highlights: [
      "Real-time NASA FIRMS active wildfire hotspots feed ingestion",
      "PostGIS spatial indexing & climate risk polygon queries",
      "Interactive map overlays with Leaflet & MapLibre GL",
    ],
    tags: ["React", "FastAPI", "PostGIS", "Docker"],
    demoUrl: "https://webgis.fairuzirhab.my.id",
    githubUrl: "https://github.com/Fairuz-DevCode/FIRMS-WEBGIS",
    image: webgis,
  },
  {
    id: "streetwear-ecommerce",
    title: "StreetWear Shop",
    category: "E-Commerce Platform",
    techLine: "React, Tailwind, Laravel, PostgreSQL",
    description: "Full-stack streetwear e-commerce platform with JWT HTTP-Only authentication and Zod validation.",
    highlights: [
      "Secure auth with HTTP-Only cookie JWT & refresh tokens",
      "ACID transactional cart & checkout in Laravel & Postgres",
      "Dynamic product filter & responsive catalog UI",
    ],
    tags: ["React", "Tailwind", "Laravel", "PostgreSQL"],
    demoUrl: "https://github.com/Fairuz-bit",
    githubUrl: "https://github.com/Fairuz-bit",
    image: streetwear
  },
]
