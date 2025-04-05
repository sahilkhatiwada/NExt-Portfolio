"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  name: string
  icon: string
  index: number
  inView: boolean
}

export function SkillCard({ name, icon, index, inView }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="overflow-hidden h-full group hover:border-primary transition-colors">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-medium">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}

