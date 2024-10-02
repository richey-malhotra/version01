// import React, { useState, useEffect, useRef } from 'react'
// import { Button, Input, Avatar, Badge, Progress, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/button"

// import { Input } from "@/components/ui/input"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Slider } from "@/components/ui/slider"
// import { Separator } from "@/components/ui/separator"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Search, Bell, User, Moon, Sun, PlayCircle, Bookmark, Clock, Share2, Archive, Trash2, Play, Pause, SkipForward, Volume2, Maximize, ChevronRight, Plus, Settings, ThumbsUp, Eye, Mic, MessageSquare, Check, X, Edit, List, Facebook, Twitter, Linkedin, FastForward, Subtitles, Menu, Home, Compass, Library, Users, MoreVertical, BarChart2, FilePlus, Star, Folder, Calendar as CalendarIcon, ArrowRight, ArrowLeft, ExternalLink, Repeat, Hash, Link, Brain, ChevronDown, Filter, ChevronUp, LayoutDashboard } from 'lucide-react'

// export default function Component() {
// const [darkMode, setDarkMode] = useState(false)
// const [isPlaying, setIsPlaying] = useState(false)
// const [isTalking, setIsTalking] = useState(false)
// const [playbackSpeed, setPlaybackSpeed] = useState(1)
// const [showCaptions, setShowCaptions] = useState(false)
// const [activeTab, setActiveTab] = useState('ai-insights')
// const [showUnfiledModal, setShowUnfiledModal] = useState(false)
// const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard')
// const [showFullDescription, setShowFullDescription] = useState(false)
// const [showDashboardModal, setShowDashboardModal] = useState(false)
// const [showAnalyticsModal, setShowAnalyticsModal] = useState(false)
// const [showToAddModal, setShowToAddModal] = useState(false)
// const [showDeletedModal, setShowDeletedModal] = useState(false)
// const [showArchivedModal, setShowArchivedModal] = useState(false)
// const [showScheduledModal, setShowScheduledModal] = useState(false)
// const [showSocialTickerModal, setShowSocialTickerModal] = useState(false)
// const [hasNewSocialUpdate, setHasNewSocialUpdate] = useState(true)
// const [showFilterModal, setShowFilterModal] = useState(false)
// const [showAddBookmarkModal, setShowAddBookmarkModal] = useState(false)
// const [showScrollUp, setShowScrollUp] = useState(false)
// const [showScrollDown, setShowScrollDown] = useState(true)
// const [filtersApplied, setFiltersApplied] = useState(false)
// const [activeFilters, setActiveFilters] = useState([])
// const [searchQuery, setSearchQuery] = useState('')
// const [searchHistory, setSearchHistory] = useState(['React hooks', 'NextJS tutorial', 'TypeScript basics'])
// const [searchSuggestions, setSearchSuggestions] = useState([])
// const [bookmarks, setBookmarks] = useState([])
// const [showVideoOverlay, setShowVideoOverlay] = useState(true)

// const contentRef = useRef(null)
// const sidebarRef = useRef(null)
// const videoOverlayRef = useRef(null)

// useEffect(() => {
//   setShowToAddModal(true)
// }, [])

// useEffect(() => {
//   const handleScroll = () => {
//     if (contentRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = contentRef.current
//       setShowScrollUp(scrollTop > 145)
//       setShowScrollDown(scrollTop + clientHeight < scrollHeight - 7)
//     }
//   }

//   contentRef.current?.addEventListener('scroll', handleScroll)
//   return () => contentRef.current?.removeEventListener('scroll', handleScroll)
// }, [])

// const toggleDarkMode = () => {
//   setDarkMode(!darkMode)
//   document.documentElement.classList.toggle('dark')
// }

// const playSound = () => {
//   const audio = new Audio('/click.mp3')
//   audio.play().catch(error => console.error('Error playing sound:', error))
// }

// const scrollToContent = (id) => {
//   const element = document.getElementById(id)
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' })
//   }
// }

// const handleSearch = (query) => {
//   setSearchQuery(query)
//   const suggestions = ['React hooks tutorial', 'React state management', 'React performance optimization']
//   setSearchSuggestions(suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase())))
// }

// const handleSearchSubmit = (e) => {
//   e.preventDefault()
//   if (searchQuery && !searchHistory.includes(searchQuery)) {
//     setSearchHistory([searchQuery, ...searchHistory.slice(0, 4)])
//   }
// }

// const addBookmark = (bookmark) => {
//   setBookmarks([...bookmarks, bookmark])
// }

// // Mock data for the video
// const videoData = {
//   title: "How to Master React Hooks",
//   description: "Learn the ins and outs of React Hooks in this comprehensive tutorial. We'll cover useState, useEffect, and how to create custom hooks. Perfect for developers looking to level up their React skills. This tutorial is designed for intermediate to advanced React developers who want to deepen their understanding of hooks and functional components. We'll start with the basics of useState and useEffect, then move on to more advanced topics like useContext, useReducer, and custom hooks. By the end of this video, you'll have a solid grasp of how to use hooks effectively in your React applications, improving your code's readability and reusability. We'll also cover common pitfalls and best practices to ensure you're using hooks in the most efficient way possible. Don't forget to check out the additional resources linked in the description for further learning and practice exercises. Happy coding!",
//   tags: ["React", "Hooks", "JavaScript", "Frontend", "Web Development"],
//   channel: "React Mastery",
//   channelImage: "/placeholder.svg?height=40&width=40",
//   channelBanner: "/placeholder.svg?height=200&width=1000",
//   videoThumbnail: "/placeholder.svg?height=400&width=600",
//   views: "1.2M",
//   likes: "45K",
//   dislikes: "1K",
//   uploadDate: "2023-05-15",
//   duration: "15:30",
//   subscribers: "500K",
//   quality: ["4K", "1080p", "720p", "480p", "360p"],
//   language: "English",
//   subtitles: ["English", "Spanish", "French", "German"],
//   hashtags: ["#ReactJS", "#WebDev", "#CodingTutorial"],
//   links: [
//     { text: "React Documentation", url: "https://reactjs.org/docs" },
//     { text: "My GitHub", url: "https://github.com/reactmastery" },
//     { text: "React Hooks Cheatsheet", url: "https://react-hooks-cheatsheet.com" },
//     { text: "Advanced React Patterns", url: "https://advanced-react-patterns.com" }
//   ],
//   keyMoments: [
//     { time: "0:45", label: "Introduction to useState", type: "chapter" },
//     { time: "2:30", label: "useEffect and side effects", type: "chapter" },
//     { time: "5:15", label: "Creating custom hooks", type: "chapter" },
//     { time: "8:00", label: "Best practices", type: "chapter" },
//     { time: "12:30", label: "Common pitfalls", type: "chapter" },
//     { time: "3:20", label: "Important concept", type: "bookmark" },
//     { time: "7:45", label: "Key takeaway", type: "bookmark" },
//     { time: "1:15", label: "Viewer question", type: "comment" },
//     { time: "10:30", label: "Interesting discussion", type: "comment" }
//   ]
// }

// const sidebarItems = [
//   { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', modal: true, description: 'View your learning progress and stats' },
//   { icon: BarChart2, label: 'Analytics', id: 'analytics', modal: true, description: 'Analyze your viewing habits and trends' },
//   { type: 'separator' },
//   { icon: FilePlus, label: 'To Add', id: 'to-add', modal: true, description: 'Videos you want to watch later' },
//   { icon: Compass, label: 'Recommended', id: 'recommended', description: 'Personalized video recommendations' },
//   { type: 'separator' },
//   { icon: Repeat, label: 'Continue Watching', id: 'continue-watching', description: 'Resume your partially watched videos' },
//   { type: 'separator' },
//   { icon: Users, label: 'Channels', id: 'channels', description: 'Manage your subscribed channels' },
//   { icon: List, label: 'Playlists', id: 'playlists', description: 'Organize and access your playlists' },
//   { icon: Folder, label: 'Collections', id: 'collections', description: 'Curated sets of related videos' },
//   { icon: Share2, label: 'Learning Path', id: 'learning-path', description: 'Follow structured learning paths' },
//   { icon: CalendarIcon, label: 'Scheduled', id: 'scheduled', modal: true, description: 'View and manage scheduled videos' },
//   { type: 'separator' },
//   { icon: Star, label: 'Favourites', id: 'favourites', description: 'Quick access to your favorite videos' },
//   { icon: Bookmark, label: 'All Bookmarks', id: 'all-bookmarks', description: 'Browse all your bookmarked videos' },
//   { type: 'separator' },
//   { icon: Archive, label: 'Archived', id: 'archived', modal: true, description: 'Access your archived videos' },
//   { icon: Trash2, label: 'Deleted', id: 'deleted', modal: true, description: 'Manage your deleted videos' },
//   { type: 'separator' },
//   { icon: Plus, label: 'Add Bookmark', id: 'add-bookmark', special: true, description: 'Bookmark the current video' },
//   { type: 'separator' },
//   { icon: MessageSquare, label: 'Social Ticker', id: 'social-ticker', special: true, modal: true, description: 'View social updates and interactions' }
// ]

// const renderModalContent = (id) => {
//   switch (id) {
//     case 'dashboard':
//       return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Watch Time</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold">12h 30m</p>
//               <p className="text-sm text-muted-foreground">This week</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Videos Watched</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold">27</p>
//               <p className="text-sm text-muted-foreground">This week</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Learning Streak</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold">5 days</p>
//               <p className="text-sm text-muted-foreground">Keep it up!</p>
//             </CardContent>
//           </Card>
//         </div>
//       )
//     case 'analytics':
//       return (
//         <Card>
//           <CardHeader>
//             <CardTitle>Watch Time by Category</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
//               <p className="text-muted-foreground">Placeholder for chart</p>
//             </div>
//           </CardContent>
//         </Card>
//       )
//     case 'to-add':
//       return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6].map((i) => (
//             <Card key={i}>
//               <CardContent className="p-4">
//                 <img
//                   src={`/placeholder.svg?height=100&width=200`}
//                   alt={`Thumbnail ${i}`}
//                   className="w-full h-32 object-cover rounded-md mb-2"
//                 />
//                 <h3 className="font-semibold mb-1 truncate">Video to Add {i}</h3>
//                 <p className="text-sm text-muted-foreground mb-2">Added 2 days ago</p>
//                 <Button size="sm" className="w-full" onClick={() => {
//                   playSound()
//                   setShowToAddModal(false)
//                   setActiveSidebarItem('continue-watching')
//                 }}>
//                   Add to Library
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )
//     case 'archived':
//       return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6].map((i) => (
//             <Card key={i}>
//               <CardContent className="p-4">
//                 <img
//                   src={`/placeholder.svg?height=100&width=200`}
//                   alt={`Thumbnail ${i}`}
//                   className="w-full h-32 object-cover rounded-md mb-2"
//                 />
//                 <h3 className="font-semibold mb-1 truncate">Archived Video {i}</h3>
//                 <p className="text-sm text-muted-foreground mb-2">Archived on 2023-06-{i}</p>
//                 <div className="flex space-x-2">
//                   <Button size="sm" variant="outline" className="flex-1" onClick={playSound}>
//                     <ArrowLeft className="h-4 w-4 mr-1" />
//                     Unarchive
//                   </Button>
//                   <Button size="sm" variant="outline" className="flex-1" onClick={playSound}>
//                     <Trash2 className="h-4 w-4 mr-1" />
//                     Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )
//     case 'deleted':
//       return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6].map((i) => (
//             <Card key={i}>
//               <CardContent className="p-4">
//                 <img
//                   src={`/placeholder.svg?height=100&width=200`}
//                   alt={`Thumbnail ${i}`}
//                   className="w-full h-32 object-cover rounded-md mb-2"
//                 />
//                 <h3 className="font-semibold mb-1 truncate">Deleted Video {i}</h3>
//                 <p className="text-sm text-muted-foreground mb-2">Deleted on 2023-06-{i}</p>
//                 <div className="flex space-x-2">
//                   <Button size="sm" variant="outline" className="flex-1" onClick={playSound}>
//                     <ArrowLeft className="h-4 w-4 mr-1" />
//                     Restore
//                   </Button>
//                   <Button size="sm" variant="destructive" className="flex-1" onClick={playSound}>
//                     <Trash2 className="h-4 w-4 mr-1" />
//                     Permanently Delete
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )
//     case 'scheduled':
//       return (
//         <div>
//           <Calendar
//             mode="multiple"
//             selected={[new Date(2023, 5, 15), new Date(2023, 5, 22)]}
//             className="rounded-md border mb-4"
//           />
//           <div className="space-y-4">
//             <Card>
//               <CardHeader>
//                 <CardTitle>June 15, 2023</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="font-semibold">Scheduled Video: React Hooks Deep Dive</p>
//                 <p className="text-sm text-muted-foreground">Scheduled for 2:00 PM</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>June 22, 2023</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="font-semibold">Scheduled Video: Advanced TypeScript Techniques</p>
//                 <p className="text-sm text-muted-foreground">Scheduled for 3:30 PM</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       )
//     case 'social-ticker':
//       return (
//         <div className="space-y-4">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <Card key={i}>
//               <CardContent className="p-4 flex items-center space-x-4">
//                 <Avatar className="w-10 h-10">
//                   <img src={`/placeholder.svg?height=40&width=40`} alt={`User ${i}`} className="rounded-full" />
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold">User{i}</p>
//                   <p className="text-sm text-muted-foreground">Shared a new video: "React Tips and Tricks"</p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )
//     default:
//       return null
//   }
// }

// const AnimatedLogo = () => {
//   const [drawProgress, setDrawProgress] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDrawProgress((prev) => (prev + 1) % 100)
//     }, 50)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <svg width="40" height="40" viewBox="0 0 40 40" className="animate-pulse">
//       <defs>
//         <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#3b82f6" />
//           <stop offset="100%" stopColor="#60a5fa" />
//         </linearGradient>
//       </defs>
//       <circle cx="20" cy="20" r="18" fill="url(#gradient)" />
//       <path
//         d="M10 20 L20 10 L30 20 L20 30 Z"
//         fill="white"
//         strokeDasharray="100"
//         strokeDashoffset={100 - drawProgress}
//         stroke="white"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// const AbstractBackground = () => (
//   <div className="fixed inset-0 pointer-events-none z-0">
//     <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <filter id="noise" x="0%" y="0%" width="100%" height="100%">
//           <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" stitchTiles="stitch" />
//         </filter>
//       </defs>
//       <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
//       <g filter="url(#noise)" opacity="0.1">
//         <path d="M0 50 Q 200 0, 400 50 T 800 50" stroke="currentColor" fill="none" strokeWidth="4" className="animate-pulse" />
//         <path d="M0 150 Q 200 100, 400 150 T 800 150" stroke="currentColor" fill="none" strokeWidth="4" className="animate-pulse" />
//         <rect x="100" y="200" width="200" height="200" stroke="currentColor" fill="none" strokeWidth="4" className="animate-pulse" />
//         <circle cx="600" cy="300" r="100" stroke="currentColor" fill="none" strokeWidth="4" className="animate-pulse" />
//       </g>
//     </svg>
//   </div>
// )

// return (
//   <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
//     <style jsx global>{`
//       @keyframes pulse {
//         0%, 100% { opacity: 0.5; }
//         50% { opacity: 1; }
//       }
//       .bg-pulse {
//         animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//       }
//     `}</style>
//     <TooltipProvider>
//       <aside className="bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 fixed h-full overflow-y-auto flex flex-col z-10">
//         <div className="p-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <AnimatedLogo />
//             <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">YourTubeBoost</h2>
//           </div>
//         </div>
//         <nav className="space-y-1 p-2 flex-grow flex flex-col justify-between" ref={sidebarRef}>
//           <div>
//             {sidebarItems.map((item, index) => (
//               item.type === 'separator' ? (
//                 <Separator key={index} className="my-2 bg-gray-200 dark:bg-gray-700" />
//               ) : (
//                 <Tooltip key={index}>
//                   <TooltipTrigger asChild>
//                     <Button
//                       variant={item.special ? "outline" : "ghost"}
//                       className={`w-full justify-start ${item.special ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''} ${
//                         (activeSidebarItem === item.id || 
//                          (item.modal && 
//                           ((item.id === 'dashboard' && showDashboardModal) ||
//                            (item.id === 'analytics' && showAnalyticsModal) ||
//                            (item.id === 'to-add' && showToAddModal) ||
//                            (item.id === 'archived' && showArchivedModal) ||
//                            (item.id === 'deleted' && showDeletedModal) ||
//                            (item.id === 'scheduled' && showScheduledModal) ||
//                            (item.id === 'social-ticker' && showSocialTickerModal) ||
//                            (item.id === 'add-bookmark' && showAddBookmarkModal)
//                           )
//                          )
//                         ) ? 'bg-gray-200 dark:bg-gray-700' : ''
//                       }`}
//                       onClick={() => {
//                         playSound()
//                         if (item.modal) {
//                           switch (item.id) {
//                             case 'dashboard':
//                               setShowDashboardModal(true)
//                               break
//                             case 'analytics':
//                               setShowAnalyticsModal(true)
//                               break
//                             case 'to-add':
//                               setShowToAddModal(true)
//                               break
//                             case 'archived':
//                               setShowArchivedModal(true)
//                               break
//                             case 'deleted':
//                               setShowDeletedModal(true)
//                               break
//                             case 'scheduled':
//                               setShowScheduledModal(true)
//                               break
//                             case 'social-ticker':
//                               setShowSocialTickerModal(true)
//                               setHasNewSocialUpdate(false)
//                               break
//                             case 'add-bookmark':
//                               setShowAddBookmarkModal(true)
//                               break
//                             default:
//                               break
//                           }
//                         }
//                         setActiveSidebarItem(item.id)
//                         scrollToContent(item.id)
//                       }}
//                       data-id={item.id}
//                     >
//                       <item.icon className={`h-5 w-5 ${item.special ? 'text-white' : ''}`} />
//                       <span className="ml-2 flex-1 text-left">
//                         {item.label}
//                         {item.id === 'social-ticker' && hasNewSocialUpdate && (
//                           <Badge variant="destructive" className="ml-2">New</Badge>
//                         )}
//                       </span>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent side="right" className="ml-2">
//                     {item.description}
//                   </TooltipContent>
//                 </Tooltip>
//               )
//             ))}
//           </div>
//         </nav>
//       </aside>
//       <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-gray-900 ml-64">
//         <AbstractBackground />
//         <div className="fixed inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-20 pointer-events-none bg-pulse"></div>
//         <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center z-10">
//           <div className="flex items-center w-full max-w-2xl relative">
//             <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <form onSubmit={handleSearchSubmit} className="w-full">
//               <Input
//                 type="search"
//                 placeholder="Search videos..."
//                 className="w-full pl-10"
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//               />
//             </form>
//             {(searchSuggestions.length > 0 || searchHistory.length > 0) && searchQuery && (
//               <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg mt-1 z-10">
//                 {searchSuggestions.length > 0 && (
//                   <div className="p-2">
//                     <h4 className="text-sm font-semibold mb-1">Suggestions</h4>
//                     {searchSuggestions.map((suggestion, index) => (
//                       <div key={index} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded"
//                            onClick={() => setSearchQuery(suggestion)}>
//                         {suggestion}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {searchHistory.length > 0 && (
//                   <div className="p-2 border-t border-gray-200 dark:border-gray-700">
//                     <h4 className="text-sm font-semibold mb-1">Recent Searches</h4>
//                     {searchHistory.map((item, index) => (
//                       <div key={index} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded"
//                            onClick={() => setSearchQuery(item)}>
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               className={`ml-2 ${filtersApplied ? 'text-blue-500' : ''}`} 
//               onClick={() => setShowFilterModal(true)}
//             >
//               <Filter className="h-5 w-5" />
//             </Button>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="icon">
//               <Bell className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
//               {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Avatar className="w-8 h-8">
//                     <User className="h-5 w-5" />
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem>Log out</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </header>
//         <main className="flex-1 overflow-auto relative" ref={contentRef}>
//           <div className="p-6">
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Enhanced Video Player</h2>
//               <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
//                 <img
//                   src={videoData.videoThumbnail}
//                   alt="Video thumbnail"
//                   className="w-full h-full object-cover"
//                 />
//                 {!isPlaying && (
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
//                     <ScrollArea className="flex-grow pr-4" style={{maxHeight: 'calc(100% - 80px)'}}>
//                       <img
//                         src={videoData.channelBanner}
//                         alt="Channel banner"
//                         className="w-full h-24 object-cover rounded-md mb-4"
//                       />
//                       <div className="flex items-center mb-4">
//                         <Avatar className="w-12 h-12 mr-4">
//                           <img src={videoData.channelImage} alt={videoData.channel} className="rounded-full" />
//                         </Avatar>
//                         <div>
//                           <h3 className="text-white text-xl font-bold">{videoData.title}</h3>
//                           <p className="text-white text-sm">{videoData.channel} • {videoData.subscribers} subscribers</p>
//                         </div>
//                       </div>
//                       <p className="text-white text-sm mb-2" style={{minHeight: '4.5em'}}>
//                         {showFullDescription
//                           ? videoData.description
//                           : `${videoData.description.slice(0, 150)}...`}
//                         <Button
//                           variant="link"
//                           className="text-blue-400 hover:text-blue-300"
//                           onClick={() => setShowFullDescription(!showFullDescription)}
//                         >
//                           {showFullDescription ? 'See less' : 'See more'}
//                         </Button>
//                       </p>
//                       {showVideoOverlay && (
//                         <>
//                           <div className="flex items-center space-x-2 mb-2">
//                             {videoData.tags.map((tag) => (
//                               <Badge key={tag} variant="secondary">{tag}</Badge>
//                             ))}
//                           </div>
//                           <div className="flex items-center space-x-4 text-white text-sm mb-2">
//                             <div className="flex items-center">
//                               <Eye className="h-4 w-4 mr-1" />
//                               <span>{videoData.views} views</span>
//                             </div>
//                             <div className="flex items-center">
//                               <ThumbsUp className="h-4 w-4 mr-1" />
//                               <span>{videoData.likes} likes</span>
//                             </div>
//                             <div className="flex items-center">
//                               <Clock className="h-4 w-4 mr-1" />
//                               <span>{videoData.duration}</span>
//                             </div>
//                           </div>
//                           <p className="text-white text-sm">Uploaded on: {videoData.uploadDate}</p>
//                           <div className="mt-2">
//                             <h4 className="text-white font-semibold mb-2">Links:</h4>
//                             <ul className="list-disc pl-4 text-white">
//                               {videoData.links.map((link, index) => (
//                                 <li key={index}>
//                                   <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
//                                     {link.text}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                             <h4 className="text-white font-semibold mt-2 mb-2">Hashtags:</h4>
//                             <div className="flex flex-wrap gap-2">
//                               {videoData.hashtags.map((hashtag, index) => (
//                                 <Badge key={index} variant="secondary">{hashtag}</Badge>
//                               ))}
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </ScrollArea>
//                   </div>
//                 )}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//                   <div className="relative w-full mb-2">
//                     <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
//                     <div className="absolute top-0 left-0 right-0">
//                       {videoData.keyMoments.map((moment, index) => (
//                         <Tooltip key={index}>
//                           <TooltipTrigger asChild>
//                             <div
//                               className={`absolute w-1 h-3 cursor-pointer ${
//                                 moment.type === 'chapter' ? 'bg-blue-500' :
//                                 moment.type === 'bookmark' ? 'bg-yellow-500' :
//                                 'bg-green-500'
//                               }`}
//                               style={{ left: `${(parseInt(moment.time.split(':')[0]) * 60 + parseInt(moment.time.split(':')[1])) / (15 * 60) * 100}%` }}
//                             />
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             <p>{moment.time} - {moment.label} ({moment.type})</p>
//                           </TooltipContent>
//                         </Tooltip>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center mt-2 text-white">
//                     <div className="flex items-center space-x-4">
//                       <Button size="icon" variant="ghost" className="text-white" onClick={() => setIsPlaying(!isPlaying)}>
//                         {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
//                       </Button>
//                       <Button size="icon" variant="ghost" className="text-white">
//                         <ArrowLeft className="h-4 w-4" />
//                       </Button>
//                       <Button size="icon" variant="ghost" className="text-white">
//                         <ArrowRight className="h-4 w-4" />
//                       </Button>
//                       <Button size="icon" variant="ghost" className="text-white">
//                         <Volume2 className="h-4 w-4" />
//                       </Button>
//                       <span className="text-sm">1:23 / {videoData.duration}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Button
//                         size="sm"
//                         variant={isTalking ? "default" : "ghost"}
//                         className="text-white"
//                         onClick={() => setIsTalking(!isTalking)}
//                       >
//                         {isTalking ?
//                           <MessageSquare className="h-4 w-4 mr-2 text-blue-400" /> :
//                           <Mic className="h-4 w-4 mr-2" />
//                         }
//                         {isTalking ? "Chatting" : "Talk to Video"}
//                       </Button>
//                       <select
//                         value={playbackSpeed}
//                         onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
//                         className="bg-transparent text-white text-sm"
//                       >
//                         <option value="0.5">0.5x</option>
//                         <option value="1">1x</option>
//                         <option value="1.5">1.5x</option>
//                         <option value="2">2x</option>
//                       </select>
//                       <Button 
//                         size="sm" 
//                         variant="ghost" 
//                         className={`text-white ${showCaptions ? 'bg-blue-500' : ''}`} 
//                         onClick={() => setShowCaptions(!showCaptions)}
//                       >
//                         <Subtitles className="h-4 w-4" />
//                       </Button>
//                       <Button size="icon" variant="ghost" className="text-white">
//                         <Settings className="h-4 w-4" />
//                       </Button>
//                       <Button size="icon" variant="ghost" className="text-white">
//                         <Maximize className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
//               <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
//                 <TabsTrigger value="ai-insights" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">AI Insights</TabsTrigger>
//                 <TabsTrigger value="transcript" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Transcript</TabsTrigger>
//                 <TabsTrigger value="notes" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Notes</TabsTrigger>
//                 <TabsTrigger value="related" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Related</TabsTrigger>
//               </TabsList>
//               <TabsContent value="ai-insights">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>AI-Generated Insights</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <ScrollArea className="h-[300px] pr-4">
//                       <h4 className="font-semibold mb-2">Summary</h4>
//                       <p className="text-sm text-muted-foreground mb-4">
//                         This video provides a comprehensive tutorial on React Hooks, covering useState, useEffect, and custom hooks. 
//                         It's aimed at developers looking to enhance their React skills with practical examples and best practices.
//                       </p>
//                       <h4 className="font-semibold mb-2">Key Concepts</h4>
//                       <ul className="list-disc pl-5 text-sm text-muted-foreground mb-4">
//                         <li>Introduction to React Hooks</li>
//                         <li>useState for state management</li>
//                         <li>useEffect for side effects</li>
//                         <li>Creating custom hooks</li>
//                         <li>Best practices and common pitfalls</li>
//                       </ul>
//                       <h4 className="font-semibold mb-2">Sentiment Analysis</h4>
//                       <p className="text-sm text-muted-foreground mb-4">
//                         The video has a positive sentiment with a focus on educational content. 
//                         The instructor's tone is enthusiastic and encouraging, promoting active learning.
//                       </p>
//                       <h4 className="font-semibold mb-2">Recommended Next Steps</h4>
//                       <ul className="list-disc pl-5 text-sm text-muted-foreground">
//                         <li>Practice implementing useState and useEffect in a small project</li>
//                         <li>Explore creating a custom hook for a specific use case</li>
//                         <li>Review the React documentation on Hooks for deeper understanding</li>
//                         <li>Join a React community forum to discuss Hooks with other developers</li>
//                       </ul>
//                     </ScrollArea>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="transcript">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>AI-Generated Transcript</CardTitle>
//                     <Input type="search" placeholder="Search transcript..." className="mt-2" />
//                   </CardHeader>
//                   <CardContent>
//                     <ScrollArea className="h-[300px]">
//                       <p className="whitespace-pre-line">
//                         Welcome to this comprehensive tutorial on React Hooks. Today, we'll be covering everything you need to know to master hooks in your React applications. Let's dive in!

//                         [0:45] First, let's talk about useState. This hook is fundamental for managing state in functional components...

//                         [2:30] Next, we'll explore useEffect. This powerful hook allows us to perform side effects in our components...

//                         [5:15] Now that we understand the basic hooks, let's learn how to create our own custom hooks...

//                         [8:00] Let's discuss some best practices when working with hooks...

//                         [12:30] Finally, we'll cover some common pitfalls to avoid when using hooks in your projects...
//                       </p>
//                     </ScrollArea>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="notes">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Notes</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <textarea
//                       className="w-full h-32 p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
//                       placeholder="Add your notes here..."
//                     />
//                     <div className="mt-4">
//                       <h4 className="font-semibold mb-2">Tags</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {videoData.tags.map((tag) => (
//                           <Badge key={tag}>{tag}</Badge>
//                         ))}
//                         <Button size="sm" variant="outline">
//                           <Plus className="h-4 w-4 mr-2" />
//                           Add Tag
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="related">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <img
//                           src={`/placeholder.svg?height=100&width=200`}
//                           alt={`Thumbnail ${i}`}
//                           className="w-full h-32 object-cover rounded-md mb-2"
//                         />
//                         <h3 className="font-semibold mb-1">Related Video {i}</h3>
//                         <p className="text-sm text-muted-foreground mb-2">Channel Name</p>
//                         <Button size="sm" variant="outline" className="w-full">
//                           Watch Now
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>

//             {activeSidebarItem === 'continue-watching' && (
//               <div className="mt-8" id="continue-watching">
//                 <h3 className="text-2xl font-bold mb-4">Continue Watching</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <img
//                           src={`/placeholder.svg?height=100&width=200`}
//                           alt={`Thumbnail ${i}`}
//                           className="w-full h-32 object-cover rounded-md mb-2"
//                         />
//                         <h4 className="font-semibold mb-1 truncate">Continuing Video {i}</h4>
//                         <p className="text-sm text-muted-foreground mb-2">5:23 remaining</p>
//                         <Progress value={75} className="w-full mb-2" />
//                         <Button size="sm" className="w-full" onClick={playSound}>Resume</Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'recommended' && (
//               <div className="mt-8" id="recommended">
//                 <h3 className="text-2xl font-bold mb-4">Recommended Videos</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <img
//                           src={`/placeholder.svg?height=100&width=200`}
//                           alt={`Thumbnail ${i}`}
//                           className="w-full h-32 object-cover rounded-md mb-2"
//                         />
//                         <h3 className="font-semibold mb-1">Recommended Video {i}</h3>
//                         <p className="text-sm text-muted-foreground mb-2">Channel Name</p>
//                         <Button size="sm" variant="outline" className="w-full" onClick={playSound}>
//                           Watch Now
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'channels' && (
//               <div className="mt-8" id="channels">
//                 <h3 className="text-2xl font-bold mb-4">Subscribed Channels</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4 flex items-center space-x-4">
//                         <Avatar className="w-12 h-12">
//                           <img src={`/placeholder.svg?height=48&width=48`} alt={`Channel ${i}`} className="rounded-full" />
//                         </Avatar>
//                         <div>
//                           <h4 className="font-semibold">Channel {i}</h4>
//                           <p className="text-sm text-muted-foreground">1.2M subscribers</p>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'playlists' && (
//               <div className="mt-8" id="playlists">
//                 <h3 className="text-2xl font-bold mb-4">Your Playlists</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <h4 className="font-semibold mb-2">Playlist {i}</h4>
//                         <p className="text-sm text-muted-foreground mb-2">10 videos</p>
//                         <Button size="sm" variant="outline" className="w-full" onClick={playSound}>
//                           View Playlist
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'collections' && (
//               <div className="mt-8" id="collections">
//                 <h3 className="text-2xl font-bold mb-4">Your Collections</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <h4 className="font-semibold mb-2">Collection {i}</h4>
//                         <p className="text-sm text-muted-foreground mb-2">15 videos</p>
//                         <Button size="sm" variant="outline" className="w-full" onClick={playSound}>
//                           View Collection
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'learning-path' && (
//               <div className="mt-8" id="learning-path">
//                 <h3 className="text-2xl font-bold mb-4">Your Learning Paths</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <h4 className="font-semibold mb-2">Learning Path {i}</h4>
//                         <p className="text-sm text-muted-foreground mb-2">5 courses, 20 videos</p>
//                         <Progress value={60} className="w-full mb-2" />
//                         <Button size="sm" variant="outline" className="w-full" onClick={playSound}>
//                           Continue Learning
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'favourites' && (
//               <div className="mt-8" id="favourites">
//                 <h3 className="text-2xl font-bold mb-4">Favorite Videos</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <Card key={i}>
//                       <CardContent className="p-4">
//                         <img
//                           src={`/placeholder.svg?height=100&width=200`}
//                           alt={`Thumbnail ${i}`}
//                           className="w-full h-32 object-cover rounded-md mb-2"
//                         />
//                         <h4 className="font-semibold mb-1">Favorite Video {i}</h4>
//                         <p className="text-sm text-muted-foreground mb-2">Added on 2023-06-{i}</p>
//                         <Button size="sm" variant="outline" className="w-full" onClick={playSound}>
//                           Watch Now
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeSidebarItem === 'all-bookmarks' && (
//               <div className="mt-8" id="all-bookmarks">
//                 <h3 className="text-2xl font-bold mb-4">All Bookmarks</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {bookmarks.map((bookmark, index) => (
//                     <Card key={index}>
//                       <CardContent className="p-4">
//                         <img
//                           src={bookmark.thumbnail || `/placeholder.svg?height=100&width=200`}
//                           alt={`Thumbnail ${index + 1}`}
//                           className="w-full h-32 object-cover rounded-md mb-2"
//                         />
//                         <h4 className="font-semibold mb-1">{bookmark.title}</h4>
//                         <p className="text-sm text-muted-foreground mb-2">Bookmarked on {bookmark.date}</p>
//                         <Button size="sm" variant="outline" className="w-full" onClick={playSound}>
//                           Watch Now
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//         {showScrollUp && (
//           <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer animate-bounce" onClick={() => contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}>
//             <ChevronUp className="h-6 w-6" />
//           </div>
//         )}
//         {showScrollDown && (
//           <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer animate-bounce" onClick={() => contentRef.current?.scrollTo({ top: contentRef.current.scrollHeight, behavior: 'smooth' })}>
//             <ChevronDown className="h-6 w-6" />
//           </div>
//         )}
//       </div>

//       <Sheet>
//         <SheetTrigger asChild>
//           <Button className="fixed bottom-4 right-4 rounded-full w-16 h-16 text-2xl shadow-lg bg-blue-500 hover:bg-blue-600" size="icon">
//             <Plus className="h-8 w-8" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Quick Actions</SheetTitle>
//             <SheetDescription>Choose an action to perform</SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <Button onClick={playSound}>
//               <Bookmark className="mr-2 h-4 w-4" />
//               Save to Collection
//             </Button>
//             <Button onClick={playSound}>
//               <Share2 className="mr-2 h-4 w-4" />
//               Share Video
//             </Button>
//             <Button onClick={playSound}>
//               <Plus className="mr-2 h-4 w-4" />
//               Add to Learning Path
//             </Button>
//             <Button variant="destructive" onClick={playSound}>
//               <Trash2 className="mr-2 h-4 w-4" />
//               Delete Video
//             </Button>
//           </div>
//         </SheetContent>
//       </Sheet>

//       <Dialog open={showDashboardModal} onOpenChange={setShowDashboardModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Dashboard</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('dashboard')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showAnalyticsModal} onOpenChange={setShowAnalyticsModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Analytics</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('analytics')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showToAddModal} onOpenChange={setShowToAddModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Videos to Add</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('to-add')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showArchivedModal} onOpenChange={setShowArchivedModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Archived Videos</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('archived')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showDeletedModal} onOpenChange={setShowDeletedModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Deleted Videos</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('deleted')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showScheduledModal} onOpenChange={setShowScheduledModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Scheduled Videos</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('scheduled')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showSocialTickerModal} onOpenChange={setShowSocialTickerModal}>
//         <DialogContent className="sm:max-w-[800px]">
//           <DialogHeader>
//             <DialogTitle>Social Ticker</DialogTitle>
//           </DialogHeader>
//           {renderModalContent('social-ticker')}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showFilterModal} onOpenChange={setShowFilterModal}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Filter Options</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div>
//               <label className="text-sm font-medium">Date Range</label>
//               <div className="flex space-x-2 mt-1">
//                 <Input type="date" className="flex-1" />
//                 <Input type="date" className="flex-1" />
//               </div>
//             </div>
//             <div>
//               <label className="text-sm font-medium">Categories</label>
//               <div className="grid grid-cols-2 gap-2 mt-1">
//                 {['Technology', 'Science', 'History', 'Art', 'Music', 'Sports'].map((category) => (
//                   <label key={category} className="flex items-center space-x-2">
//                     <input type="checkbox" className="form-checkbox" />
//                     <span>{category}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <label className="text-sm font-medium">Duration</label>
//               <select className="w-full mt-1 border rounded p-2">
//                 <option>Any</option>
//                 <option>Short ({"<"} 5 minutes)</option>
//                 <option>Medium (5-20 minutes)</option>
//                 <option>Long ({">"}20 minutes)</option>
//               </select>
//             </div>
//             <div className="flex justify-end space-x-2">
//               <Button variant="outline" onClick={() => setShowFilterModal(false)}>Cancel</Button>
//               <Button onClick={() => {
//                 setShowFilterModal(false)
//                 setFiltersApplied(true)
//                 setActiveFilters(['Date: Last 7 days', 'Category: Technology', 'Duration: Any'])
//               }}>Apply Filters</Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showAddBookmarkModal} onOpenChange={setShowAddBookmarkModal}>
//         <DialogContent className="z-50">
//           <DialogHeader>
//             <DialogTitle>Add Bookmark</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div>
//               <label className="text-sm font-medium">Video URL</label>
//               <Input type="url" placeholder="https://www.youtube.com/watch?v=..." className="mt-1" />
//             </div>
//             <div>
//               <label className="text-sm font-medium">Title</label>
//               <Input type="text" placeholder="Enter video title" className="mt-1" />
//             </div>
//             <div>
//               <label className="text-sm font-medium">Notes</label>
//               <textarea className="w-full mt-1 border rounded p-2" rows={3} placeholder="Add any notes..."></textarea>
//             </div>
//             <div>
//               <label className="text-sm font-medium">Tags</label>
//               <Input type="text" placeholder="Enter tags separated by commas" className="mt-1" />
//             </div>
//             <div>
//               <label className="text-sm font-medium">Collection</label>
//               <select className="w-full mt-1 border rounded p-2">
//                 <option>Select a collection</option>
//                 <option>Web Development</option>
//                 <option>Machine Learning</option>
//                 <option>Data Science</option>
//               </select>
//             </div>
//             <div className="flex justify-end space-x-2">
//               <Button variant="outline" onClick={() => setShowAddBookmarkModal(false)}>Cancel</Button>
//               <Button onClick={() => {
//                 setShowAddBookmarkModal(false)
//                 addBookmark({
//                   title: "New Bookmark",
//                   date: new Date().toLocaleDateString(),
//                   thumbnail: "/placeholder.svg?height=100&width=200"
//                 })
//                 playSound()
//               }}>Add Bookmark</Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </TooltipProvider>
//   </div>
// )
// }