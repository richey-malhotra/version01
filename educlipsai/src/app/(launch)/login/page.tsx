'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link'
import Image from 'next/image'
import { Github, Mail, Lock, FileText, HelpCircle, MoonIcon, SunIcon, User } from 'lucide-react'
import { useTheme } from 'next-themes'

const testimonials = [
  {
    quote: "EduClipsAI transformed my learning journey. It's like having a genius mentor available 24/7!",
    author: "Dr. Emily Chen",
    role: "AI Researcher"
  },
  {
    quote: "The personalized learning paths are mind-blowing. I've achieved in weeks what used to take months!",
    author: "Mark Johnson",
    role: "Software Engineer"
  },
  {
    quote: "As an educator, EduClipsAI has revolutionized how I create and deliver content. It's a game-changer!",
    author: "Prof. Sarah Thompson",
    role: "Computer Science Professor"
  },
  {
    quote: "The AI-powered explanations make complex topics crystal clear. It's like having a superpower!",
    author: "Alex Rodriguez",
    role: "Data Scientist"
  }
]

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80" className="w-full h-full">
      <defs>
        <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .out-top {
          animation: rotate 20s linear infinite;
          transform-origin: 13px 25px;
        }
        .in-top {
          animation: rotate 10s linear infinite;
          transform-origin: 13px 25px;
        }
        .out-bottom {
          animation: rotate 25s linear infinite;
          transform-origin: 84px 93px;
        }
        .in-bottom {
          animation: rotate 15s linear infinite;
          transform-origin: 84px 93px;
        }
      `}</style>
      </defs>
      <path fill="#4F46E5" className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
      <path fill="#6D28D9" className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />
      <path fill="#8B5CF6" className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
      <path fill="#A78BFA" className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
    </svg>
  </div>
)

const StarryBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s infinite alternate, move ${star.duration * 2}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s infinite ease-in-out`,
          }}
        >
          <div className="absolute w-full h-full rounded-full bg-white opacity-30 animate-pulse" style={{ animationDuration: `${particle.duration * 0.5}s` }} />
          <div className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-white to-transparent -left-1/2 top-1/2 transform -translate-y-1/2 animate-trail" style={{ animationDuration: `${particle.duration * 0.75}s` }} />
        </div>
      ))}
    </div>
  )
}

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [isUKLocale, setIsUKLocale] = useState(false)
  const { theme, setTheme } = useTheme()
  const carouselRef = useRef<HTMLDivElement>(null)
  const rightSideAnimation = useAnimation()
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)


  useEffect(() => {
    const userLocale = navigator.language || navigator.languages[0]
    setIsUKLocale(userLocale.startsWith('en-GB'))

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const autoScroll = () => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const intervalId = setInterval(autoScroll, 5000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const autoScroll = async () => {
      if (carouselRef.current) {
        const items = carouselRef.current.querySelectorAll('.carousel-item')
        let currentIndex = 0

        while (true) {
          await new Promise(resolve => setTimeout(resolve, 5000))
          currentIndex = (currentIndex + 1) % items.length
          carouselRef.current.scrollTo({
            left: currentIndex * carouselRef.current.offsetWidth,
            behavior: 'smooth'
          })
        }
      }
    }

    autoScroll()
  }, [])

  const formatDate = useMemo(() => {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
    return {
      time: (date: Date | null) => {
        if (!date) return 'Loading...'
        return new Intl.DateTimeFormat('en-GB', timeOptions).format(date)
      },
      date: (date: Date | null, isUK: boolean) => {
        if (!date) return 'Loading...'
        if (isUK) {
          return new Intl.DateTimeFormat('en-GB', dateOptions).format(date).replace(',', '')
        } else {
          return new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date)
        }
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent, action: 'login' | 'register') => {
    e.preventDefault()
    if (action === 'login') {
      console.log('Login submitted:', { email, password })
    } else {
      console.log('Register submitted:', { name, email, password, confirmPassword })
    }
  }

  const renderCalendar = () => {
    if (!currentTime) return <div>Loading calendar...</div>

    const today = currentTime
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const daysInMonth = lastDayOfMonth.getDate()
    const startingDay = firstDayOfMonth.getDay()

    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const currentMonth = monthNames[today.getMonth()]

    const calendarDays = []
    for (let i = 0; i < startingDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="text-center text-gray-400"></div>)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(
        <div key={i} className={`text-center ${i === today.getDate() ? 'bg-purple-600 text-white rounded-full font-bold' : ''}`}>
          {i}
        </div>
      )
    }

    return (
      <div className="w-full">
        <div className="text-center font-bold mb-1 text-sm uppercase tracking-wide font-mono">{currentMonth}</div>
        <div className="grid grid-cols-7 gap-1 text-[0.5rem]">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="text-center font-bold">{day}</div>
          ))}
          {calendarDays}
        </div>
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side with enhanced animation */}
      <div className="hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 p-12 text-white relative overflow-hidden border-r border-white/10">
        <StarryBackground />
        <FloatingParticles />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30"></div>
          <div className="absolute inset-0 neural-network"></div>
          <div className="absolute inset-0 particles"></div>
          <div className="absolute inset-0 pulse-circles"></div>
          <div className="absolute inset-0 drifting-dots"></div>
          <div className="absolute inset-0 large-circles"></div>
          <div className="absolute inset-0 glowing-orbs"></div>
          <div className="absolute inset-0 swarming-dots"></div>
          <div className="absolute inset-0 gradient-sweep"></div>
          <div className="absolute inset-0 aurora-waves"></div>
        </div>
        <div className="z-10 flex flex-col h-full">
          {/* Top content and separator */}
          <div className="mb-8">
            <div className="flex justify-between items-center w-full mb-4">



            <Link href="/landing" className="flex items-center space-x-2">
   
                <Image
                  src="/logo.webp?height=60&width=60"
                  alt="EduClipsAI Logo"
                  width={60}
                  height={60}
                  onClick={() => window.location.href = '/landing'}
                />
                <h1 className="text-4xl font-bold">EduClipsAI</h1>
                </Link>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 transition-colors duration-300 bg-white/10 backdrop-blur-sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Docs
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 transition-colors duration-300 bg-white/10 backdrop-blur-sm">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Support
                    </Button>
                  </div>
                
              <div className="text-right">
                <div className="text-xl font-light font-mono">
                  <span className="text-sm uppercase tracking-wide block mb-1">TIME</span>
                  <div className="text-2xl font-light font-mono">
                    {formatDate.time(currentTime)}
                  </div>
                </div></div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>
          </div>

          {/* Middle content (Carousel) */}
          <div className="flex-grow flex items-center justify-center">
            <Carousel className="w-full max-w-md" ref={carouselRef}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className={index === currentTestimonialIndex ? 'block' : 'hidden'}>
                    <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <blockquote className="text-lg font-light mb-4 text-center">
                        &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <cite className="text-sm">
                          - {testimonial.author}, {testimonial.role}
                        </cite>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Bottom content and separator */}
          <div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>
            <div className="flex justify-between items-end w-full mt-4">
              <div className="text-xl font-light font-mono">
                <span className="text-sm uppercase tracking-wide block mb-1">Version</span>
                <span className="text-xl">v1.0.3</span>
              </div>
              <div className="flex items-end space-x-8">
                <div className="w-24">
                  {renderCalendar()}
                </div>
                <div className="text-xl font-light font-mono text-right">
                  <span className="text-sm uppercase tracking-wide block mb-1">DATE</span>
                  {formatDate.date(currentTime, isUKLocale)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with tabs for login and register */}
      <motion.div
        className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:p-24 bg-white dark:bg-gray-900 relative overflow-hidden border-l border-gray-200 dark:border-gray-800"
        animate={rightSideAnimation}
      >
        <AnimatedBackground />
        <Card className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 relative z-10">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">Welcome to EduClipsAI</CardTitle>
            <CardDescription className="text-center text-gray-600 dark:text-gray-400">Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    Login
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-confirm-password"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    Register
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background dark:bg-gray-800 px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button variant="outline" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
            </div>
          </CardFooter>
        </Card>
        <div className="mt-8 text-sm text-center text-muted-foreground relative z-10">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-4">
            <p>
              By continuing, you agree to our{' '}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 z-20"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
      </motion.div>

      <style jsx global>{`
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .gradient-button {
        background: linear-gradient(to right, #7c3aed, #4f46e5, #3b82f6);
        background-size: 200% auto;
        color: white;
        transition: all 0.3s ease;
        animation: gradient 5s ease infinite;
      }

      .gradient-button:hover {
        background-size: 200% auto;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
      }

      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }

      @keyframes move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(10px, 10px); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-15px) translateX(15px); }
        50% { transform: translateY(-30px) translateX(0); }
        75% { transform: translateY(-15px) translateX(-15px); }
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.1); opacity: 0.7; }
      }

      @keyframes trail {
        0% { transform: scaleX(0); opacity: 0.7; }
        50% { transform: scaleX(1); opacity: 0.3; }
        100% { transform: scaleX(0); opacity: 0; }
      }

      @keyframes subtlePulse {
        0%, 100% { transform: scale(1); opacity: 0.4; }
        50% { transform: scale(1.05); opacity: 0.6; }
      }

      @keyframes gentleFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @keyframes softNetwork {
        0%, 100% { background-position: 0% 0%; }
        50% { background-position: 100% 100%; }
      }

      @keyframes calmDrift {
        0% { transform: translate(0, 0); }
        25% { transform: translate(3%, 5%); }
        50% { transform: translate(5%, 3%); }
        75% { transform: translate(3%, -3%); }
        100% { transform: translate(0, 0); }
      }

      @keyframes softGlow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.5; }
      }

      @keyframes swarm {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(15px, 15px); }
        50% { transform: translate(-15px, 15px); }
        75% { transform: translate(-15px, -15px); }
      }

      @keyframes gradientSweep {
        0%, 100% { transform: translateX(-100%); opacity: 0; }
        50% { transform: translateX(100%); opacity: 0.2; }
      }

      @keyframes auroraWaves {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
        50% { transform: translateY(-20px) scale(1.1); opacity: 0.5; }
      }

   

      .neural-network {
        background-image: 
          radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
          radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: softNetwork 60s infinite linear;
      }

      .particles::before,
      .particles::after {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        animation: gentleFloat 12s infinite ease-in-out, calmDrift 30s infinite ease-in-out;
      }

      .particles::before {
        top: 20%;
        left: 20%;
        animation-delay: -2s;
      }

      .particles::after {
        bottom: 20%;
        right: 20%;
        animation-delay: -4s;
      }

      .pulse-circles::before,
      .pulse-circles::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        animation: subtlePulse 8s infinite ease-in-out, calmDrift 35s infinite ease-in-out;
      }

      .pulse-circles::before {
        width: 300px;
        height: 300px;
        top: 10%;
        left: 10%;
      }

      .pulse-circles::after {
        width: 400px;
        height: 400px;
        bottom: 10%;
        right: 10%;
        animation-delay: -3s;
      }

      .drifting-dots::before,
      .drifting-dots::after,
      .drifting-dots .dot {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        animation: calmDrift 40s infinite ease-in-out;
      }

      .drifting-dots::before { top: 40%; left: 40%; animation-delay: -5s; }
      .drifting-dots::after { bottom: 30%; right: 35%; animation-delay: -15s; }
      .drifting-dots .dot:nth-child(1) { top: 15%; left: 25%; animation-delay: -7s; }
      .drifting-dots .dot:nth-child(2) { top: 60%; left: 15%; animation-delay: -12s; }
      .drifting-dots .dot:nth-child(3) { top: 75%; left: 35%; animation-delay: -18s; }
      .drifting-dots .dot:nth-child(4) { top: 25%; left: 65%; animation-delay: -23s; }
      .drifting-dots .dot:nth-child(5) { top: 80%; left: 70%; animation-delay: -9s; }

      .large-circles::before,
      .large-circles::after,
      .large-circles .circle {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.03);
        animation: subtlePulse 10s infinite ease-in-out, calmDrift 30s infinite ease-in-out;
      }

      .large-circles::before { width: 500px; height: 500px; top: 5%; left: 0%; }
      .large-circles::after { width: 450px; height: 450px; bottom: 10%; right: 5%; animation-delay: -4s; }
      .large-circles .circle:nth-child(1) { width: 400px; height: 400px; top: 30%; left: 20%; animation-delay: -8s; }
      .large-circles .circle:nth-child(2) { width: 550px; height: 550px; top: 60%; left: 50%; animation-delay: -12s; }
      .large-circles .circle:nth-child(3) { width: 350px; height: 350px; top: 15%; left: 60%; animation-delay: -16s; }

      .glowing-orbs::before,
      .glowing-orbs::after,
      .glowing-orbs .orb {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%);
        animation: softGlow 8s infinite ease-in-out, calmDrift 35s infinite ease-in-out;
      }

      .glowing-orbs::before { top: 25%; left: 15%; }
      .glowing-orbs::after { bottom: 20%; right: 10%; animation-delay: -3s; }
      .glowing-orbs .orb:nth-child(1) { top: 50%; left: 50%; animation-delay: -1.5s; }
      .glowing-orbs .orb:nth-child(2) { top: 75%; left: 30%; animation-delay: -4.5s; }
      .glowing-orbs .orb:nth-child(3) { top: 10%; left: 60%; animation-delay: -6s; }

      .swarming-dots::before,
      .swarming-dots::after,
      .swarming-dots .dot {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.9);
        animation: swarm 15s infinite ease-in-out;
      }

      .swarming-dots::before {
        top: 30%;
        left: 40%;
        animation-delay: -2s;
      }

      .swarming-dots::after {
        top: 70%;
        left: 60%;
        animation-delay: -4s;
      }

      .swarming-dots .dot:nth-child(1) { top: 20%; left: 20%; animation-delay: -1s; }
      .swarming-dots .dot:nth-child(2) { top: 40%; left: 80%; animation-delay: -3s; }
      .swarming-dots .dot:nth-child(3) { top: 60%; left: 30%; animation-delay: -5s; }
      .swarming-dots .dot:nth-child(4) { top: 80%; left: 70%; animation-delay: -7s; }
      .swarming-dots .dot:nth-child(5) { top: 10%; left: 50%; animation-delay: -9s; }
      .swarming-dots .dot:nth-child(6) { top: 50%; left: 10%; animation-delay: -11s; }
      .swarming-dots .dot:nth-child(7) { top: 90%; left: 40%; animation-delay: -13s; }
      .swarming-dots .dot:nth-child(8) { top: 30%; left: 90%; animation-delay: -15s; }
      .swarming-dots .dot:nth-child(9) { top: 70%; left: 20%; animation-delay: -17s; }
      .swarming-dots .dot:nth-child(10) { top: 40%; left: 60%; animation-delay: -19s; }
      .swarming-dots .dot:nth-child(11) { top: 85%; left: 85%; animation-delay: -21s; }
      .swarming-dots .dot:nth-child(12) { top: 15%; left: 75%; animation-delay: -23s; }

      .gradient-sweep {
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
        animation: gradientSweep 15s infinite ease-in-out;
      }

      .aurora-waves {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, 
          rgba(97, 218, 251, 0.1), 
          rgba(128, 0, 128, 0.1), 
          rgba(255, 0, 255, 0.1),
          rgba(255, 165, 0, 0.1),
          rgba(255, 69, 0, 0.1)
        );
        filter: blur(800px);
        animation: auroraWaves 20s infinite ease-in-out;
      }




      @media (prefers-reduced-motion) {
        .animated-background, .gradient-button, .neural-network, .particles, .pulse-circles,
        .drifting-dots, .large-circles, .glowing-orbs, .swarming-dots, .gradient-sweep,
        .aurora-waves, .floating-particles {
          animation: none;
        }
      }
    `}</style>
    </div>

  )
}