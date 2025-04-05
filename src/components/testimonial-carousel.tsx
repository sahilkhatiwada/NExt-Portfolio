"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  inView: boolean
}

export function TestimonialCarousel({ testimonials, inView }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={
                inView
                  ? {
                      opacity: index === current ? 1 : 0,
                      x: index === current ? 0 : index < current ? -100 : 100,
                      scale: index === current ? 1 : 0.9,
                    }
                  : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.5 }}
              className="w-full"
              style={{
                position: index === current ? "relative" : "absolute",
                visibility: index === current ? "visible" : "hidden",
              }}
            >
              <Card className="mx-auto max-w-3xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="text-lg sm:text-xl italic">{testimonial.content}</p>
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prev}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <div className="flex space-x-1">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrent(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
        <Button variant="outline" size="icon" className="rounded-full" onClick={next}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

