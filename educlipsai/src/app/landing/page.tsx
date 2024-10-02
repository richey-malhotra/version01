'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { MoonIcon, SunIcon, ChevronUp, MessageCircle, Play, CheckCircle, ArrowRight, Zap, Users, Shield, Brain, Sparkles, Database, Github, Mail, Twitter, Eye, BookOpen, Lightbulb, Target, BarChart, Clock, Video, FileText, PieChart, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function CountdownTimer() {
const [timeLeft, setTimeLeft] = useState(24 * 60 * 60)

useEffect(() => {
const timer = setInterval(() => {
setTimeLeft(prevTime => prevTime - 1)
}, 1000)

return () => clearInterval(timer)
}, [])

const hours = Math.floor(timeLeft / 3600)
const minutes = Math.floor((timeLeft % 3600) / 60)
const seconds = timeLeft % 60

return (
<div className="text-center py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
<p className="text-sm font-medium">Limited Time Offer Ends In: <span className="font-bold">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span></p>
</div>
)
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
return (
<Card className="w-full p-6 bg-white dark:bg-gray-800 border-none shadow-xl">
<CardContent className="flex flex-col h-full justify-between">
  <p className="mb-4 italic text-gray-700 dark:text-gray-300">&quot;{testimonial.quote}&quot;</p>
  <div className="flex items-center mt-4">
    <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mr-4" />
    <div>
      <p className="font-semibold text-purple-600 dark:text-purple-400">{testimonial.name}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
    </div>
  </div>
</CardContent>
</Card>
)
}

function TestimonialCarousel() {
const testimonials: Testimonial[] = [
{ name: "Dr. Emily Chen", role: "AI Researcher", quote: "EduClipsAI has revolutionized the way I stay updated with the latest AI trends and research. It's an indispensable tool for any serious academic or professional.", image: "/placeholder.svg?height=200&width=200" },
{ name: "Mark Johnson", role: "Software Engineer", quote: "The personalized learning paths have accelerated my professional development. I've learned more in the past month using EduClipsAI than in the previous year on my own.", image: "/placeholder.svg?height=200&width=200" },
{ name: "Sarah Thompson", role: "Graduate Student", quote: "As a busy grad student, EduClipsAI has been a game-changer. The AI summaries and interactive timelines have made my research process incredibly efficient.", image: "/placeholder.svg?height=200&width=200" },
{ name: "Alex Rodriguez", role: "Data Scientist", quote: "EduClipsAI's ability to extract key insights from complex technical videos has significantly boosted my productivity. It's like having a personal AI research assistant.", image: "/placeholder.svg?height=200&width=200" },
{ name: "Dr. Lisa Wang", role: "Professor of Computer Science", quote: "I recommend EduClipsAI to all my students. It's an excellent tool for staying current with rapidly evolving tech fields and enhancing self-directed learning.", image: "/placeholder.svg?height=200&width=200" }
]

const [currentIndex, setCurrentIndex] = useState(0)

const nextTestimonial = () => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
}

const prevTestimonial = () => {
setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
}

return (
<div className="relative overflow-hidden">
<TestimonialCard testimonial={testimonials[currentIndex]} />
<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
  <Button variant="outline" size="sm" onClick={prevTestimonial} className="bg-white dark:bg-gray-800">
    Previous
  </Button>
  <Button variant="outline" size="sm" onClick={nextTestimonial} className="bg-white dark:bg-gray-800">
    Next
  </Button>
</div>
</div>
)
}

function ExitIntentPopup() {
const [showPopup, setShowPopup] = useState(false)

useEffect(() => {
const handleMouseLeave = (e: MouseEvent) => {
if (e.clientY <= 0) {
  setShowPopup(true)
}
}

document.addEventListener('mouseleave', handleMouseLeave)

return () => {
document.removeEventListener('mouseleave', handleMouseLeave)
}
}, [])

if (!showPopup) return null

return (
<Dialog open={showPopup} onOpenChange={setShowPopup}>
<DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl">
  <DialogHeader>
    <DialogTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400">Wait! Don&apos;t miss out!</DialogTitle>
    <DialogDescription className="text-gray-700 dark:text-gray-300">
      Sign up now and get an exclusive 50% discount on your first month!
    </DialogDescription>
  </DialogHeader>
  <div className="flex justify-between mt-6">
    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">Claim My Discount</Button>
    <Button variant="outline" onClick={() => setShowPopup(false)} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
      No, thanks
    </Button>
  </div>
</DialogContent>
</Dialog>
)
}

function FreeTrialForm({ onClose }: { onClose: () => void }) {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault()
console.log('Form submitted:', formData)
onClose()
}

return (
<form onSubmit={handleSubmit} className="space-y-4">
<div>
  <Label htmlFor="name">Name</Label>
  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
</div>
<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
</div>
<div>
  <Label htmlFor="password">Password</Label>
  <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
</div>
<Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
  Start Your 7-Day Free Trial
</Button>
<p className="text-center text-sm text-gray-500 dark:text-gray-400">No credit card required</p>
<div className="flex justify-between space-x-4">
  <Button type="button" variant="outline" className="flex-1" onClick={() => console.log('Sign up with Google')}>
    <Mail className="w-4 h-4 mr-2" />
    Google
  </Button>
  <Button type="button" variant="outline" className="flex-1" onClick={() => console.log('Sign up with GitHub')}>
    <Github className="w-4 h-4 mr-2" />
    GitHub
  </Button>
</div>
</form>
)
}

function TwitterFeed() {
const tweets = [
{ id: 1, content: "Excited to announce our latest AI-powered feature! #EduClipsAI #EdTech", author: "EduClipsAI", timestamp: "2h ago" },
{ id: 2, content: "Join our webinar on 'The Future of AI in Education' this Friday! Register now. #AIEducation", author: "EduClipsAI", timestamp: "5h ago" },
{ id: 3, content: "Thanks to all our users for the amazing feedback. We're constantly improving based on your suggestions! #UserLove", author: "EduClipsAI", timestamp: "1d ago" },
{ id: 4, content: "New case study: How EduClipsAI helped a leading university improve student engagement by 40%. Read more on our blog!", author: "EduClipsAI", timestamp: "2d ago" },
]

return (
<Card className="bg-white dark:bg-gray-800 shadow-lg">
<CardHeader>
  <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center">
    <Twitter className="w-6 h-6 mr-2" />
    Latest Updates
  </CardTitle>
</CardHeader>
<CardContent className="space-y-4">
  {tweets.map((tweet) => (
    <div key={tweet.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <p className="text-gray-800 dark:text-gray-200">{tweet.content}</p>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">{tweet.author}</span> • {tweet.timestamp}
      </div>
    </div>
  ))}
</CardContent>
</Card>
)
}

function YouTubeFeed() {
const videos = [
{ id: 1, title: "Introduction to EduClipsAI", thumbnail: "/placeholder.svg?height=200&width=400", views: "10K", date: "2 weeks ago" },
{ id: 2, title: "How to Use AI for Efficient Learning", thumbnail: "/placeholder.svg?height=200&width=400", views: "8.5K", date: "1 month ago" },
{ id: 3, title: "The Future of Education Technology", thumbnail: "/placeholder.svg?height=200&width=400", views: "15K", date: "3 weeks ago" },
{ id: 4, title: "EduClipsAI Tutorial: Advanced Features", thumbnail: "/placeholder.svg?height=200&width=400", views: "7K", date: "5 days ago" },
]

return (
<Card className="bg-white dark:bg-gray-800 shadow-lg">
<CardHeader>
  <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center">
    <Play className="w-6 h-6 mr-2" />
    Latest Videos
  </CardTitle>
</CardHeader>
<CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {videos.map((video) => (
    <div key={video.id} className="flex flex-col items-start space-y-2">
      <Image src={video.thumbnail} alt={video.title} width={400} height={200} className="rounded-md object-cover w-full" />
      <div>
        <h4 className="font-semibol d text-gray-800 dark:text-gray-200">{video.title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{video.views} views • {video.date}</p>
      </div>
    </div>
  ))}
</CardContent>
</Card>
)
}

interface Plan {
  price: number;
}

function CheckoutPage({ plan, isYearly, onClose }: { plan: Plan; isYearly: boolean; onClose: () => void }) {
const [formData, setFormData] = useState({
name: '',
email: '',
emailVerification: '',
cardNumber: '',
expiry: '',
cvc: '',
coupon: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault()
console.log('Checkout submitted:', formData)
onClose()
}

const price = isYearly ? Math.ceil(plan.price * 12 * 0.8) : plan.price

return (
<form onSubmit={handleSubmit} className="space-y-4">
<div>
  <Label htmlFor="name">Name</Label>
  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
</div>
<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
</div>
<div>
  <Label htmlFor="emailVerification">Verify Email</Label>
  <Input id="emailVerification" name="emailVerification" type="email" value={formData.emailVerification} onChange={handleChange} required />
</div>
<div>
  <Label htmlFor="cardNumber">Card Number</Label>
  <Input id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
</div>
<div className="flex space-x-4">
  <div className="flex-1">
    <Label htmlFor="expiry">Expiry Date</Label>
    <Input id="expiry" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required />
  </div>
  <div className="flex-1">
    <Label htmlFor="cvc">CVC</Label>
    <Input id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} required />
  </div>
</div>
<div>
  <Label htmlFor="coupon">Coupon Code</Label>
  <Input id="coupon" name="coupon" value={formData.coupon} onChange={handleChange} />
</div>
<div className="text-xl font-bold text-center">
  Total: ${price.toFixed(2)}/{isYearly ? 'year' : 'month'}
</div>
<Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
  Complete Purchase
</Button>
</form>
)
}

function TrustedBySection() {
const companies = [
{ name: "TechCorp", logo: "/placeholder.svg?height=120&width=240" },
{ name: "InnovateTech", logo: "/placeholder.svg?height=120&width=240" },
{ name: "FutureLearning", logo: "/placeholder.svg?height=120&width=240" },
{ name: "EduTech Solutions", logo: "/placeholder.svg?height=120&width=240" },
{ name: "AI Educators", logo: "/placeholder.svg?height=120&width=240" },
{ name: "SmartStudy", logo: "/placeholder.svg?height=120&width=240" },
{ name: "BrainBoost", logo: "/placeholder.svg?height=120&width=240" },
{ name: "LearnWave", logo: "/placeholder.svg?height=120&width=240" },
]

return (
<section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
<div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
    Trusted by Leading Organizations
  </h2>
  <p className="text-center text-xl mb-12 text-gray-700 dark:text-gray-300">
    Join the ranks of innovative companies and institutions that have embraced EduClipsAI to revolutionize their learning and development processes.
  </p>
  <div className="flex overflow-hidden space-x-16 group">
    <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
      {companies.map((company) => (
        <Image key={company.name} src={company.logo} alt={company.name} width={240} height={120} className="max-w-none" />
      ))}
    </div>
    <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
      {companies.map((company) => (
        <Image key={company.name} src={company.logo} alt={company.name} width={240} height={120} className="max-w-none" />
      ))}
    </div>
  </div>
</div>
</section>
)
}

export default function Component() {
const [isDarkMode, setIsDarkMode] = useState(false)
const [isYearlyPricing, setIsYearlyPricing] = useState(false)
const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
const [isScrolled, setIsScrolled] = useState(false)
const [isChatOpen, setIsChatOpen] = useState(false)
const [isTrialFormOpen, setIsTrialFormOpen] = useState(false)
const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
const [userCount, setUserCount] = useState(1217)
const heroRef = useRef<HTMLElement>(null)
const featuresRef = useRef<HTMLElement>(null)
const benefitsRef = useRef<HTMLElement>(null)
const transformingLearningRef = useRef<HTMLElement>(null)
const ethicalAIRef = useRef<HTMLElement>(null)
const pricingRef = useRef<HTMLElement>(null)
const freeTrialRef = useRef<HTMLElement>(null)
const testimonialsRef = useRef<HTMLElement>(null)
const faqRef = useRef<HTMLElement>(null)

useEffect(() => {
const savedDarkMode = localStorage.getItem('darkMode')
if (savedDarkMode !== null) {
setIsDarkMode(savedDarkMode === 'true')
}
}, [])

useEffect(() => {
const root = window.document.documentElement
root.classList.toggle('dark', isDarkMode)
localStorage.setItem('darkMode', isDarkMode.toString())
}, [isDarkMode])

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 50)
}
window.addEventListener('scroll', handleScroll)
return () => window.removeEventListener('scroll', handleScroll)
}, [])

useEffect(() => {
const interval = setInterval(() => {
setUserCount(prevCount => prevCount + Math.floor(Math.random() * 3) + 1)
}, 30000)
return () => clearInterval(interval)
}, [])

const toggleDarkMode = () => setIsDarkMode(prev => !prev)

const scrollTo = (ref: React.RefObject<HTMLElement>) => {
if (ref.current) {
const yOffset = -80
const element = ref.current
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
window.scrollTo({ top: y, behavior: 'smooth' })
}
}

const openCheckout = (plan: Plan) => {
setSelectedPlan(plan)
setIsCheckoutOpen(true)
}

const { scrollYProgress } = useScroll()

return (
<div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
<div className="fixed inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-950" />
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 dark:from-purple-900/20 dark:to-indigo-900/20"
    style={{
      scaleX: scrollYProgress,
      transformOrigin: "left"
    }}
  />
</div>

<header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 text-center font-medium">
    <span className="animate-pulse mr-2">🎉</span>
    Limited Time Offer: Get $15 off on all yearly plans! Use code <span className="font-bold">EDUCLIPS15</span> at checkout. Plus, yearly subscriptions get 20% off!
  </div>
  
  <CountdownTimer />

  <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.webp?height=40&width=40" alt="EduClipsAI Logo" width={40} height={40} className="rounded-lg" />
      <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">EduClipsAI</span>
    </Link>
    <div className="hidden md:flex space-x-6">
      <button onClick={()=>scrollTo(heroRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Home</button>
      <button onClick={()=>scrollTo(featuresRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Features</button>
      <button onClick={()=>scrollTo(benefitsRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Benefits</button>
      <button onClick={()=>scrollTo(transformingLearningRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">AI Learning</button>
      <button onClick={()=>scrollTo(ethicalAIRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Ethical AI</button>
      <button onClick={()=>scrollTo(pricingRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Pricing</button>
      <button onClick={()=>scrollTo(faqRef)} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">FAQ</button>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200" aria-label="Toggle dark mode">
        {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </Button>
      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300" onClick={() => window.location.href = '/login'}>
        Login
      </Button>
      <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all duration-300 transform hover:scale-105" onClick={() => setIsTrialFormOpen(true)}>
        Start Free Trial
      </Button>
    </div>
  </nav>
</header>

<main className="flex-grow relative z-10">
  {/* ... (rest of the main content remains unchanged) ... */}
  <motion.section
    ref={heroRef}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative py-20 overflow-hidden bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900"
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="lg:w-1/2 mb-12 lg:mb-0 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Revolutionize Your YouTube Learning Journey with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            Transform unstructured YouTube content into organized, efficient, and personalized learning experiences. EduClipsAI harnesses the power of artificial intelligence to make your educational journey more effective and engaging than ever before.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all duration-300 transform hover:scale-105" onClick={() => setIsTrialFormOpen(true)}>
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300" onClick={() => setIsVideoModalOpen(true)}>
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400"
          >
            <span className="flex items-center">
              <CheckCircle className="text-green-500 mr-1 h-5 w-5" />
              No credit card required
            </span>
            <span className="flex items-center">
              <CheckCircle className="text-green-500 mr-1 h-5 w-5" />
              7-day free trial
            </span>
            <span className="flex items-center">
              <CheckCircle className="text-green-500 mr-1 h-5 w-5" />
              Cancel anytime
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:w-1/2 relative"
        >
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="EduClipsAI Dashboard"
            width={800}
            height={600}
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4">
            <Users className="text-purple-600 h-8 w-8" />
            <div>
              <p className="font-bold text-2xl text-purple-600">{userCount.toLocaleString()}+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>

  <section className="py-12 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Featured In
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Image src="/placeholder.svg?height=60&width=120" alt="TechCrunch" width={120} height={60} />
        <Image src="/placeholder.svg?height=60&width=120" alt="Forbes" width={120} height={60} />
        <Image src="/placeholder.svg?height=60&width=120" alt="Wired" width={120} height={60} />
        <Image src="/placeholder.svg?height=60&width=120" alt="The Verge" width={120} height={60} />
        <Image src="/placeholder.svg?height=60&width=120" alt="MIT Technology Review" width={120} height={60} />
      </div>
    </div>
  </section>

  <section ref={featuresRef} className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Powerful Features for Enhanced Learning
      </h2>
      <p className="text-center text-xl mb-12 text-gray-700 dark:text-gray-300">
        EduClipsAI offers a suite of innovative features designed to transform your learning experience. Our cutting-edge AI technology works tirelessly to provide you with the most efficient and effective educational tools available.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <Zap className="h-12 w-12 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4 text-center">AI-Powered Summaries</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-center">Condense long educational videos into key insights, saving you hours of study time. Our advanced AI algorithms extract the most crucial information, allowing you to grasp complex concepts quickly and efficiently.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <ArrowRight className="h-12 w-12 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4 text-center">Interactive Timelines</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-center">Navigate video content efficiently with visual tools that highlight key moments. Our interactive timelines allow you to jump to specific topics, making revision and review a breeze. Never lose track of important information again.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <Users className="h-12 w-12 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4 text-center">Personalized Learning Paths</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-center">Experience tailored learning journeys based on your unique goals and learning style. Our AI adapts to your progress, recommending the most relevant content and resources to optimize your educational experience.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <MessageCircle className="h-12 w-12 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4 text-center">Collaboration Tools</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-center">Share insights and annotations with peers, fostering a collaborative learning environment. Our platform enables seamless knowledge sharing, allowing you to benefit from collective wisdom and diverse perspectives.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <BarChart className="h-12 w-12 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4 text-center">Progress Tracking</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-center">Gain insights into your learning progression with detailed analytics and reports. Visualize your growth, identify areas for improvement, and celebrate your achievements as you advance through your educational journey.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="h-full bg-white dark:bg-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col items-center mb-4">
                <Video className="h-12 w-12 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4 text-center">Video Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 text-center">Track videos watched both in-app and on YouTube, ensuring no content is overlooked. Our comprehensive video management system helps you organize your learning materials and keeps you on top of your educational content consumption.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>

  <section ref={benefitsRef} className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Benefits of EduClipsAI
      </h2>
      <p className="text-center text-xl mb-12 text-gray-700 dark:text-gray-300">
        Discover how EduClipsAI can revolutionize your learning experience and boost your productivity. Our AI-powered platform is designed to help you achieve your educational goals faster and more efficiently than ever before.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gri d-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Clock className="h-6 w-6 mr-2" />
                Time Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Save hours of study time with AI-powered video summaries and key point extraction. Our technology distills lengthy content into concise, actionable insights, allowing you to learn more in less time.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Target className="h-6 w-6 mr-2" />
                Personalized Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Experience tailored learning paths and recommendations based on your unique goals and preferences. Our AI adapts to your learning style, ensuring that you receive the most relevant and effective educational content.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <BookOpen className="h-6 w-6 mr-2" />
                Enhanced Comprehension
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Improve understanding with interactive timelines, quizzes, and visual learning aids. Our platform breaks down complex topics into easily digestible segments, enhancing your ability to grasp and retain information.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Users className="h-6 w-6 mr-2" />
                Collaborative Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Share insights, annotations, and study materials with peers to enhance group learning. Our collaborative tools foster a community of learners, allowing you to benefit from diverse perspectives and collective knowledge.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <BarChart className="h-6 w-6 mr-2" />
                Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Monitor your learning journey with detailed analytics and performance insights. Our progress tracking tools help you identify strengths and areas for improvement, allowing you to optimize your study strategies and achieve your goals faster.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Lightbulb className="h-6 w-6 mr-2" />
                Continuous Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Benefit from AI-driven suggestions for areas of improvement and recommended resources for further study. Our platform continuously adapts to your progress, ensuring that you&apos;re always challenged and growing in your educational journey.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>

  <section ref={transformingLearningRef} className="py-20 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Transforming Learning with AI
      </h2>
      <p className="text-center text-xl mb-12 text-gray-700 dark:text-gray-300">
        Discover how EduClipsAI leverages cutting-edge artificial intelligence to revolutionize your educational experience. Our advanced AI technologies work seamlessly together to provide you with an unparalleled learning journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Natural Language Processing</h3>
            <p className="text-gray-700 dark:text-gray-300">Our advanced NLP algorithms analyze video content to extract key concepts, generate summaries, and create interactive transcripts. This technology allows you to quickly grasp the essence of complex topics and navigate through educational content with ease.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Machine Learning</h3>
            <p className="text-gray-700 dark:text-gray-300">Personalized learning paths are created using ML algorithms that adapt to your learning style, pace, and preferences. As you interact with the platform, our AI continuously refines its understanding of your needs, providing increasingly tailored recommendations and insights.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Tracking & Management</h3>
            <p className="text-gray-700 dark:text-gray-300">Our AI-assisted system tracks and logs all videos viewed both within EduClipsAI and directly on YouTube. This intelligent tracking ensures continuity in your learning journey, allowing you to seamlessly pick up where you left off or revisit previously watched content, regardless of the device you&apos;re using. By leveraging AI to analyze your viewing patterns, we guarantee that no time or learning effort is wasted, optimizing your educational experience across platforms.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Computer Vision <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Coming Soon)</span></h3>
            <p className="text-gray-700 dark:text-gray-300">Visual elements in videos are analyzed to provide context-aware learning experiences and enhance comprehension. Our computer vision technology identifies key visual information, creating a more immersive and effective learning environment.</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="AI-Powered Learning"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>

  <TrustedBySection />

  <section ref={ethicalAIRef} className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Ethical AI for Education
      </h2>
      <p className="text-center text-xl mb-12 text-gray-700 dark:text-gray-300">
        At EduClipsAI, we are committed to developing and using AI responsibly to ensure the best outcomes for our users and society. Our ethical approach to AI is fundamental to our mission of empowering learners worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Shield className="h-6 w-6 mr-2" />
                Privacy Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">We prioritize user privacy and data protection, ensuring that personal information is secure and used responsibly. Our robust security measures and transparent data policies safeguard your learning journey.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Users className="h-6 w-6 mr-2" />
                Inclusive Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Our AI systems are designed to be inclusive and accessible to users from diverse backgrounds and abilities. We strive to create a learning platform that caters to all, regardless of individual differences.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Eye className="h-6 w-6 mr-2" />
                Transparency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">We maintain transparency about our AI capabilities and limitations, providing clear information to our users. Our commitment to openness ensures that you understand how our technology works and how it benefits your learning.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibol d text-purple-600 dark:text-purple-400">
                <Brain className="h-6 w-6 mr-2" />
                Continuous Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">We are committed to ongoing research and development to enhance our AI systems&apos; fairness, accuracy, and reliability. Our dedication to improvement ensures that you always have access to the most advanced and ethical AI-powered learning tools.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Sparkles className="h-6 w-6 mr-2" />
                Human-Centered Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Our AI is designed to augment human intelligence, not replace it, fostering a collaborative learning environment. We believe in the power of technology to enhance human potential, not substitute it.</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-purple-600 dark:text-purple-400">
                <Database className="h-6 w-6 mr-2" />
                Data Governance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">We adhere to strict data governance policies to ensure responsible collection, use, and storage of user data. Our comprehensive data management practices protect your information while enabling personalized learning experiences.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>

  <section ref={pricingRef} className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Choose Your Plan
      </h2>
      <p className="text-center text-xl mb-12 text-gray-700 dark:text-gray-300">
        Select the perfect plan to unlock the full potential of EduClipsAI. Whether you&apos;re a casual learner or a dedicated student, we have a plan that fits your needs.
      </p>
      <div className="flex justify-center items-center mb-8">
        <span className="mr-3 text-lg font-medium text-gray-700 dark:text-gray-300">Monthly</span>
        <Switch
          checked={isYearlyPricing}
          onCheckedChange={setIsYearlyPricing}
          className="bg-purple-600"
        />
        <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-300">Yearly (20% off)</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Standard", price: 7.99, icon: FileText, features: ["AI-powered summaries", "Interactive timelines", "Basic progress tracking", "Limited video uploads", "Email support"] },
          { title: "Pro", price: 11.99, icon: PieChart, features: ["All Standard features", "Unlimited video uploads", "Personalized learning paths", "Advanced analytics", "Collaboration tools", "Priority support"] },
          { title: "Team", price: 24.99, icon: Briefcase, features: ["All Pro features for 5 users", "Custom integrations", "Dedicated account manager", "Team management", "API access", "24/7 premium support"] }
        ].map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`h-full flex flex-col justify-between bg-white dark:bg-gray-800 border-2 ${index === 1 ? 'border-purple-600 relative' : 'border-gray-200'} shadow-xl hover:shadow-2xl transition-all duration-300`}>
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2">
                  {plan.icon && <plan.icon className="w-8 h-8 mr-2" />}
                  {plan.title}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">${isYearlyPricing ? Math.ceil(plan.price * 12 * 0.8) : plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/{isYearlyPricing ? 'year' : 'month'}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardContent className="mt-auto">
                <Button
                  className={`w-full ${index === 1 ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-white text-purple-600 border-2 border-purple-600'} hover:opacity-90 transition-all duration-300`}
                  onClick={() => openCheckout(plan)}
                >
                  {index === 1 ? 'Get Started' : 'Choose Plan'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <section ref={freeTrialRef} className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Start Your Free Trial Today
        </h2>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Experience the power of EduClipsAI risk-free for 7 days. Unlock your learning potential and see how our AI-powered platform can transform your educational journey. No credit card required.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all duration-300 transform hover:scale-105"
          onClick={() => setIsTrialFormOpen(true)}
        >
          Start Your Free Trial
        </Button>
      </div>
    </div>
  </section>

  <section ref={testimonialsRef} className="py-20 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        What Our Users Say
      </h2>
      <TestimonialCarousel />
    </div>
  </section>

  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      <TwitterFeed />
      <YouTubeFeed />
    </div>
  </section>

  <section ref={faqRef} className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does EduClipsAI work?</AccordionTrigger>
            <AccordionContent>
              EduClipsAI uses advanced AI algorithms to analyze educational videos, extract key information, and create personalized learning experiences. It summarizes content, generates interactive timelines, and provides customized study materials based on your learning style and goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is my data safe with EduClipsAI?</AccordionTrigger>
            <AccordionContent>
              Yes, we take data privacy and security very seriously. All user data is encrypted and stored securely. We adhere to strict data protection regulations and never share your personal information with third parties without your explicit consent.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I use EduClipsAI with any YouTube video?</AccordionTrigger>
            <AccordionContent>
              EduClipsAI is designed to work with educational content on YouTube. While it can process most YouTube videos, it performs best with structured educational content, lectures, and tutorials. Some content may be restricted due to copyright or other limitations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What if I&apos;m not satisfied with the service?</AccordionTrigger>
            <AccordionContent>
              We offer a 7-day free trial for new users. If you&apos;re not satisfied with our service, you can cancel your subscription at any time during the trial period without any charges. For paid subscriptions, we offer a 30-day money-back guarantee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I use EduClipsAI for multiple subjects or courses?</AccordionTrigger>
            <AccordionContent>
              Yes, EduClipsAI is designed to be versatile and can be used for a wide range of subjects and courses. Whether you&apos;re studying science, history, languages, or any other topic, our AI can adapt to provide relevant summaries and learning materials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How often is the content updated?</AccordionTrigger>
            <AccordionContent>
              We continuously update our AI models and content database to ensure you have access to the most recent and relevant information. Our system processes new educational videos daily, keeping our knowledge base current and comprehensive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Can I collaborate with other users on EduClipsAI?</AccordionTrigger>
            <AccordionContent>
              Yes, our Pro and Team plans include collaboration features that allow you to share notes, summaries, and learning paths with other users. This makes EduClipsAI an excellent tool for study groups, classrooms, and team learning environments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
            <AccordionContent>
              Currently, EduClipsAI is available as a web application optimized for both desktop and mobile browsers. We are actively developing native mobile apps for iOS and Android, which will be released in the near future to enhance the mobile learning experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</main>

<footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 transition-all duration-300 relative z-10">
  {/* ... (footer content remains unchanged) ... */}
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <Link href="/" className="flex items-center space-x-2 mb-4">
          <Image src="/logo.webp" alt="EduClipsAI Logo" width={40} height={40} />
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">EduClipsAI</span>
        </Link>
        <p className="text-sm">Revolutionizing education through AI-powered video learning.</p>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-4">Product</h3>
        <ul className="space-y-2">
          <li><button onClick={() => scrollTo(featuresRef)} className="hover:text-purple-600 transition-colors duration-300">Features</button></li>
          <li><button onClick={() => scrollTo(pricingRef)} className="hover:text-purple-600 transition-colors duration-300">Pricing</button></li>
          <li><button onClick={() => scrollTo(benefitsRef)} className="hover:text-purple-600 transition-colors duration-300">Benefits</button></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Integrations</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-4">Company</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">About Us</Link></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Careers</Link></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Blog</Link></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-4">Connect</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Twitter</Link></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">LinkedIn</Link></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Facebook</Link></li>
          <li><Link href="#" className="hover:text-purple-600 transition-colors duration-300">Instagram</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; 2023 EduClipsAI. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-300">Privacy Policy</Link>
        <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-300">Terms of Service</Link>
        <Link href="#" className="text-sm hover:text-purple-600 transition-colors duration-300">Cookie Policy</Link>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p className="text-sm">Made in London with love ❤️ by MRRM Labs and Richey Malhotra</p>
    </div>
    <div className="mt-4 text-center">
      <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors duration-300 font-semibold">
        Install Chrome Plugin
      </Link>
    </div>
    
  </div>

</footer>

<motion.button
  className={`fixed bottom-4 right-4 rounded-full p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all duration-300 z-50`}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  aria-label="Scroll to top"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <ChevronUp className="h-5 w-5" />
</motion.button>

<motion.button
  className="fixed bottom-4 left-4 rounded-full p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all duration-300 z-50"
  onClick={() => setIsChatOpen(!isChatOpen)}
  aria-label="Open chat"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <MessageCircle className="h-5 w-5" />
</motion.button>

<Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
  <DialogContent className="sm:max-w-[800px]">
    <DialogHeader>
      <DialogTitle>EduClipsAI Demo</DialogTitle>
      <DialogDescription>
        Watch our demo video to see EduClipsAI in action.
      </DialogDescription>
    </DialogHeader>
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="EduClipsAI Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </DialogContent>
</Dialog>

<Dialog open={isTrialFormOpen} onOpenChange={setIsTrialFormOpen}>
  <DialogContent className="sm:max-w-[500px]">
    <DialogHeader>
      <DialogTitle>Start Your Free Trial</DialogTitle>
      <DialogDescription>
        Enter your details to begin your 7-day free trial. No credit card required.
      </DialogDescription>
    </DialogHeader>
    <FreeTrialForm onClose={() => setIsTrialFormOpen(false)} />
  </DialogContent>
</Dialog>

<Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Complete Your Purchase</DialogTitle>
      <DialogDescription>
        Enter your payment details to start your subscription.
      </DialogDescription>
    </DialogHeader>
    {selectedPlan && (
      <CheckoutPage
        plan={selectedPlan}
        isYearly={isYearlyPricing}
        onClose={() => setIsCheckoutOpen(false)}
      />
    )}
  </DialogContent>
</Dialog>

<ExitIntentPopup />
</div>
)
}