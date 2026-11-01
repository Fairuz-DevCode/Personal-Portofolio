import React from "react"
import {
  ReactLogo,
  TypeScriptLogo,
  TailwindLogo,
  LaravelLogo,
  PostgresLogo,
  PythonLogo,
  DockerLogo,
  JavaLogo,
} from "../components/icons"

export interface SkillItem {
  name: string
  percentage: number
  color: string
  icon: React.ReactNode
}

export const skillsLeft: SkillItem[] = [
  { name: "React", percentage: 90, color: "#61DAFB", icon: <ReactLogo className="size-5" /> },
  { name: "TypeScript", percentage: 85, color: "#3178C6", icon: <TypeScriptLogo className="size-5" /> },
  { name: "Tailwind CSS", percentage: 92, color: "#38BDF8", icon: <TailwindLogo className="size-5" /> },
  { name: "PHP (Laravel)", percentage: 88, color: "#FF2D20", icon: <LaravelLogo className="size-5" /> },
]

export const skillsRight: SkillItem[] = [
  { name: "PostgreSQL", percentage: 90, color: "#4169E1", icon: <PostgresLogo className="size-5" /> },
  { name: "Java", percentage: 85, color: "#E76F00", icon: <JavaLogo className="size-5" /> },
  { name: "Python (FastAPI)", percentage: 82, color: "#FFD43B", icon: <PythonLogo className="size-5" /> },
  { name: "Docker", percentage: 80, color: "#2496ED", icon: <DockerLogo className="size-5" /> },
]
