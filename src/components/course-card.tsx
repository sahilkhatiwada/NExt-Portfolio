"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, BarChart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Course {
  id: number
  title: string
  description: string
  image: string
  duration: string
  level: string
  link: string
}

interface CourseCardProps {
  course: Course
  index: number
  inView: boolean
}

export function CourseCard({ course, index, inView }: CourseCardProps) {
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
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="flex-grow p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-muted-foreground">{course.description}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <BarChart className="mr-1 h-4 w-4" />
              {course.level}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            variant="outline"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

