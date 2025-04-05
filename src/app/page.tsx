"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Send, Code, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCard } from "@/components/skill-card";
import { ProjectCard } from "@/components/project-card";
import { CourseCard } from "@/components/course-card";


export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const coursesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const mentorshipRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });
  const coursesInView = useInView(coursesRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  });
  const mentorshipInView = useInView(mentorshipRef, {
    once: true,
    amount: 0.3,
  });
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Includes payment processing, inventory management, and analytics dashboard.",
      image: "https://www.notiontechnologies.com/blog/wp-content/uploads/2023/03/how-to-build-an-ecommerce-website-from-scratch.webp",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "/projects/ecommerce-platform",
    },
    {
      id: 2,
      title: "Marketing Analytics Dashboard",
      description:
        "Real-time marketing analytics platform that integrates with Google Analytics, Facebook Ads, and other marketing platforms.",
      image: "https://cdn.prod.website-files.com/5a1eb87c9afe1000014a4c7d/66f55d4ee570f1542e5c2e16_AD_4nXc5uiuhBkq2a6kITCjyNM7ewEYbER9KdM1eZsV32Kz7ZQf64I2hZhDhwSXRm4uUsGxGBFiR1Y7fESpSAfu7yZ8VWAQ5QKPzRcD9kdcOgLOgXCq2xoeF3JbdwtmFsY56h_p-EcPgkXDmGvI9SRNCmS3-uA-c.jpeg",
      tags: ["Next.js", "Python", "Data Visualization", "API Integration"],
      link: "/projects/marketing-dashboard",
    },
    {
      id: 3,
      title: "Learning Management System",
      description:
        "Custom LMS built for coding bootcamps with video lessons, interactive coding challenges, and progress tracking.",
      image: "https://thinkpalm.com/wp-content/uploads/2017/11/Learning-Management-System.jpg",
      tags: ["React", "Express", "PostgreSQL", "WebSockets"],
      link: "/projects/lms-platform",
    },
    {
      id: 4,
      title: "SEO Optimization Tool",
      description:
        "Web application that analyzes websites for SEO improvements and provides actionable recommendations.",
      image: "https://fuzeseo.co/wp-content/uploads/2017/10/SEO-Tools.jpg",
      tags: ["Vue.js", "Node.js", "NLP", "SEO APIs"],
      link: "/projects/seo-tool",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      description:
        "Comprehensive 12-week program covering front-end, back-end, databases, and deployment. Build real-world projects with modern technologies.",
      image: "https://www.keycdn.com/img/support/full-stack-development.png",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      link: "/courses/full-stack-bootcamp",
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      description:
        "Learn SEO, SEM, social media marketing, content strategy, and analytics. Includes hands-on campaigns and real-world case studies.",
      image: "https://shardaproduction.com.np/wp-content/uploads/2023/11/Creative-digital-marketing-services.webp",
      duration: "8 weeks",
      level: "All Levels",
      link: "/courses/digital-marketing",
    },
    {
      id: 3,
      title: "Advanced React & Next.js",
      description:
        "Deep dive into advanced React patterns, state management, server components, and building high-performance applications.",
      image: "https://studio.uxpincdn.com/studio/wp-content/uploads/2024/04/next-js-vs-react-1024x512.png.webp",
      duration: "6 weeks",
      level: "Intermediate to Advanced",
      link: "/courses/advanced-react",
    },
    {
      id: 4,
      title: "Growth Hacking for Startups",
      description:
        "Practical strategies for rapid growth, user acquisition, conversion optimization, and retention for startups and small businesses.",
      image: "https://www.cloudways.com/blog/wp-content/uploads/Growth-Hacking-Strategies-for-Startups-FB-Banner.jpg",
      duration: "4 weeks",
      level: "Intermediate",
      link: "/courses/growth-hacking",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "Former Student, Now Senior Developer at TechCorp",
      content:
        "The mentorship I received completely transformed my career. I went from struggling with basic concepts to landing a senior developer role within a year. The personalized guidance and real-world projects made all the difference.",
      avatar: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director, StartupX",
      content:
        "As someone transitioning from traditional marketing to digital, I was overwhelmed until I found these courses. The step-by-step approach to digital marketing strategy and the ongoing mentorship helped me lead my company to triple our online conversions.",
      avatar: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Founder, CodeNinja Bootcamp",
      content:
        "I hired Alex as a consultant to help structure our coding bootcamp curriculum. Their deep knowledge of both technical skills and teaching methodologies helped us create a program that has a 94% job placement rate for our graduates.",
      avatar: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    },
  ];

  const devSkills = [
    { name: "JavaScript/TypeScript", icon: "🔧" },
    { name: "React & Next.js", icon: "⚛️" },
    { name: "Node.js & Express", icon: "🚀" },
    { name: "MongoDB & SQL", icon: "🗄️" },
    { name: "AWS & DevOps", icon: "☁️" },
    { name: "API Development", icon: "🔌" },
  ];

  const marketingSkills = [
    { name: "SEO & SEM", icon: "🔍" },
    { name: "Content Strategy", icon: "📝" },
    { name: "Social Media", icon: "📱" },
    { name: "Analytics", icon: "📊" },
    { name: "Email Marketing", icon: "📧" },
    { name: "Conversion Optimization", icon: "📈" },
  ];

  const mentorshipPrograms = [
    {
      title: "1:1 Developer Mentorship",
      description:
        "Personalized guidance for developers looking to level up their skills or transition to new technologies.",
      icon: <Code className="h-10 w-10 text-primary" />,
      features: [
        "Weekly 1-hour video sessions",
        "Code reviews and feedback",
        "Custom learning path",
        "Career guidance and interview prep",
      ],
    },
    {
      title: "Digital Marketing Coaching",
      description:
        "Strategic coaching for marketers and business owners looking to improve their digital marketing results.",
      icon: <Rocket className="h-10 w-10 text-primary" />,
      features: [
        "Marketing strategy development",
        "Campaign analysis and optimization",
        "Tool selection and implementation",
        "ROI measurement and reporting",
      ],
    },
    {
      title: "Group Mastermind",
      description:
        "Collaborative learning environment for developers and marketers to share knowledge and solve challenges together.",
      icon: <Users className="h-10 w-10 text-primary" />,
      features: [
        "Bi-weekly group sessions",
        "Peer learning and feedback",
        "Expert guest speakers",
        "Accountability and networking",
      ],
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex flex-wrap items-center w-full  z-65 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between ml-10 h-16">
          <a href="./page.tsx" className="text-xl font-bold ">
            Sahil<span className="text-blue-700 ">khatiwada</span>
          </a>
          <nav className="hidden md:flex items-center space-x-7  ">
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-blue-700  transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-700  transition-colors"
            >
              Projects
            </a>
            <a
              href="#courses"
              className="text-sm font-medium hover:text-blue-700  transition-colors"
            >
              Courses
            </a>
            <a
              href="#mentorship"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
            >
              Mentorship
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-700 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button size="sm" className="hidden hover:bg-blue-500 hover:text-white bg-blue-800 border border-blue-300 text-white md:flex">
              Book a Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                   <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text animate-pulse ">Sahil  Khatiwada</span>
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl font-medium text-primary"
                  >
                    Full Stack Developer & Digital Marketing Mentor
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                  >
                    Helping developers and marketers level up their skills
                    through personalized mentorship and practical training
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button size="lg">
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Book Mentorship
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
                  <img
                    src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                    alt="Hero illustration"
                    width={600}
                    height={600}
                    className="relative z-10 w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <ArrowRight className="h-6 w-6 rotate-90" />
            </motion.div>
            <span className="text-sm text-muted-foreground">Scroll Down</span>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" ref={aboutRef} className="py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.7 }}
              className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative w-full max-w-[400px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl" />
                  <img
                    src="https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/bltc86e7943bcc0e006/6569cbef0b642304079a348b/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0"
                    alt="Profile photo"
                    width={500}
                    height={500}
                    className="relative z-10 w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    About Me
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground">
                    With over 10 years of experience in software development and
                    digital marketing, I have helped hundreds of students and
                    professionals master technical skills and grow their
                    careers.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground">
                    I have worked with startups, Fortune 500 companies, and
                    educational institutions to develop curriculum, mentor
                    teams, and implement technical and marketing solutions that
                    drive real results.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground">
                    My teaching philosophy combines practical, project-based
                    learning with personalized mentorship to ensure you not only
                    understand concepts but can apply them effectively in
                    real-world scenarios.
                  </p>
                </div>
                <Button variant="outline" className="w-fit">
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section id="skills" ref={skillsRef} className="py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="text-center space-y-2 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Skills & Expertise
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground">
                Specialized in both development technologies and digital
                marketing strategies
              </p>
            </motion.div>

            <Tabs defaultValue="development" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
              </TabsList>
              <TabsContent value="development">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                  {devSkills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      icon={skill.icon}
                      index={index}
                      inView={skillsInView}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="marketing">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                  {marketingSkills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      name={skill.name}
                      icon={skill.icon}
                      index={index}
                      inView={skillsInView}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="text-center space-y-2 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Featured Projects
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground">
                Real-world applications and solutions I have developed
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  inView={projectsInView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" ref={coursesRef} className="py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                coursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="text-center space-y-2 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Courses & Workshops
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground">
                Comprehensive training programs designed for practical skill
                development
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {courses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  inView={coursesInView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          ref={testimonialsRef}
          className="py-24 bg-muted/30"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                testimonialsInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="text-center space-y-2 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Student Success Stories
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground">
                Hear from professionals who have transformed their careers
                through mentorship
              </p>
            </motion.div>
            <TestimonialCarousel
              testimonials={testimonials}
              inView={testimonialsInView}
            />
          </div>
        </section>

        {/* Mentorship Programs Section */}
        <section id="mentorship" ref={mentorshipRef} className="py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                mentorshipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5 }}
              className="text-center space-y-2 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Mentorship Programs
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground">
                Personalized guidance to accelerate your learning and career
                growth
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {mentorshipPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    mentorshipInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg border shadow-sm p-6 h-full flex flex-col"
                >
                  <div className="mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto">Apply Now</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Get in Touch
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground">
                    Have questions about mentorship, courses, or want to discuss
                    a custom training program for your team? Let connect.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>hello@alexmorgan.dev</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Schedule a free 15-minute consultation</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                      <path d="M10 8v8l6-4-6-4z"></path>
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Sahil Khatiwada. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
