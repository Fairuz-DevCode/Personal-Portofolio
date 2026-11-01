import React from "react"
import {
  ReactLogo,
  DockerLogo,
  PostgresLogo,
  LaravelLogo,
  TailwindLogo,
  PythonLogo,
  TypeScriptLogo,
  JavaLogo,
  GithubLogo,
  ViteLogo,
} from "../components/icons"

export interface TechBubble {
  id: string
  name: string
  bottom: string
  left?: string
  right?: string
  size: number
  delay: number
  initialRotate: number
  finalRotate: number
  color: string
  icon: React.ReactNode
}

// Pengaturan Fisika & Kecepatan Jatuh
export const FALL_CONFIG = {
  stiffness: 10, // Makin kecil angkanya, makin LAMBAT jatuhnya (10 - 25)
  damping: 18,   // Meredam getaran saat mendarat
  mass: 1.5,     // Makin besar bobotnya, makin LAMBAT (1.5 - 3.0)
  bounce: 0.3,   // Pantulan saat mendarat di dasar
}

// Data List Bubble Logo
export const TECH_BUBBLES: TechBubble[] = [
  {
    id: "react",
    name: "React",
    bottom: "18px",
    left: "6%",
    size: 48,
    delay: 0.3,
    initialRotate: -35,
    finalRotate: -8,
    color: "#61DAFB",
    icon: <ReactLogo />,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    bottom: "22px",
    left: "14%",
    size: 44,
    delay: 0.65,
    initialRotate: 40,
    finalRotate: 12,
    color: "#38BDF8",
    icon: <TailwindLogo />,
  },
  {
    id: "typescript",
    name: "TypeScript",
    bottom: "16px",
    left: "22%",
    size: 42,
    delay: 0.45,
    initialRotate: -25,
    finalRotate: -6,
    color: "#3178C6",
    icon: <TypeScriptLogo />,
  },
  {
    id: "docker",
    name: "Docker",
    bottom: "26px",
    left: "29%",
    size: 46,
    delay: 0.8,
    initialRotate: 30,
    finalRotate: 15,
    color: "#2496ED",
    icon: <DockerLogo />,
  },
  {
    id: "github",
    name: "GitHub",
    bottom: "16px",
    left: "36%",
    size: 40,
    delay: 0.55,
    initialRotate: -45,
    finalRotate: -14,
    color: "#FFFFFF",
    icon: <GithubLogo />,
  },
  {
    id: "java",
    name: "Java",
    bottom: "26px",
    right: "36%",
    size: 44,
    delay: 0.75,
    initialRotate: 35,
    finalRotate: 10,
    color: "#E76F00",
    icon: <JavaLogo />,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    bottom: "18px",
    right: "28%",
    size: 46,
    delay: 0.4,
    initialRotate: -30,
    finalRotate: -12,
    color: "#4169E1",
    icon: <PostgresLogo />,
  },
  {
    id: "laravel",
    name: "Laravel",
    bottom: "24px",
    right: "21%",
    size: 46,
    delay: 0.6,
    initialRotate: 25,
    finalRotate: 8,
    color: "#FF2D20",
    icon: <LaravelLogo />,
  },
  {
    id: "python",
    name: "FastAPI / Python",
    bottom: "16px",
    right: "13%",
    size: 44,
    delay: 0.9,
    initialRotate: -35,
    finalRotate: -16,
    color: "#FFD43B",
    icon: <PythonLogo />,
  },
  {
    id: "vite",
    name: "Vite",
    bottom: "20px",
    right: "6%",
    size: 40,
    delay: 0.5,
    initialRotate: 45,
    finalRotate: 14,
    color: "#BD34FE",
    icon: <ViteLogo />,
  },
]
