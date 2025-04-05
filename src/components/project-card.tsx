"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
  inView: boolean
}

export function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="overflow-hidden group h-full flex flex-col">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="flex-grow p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

