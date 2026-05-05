"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Star, Users, TrendingUp, ChevronDown, Instagram, Check } from "lucide-react"

// Intersection Observer hook for animations
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}

// Header Component
function Header({ onOpenForm }: { onOpenForm: () => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider text-primary">
          KIOSKKING
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partner</a>
          <a href="#locations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Locations</a>
        </nav>
        <Button 
          onClick={onOpenForm}
          className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
        >
          Start Your KIOSKKING
        </Button>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/kiosk-hero.jpg"
          alt="KIOSKKING Premium Street Food Kiosk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up text-balance">
          <span className="text-primary">Bold Flavors.</span>
          <br />
          <span className="text-foreground">Elevated Street Experience.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-200 text-pretty">
          KIOSKKING is where street food meets premium experience — crafted drinks, gourmet bites, and a vibe you don&apos;t forget.
        </p>
        <Button 
          onClick={onOpenForm}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 opacity-0 animate-fade-in-up delay-300 animate-pulse-glow"
        >
          Start Your KIOSKKING
        </Button>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-500">
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// Trust/Numbers Section
function TrustSection() {
  const { ref, isInView } = useInView()
  
  const stats = [
    { icon: Users, value: "10,000+", label: "Customers Served" },
    { icon: MapPin, value: "5+", label: "Active Locations" },
    { icon: Star, value: "4.7★", label: "Customer Rating" },
    { icon: TrendingUp, value: "Growing", label: "Franchise Network" },
  ]

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          KIOSKKING in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          The KIOSKKING Experience
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Where every bite tells a story. Where every sip creates a memory.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Image
              src="/images/kiosk-experience.jpg"
              alt="KIOSKKING Experience"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-sm text-primary font-medium">Premium Atmosphere</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image
                src="/images/blue-lagoon.jpg"
                alt="Blue Lagoon Mocktail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image
                src="/images/veg-momos.jpg"
                alt="Veg Momos"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image
                src="/images/peri-peri-fries.jpg"
                alt="Peri Peri Fries"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Image
                src="/images/paneer-burger.jpg"
                alt="Paneer Burger"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Menu Section
function MenuSection() {
  const { ref, isInView } = useInView()

  const menuCategories = [
    {
      name: "Mocktails",
      items: [
        { name: "Blue Lagoon", tag: "Signature" },
        { name: "Virgin Mojito", tag: null },
        { name: "Sunset Cooler", tag: "Most Loved" },
        { name: "Mango Tango", tag: null },
      ]
    },
    {
      name: "Cold Coffee",
      items: [
        { name: "Classic Cold Coffee", tag: "Most Loved" },
        { name: "Hazelnut Frappe", tag: null },
        { name: "Caramel Latte", tag: null },
        { name: "Mocha Blast", tag: "Signature" },
      ]
    },
    {
      name: "Shakes",
      items: [
        { name: "Oreo Shake", tag: "Most Loved" },
        { name: "Belgian Chocolate", tag: null },
        { name: "Strawberry Dream", tag: null },
        { name: "Nutella Special", tag: "Signature" },
      ]
    },
    {
      name: "Momos",
      items: [
        { name: "Veg Momos", tag: "Signature" },
        { name: "Paneer Momos", tag: null },
        { name: "Tandoori Momos", tag: "Most Loved" },
        { name: "Fried Momos", tag: null },
      ]
    },
    {
      name: "Burgers",
      items: [
        { name: "Paneer Burger", tag: "Signature" },
        { name: "Aloo Tikki Burger", tag: null },
        { name: "Cheese Loaded Burger", tag: "Most Loved" },
        { name: "Veggie Supreme", tag: null },
      ]
    },
    {
      name: "Fries",
      items: [
        { name: "Peri Peri Fries", tag: "Signature" },
        { name: "Cheese Fries", tag: "Most Loved" },
        { name: "Classic Salted", tag: null },
        { name: "Loaded Nachos Fries", tag: null },
      ]
    },
  ]

  return (
    <section id="menu" ref={ref} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our Menu
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Curated with passion. Crafted with perfection.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuCategories.map((category, catIndex) => (
            <div 
              key={category.name}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-border pb-2">{category.name}</h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between group">
                    <span className="text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                    {item.tag && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.tag === "Signature" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Signature Items Highlight */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">Signature Picks</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Blue Lagoon", image: "/images/blue-lagoon.jpg" },
              { name: "Veg Momos", image: "/images/veg-momos.jpg" },
              { name: "Peri Peri Fries", image: "/images/peri-peri-fries.jpg" },
              { name: "Paneer Burger", image: "/images/paneer-burger.jpg" },
            ].map((item) => (
              <div key={item.name} className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3 ring-2 ring-transparent hover:ring-primary transition-all">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-medium text-primary">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Why KIOSKKING Section
function WhySection({ onOpenForm }: { onOpenForm: () => void }) {
  const { ref, isInView } = useInView()

  const reasons = [
    {
      title: "Premium Brand Positioning",
      description: "Stand out with a brand that exudes quality and sophistication in every detail."
    },
    {
      title: "High-Demand Products",
      description: "Our menu features trending items that customers actively seek and love."
    },
    {
      title: "Simple Operations Model",
      description: "Streamlined processes designed for efficiency without compromising quality."
    },
    {
      title: "Strong Customer Appeal",
      description: "A concept that resonates with the modern, quality-conscious consumer."
    },
  ]

  return (
    <section id="why-us" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Why Partner With KIOSKKING
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Join a brand that&apos;s redefining street food culture.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className={`bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Check className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            onClick={onOpenForm}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  )
}

// Founder Section
function FounderSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-10 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          From the Founder
        </h2>
        <blockquote className={`text-xl md:text-2xl text-foreground leading-relaxed italic transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          &ldquo;KIOSKKING was built to transform everyday street food into a premium experience — combining quality, presentation, and atmosphere. We don&apos;t just serve food; we create moments that people remember.&rdquo;
        </blockquote>
        <div className={`mt-8 text-primary font-semibold transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          — Founder, KIOSKKING
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const { ref, isInView } = useInView()

  const testimonials = [
    {
      quote: "The Blue Lagoon is absolutely divine! This place has the perfect vibe for hangouts.",
      author: "Priya S."
    },
    {
      quote: "Best momos I've ever had. The presentation makes it feel so premium!",
      author: "Rahul M."
    },
    {
      quote: "Finally, street food that looks as good as it tastes. Highly recommend!",
      author: "Ananya K."
    },
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Loved by Our Customers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className={`bg-card border border-border rounded-lg p-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Location Section
function LocationSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="locations" ref={ref} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our Presence
        </h2>
        <p className={`text-muted-foreground mb-10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Currently serving happiness in select locations
        </p>
        
        <div className={`inline-flex items-center gap-3 bg-card border border-border rounded-full px-8 py-4 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-foreground font-medium">Delhi NCR Region</span>
        </div>
        
        <p className={`mt-8 text-primary font-semibold transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Expanding Soon to New Cities
        </p>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const { ref, isInView } = useInView()

  const images = [
    "/images/kiosk-hero.jpg",
    "/images/blue-lagoon.jpg",
    "/images/veg-momos.jpg",
    "/images/peri-peri-fries.jpg",
    "/images/paneer-burger.jpg",
    "/images/kiosk-experience.jpg",
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Instagram className={`w-6 h-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
          <h2 className={`text-2xl font-bold text-foreground transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            @kioskking
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={image}
              className={`relative aspect-square rounded-lg overflow-hidden group transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Image
                src={image}
                alt={`KIOSKKING Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-bold tracking-wider text-primary mb-8">
          KIOSKKING
        </div>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Bold Flavors. Elevated Street Experience.
        </p>
        <Button 
          onClick={onOpenForm}
          className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12"
        >
          Start Your KIOSKKING
        </Button>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} KIOSKKING. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Franchise Form Modal
function FranchiseFormModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    investmentRange: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to API endpoint that will forward to Google Sheets
      const response = await fetch("/api/franchise-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Website",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", phone: "", city: "", investmentRange: "" })
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset success state after modal closes
    setTimeout(() => setIsSuccess(false), 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Start Your KIOSKKING</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isSuccess 
              ? "We've received your information."
              : "Fill in your details and our team will reach out to you."
            }
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl font-semibold text-foreground mb-2">Thank you!</p>
            <p className="text-muted-foreground">Our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-input border-border focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-input border-border focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-foreground">City</Label>
              <Input
                id="city"
                placeholder="Your city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="bg-input border-border focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investment" className="text-foreground">Investment Range</Label>
              <Select 
                value={formData.investmentRange} 
                onValueChange={(value) => setFormData({ ...formData, investmentRange: value })}
                required
              >
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select investment range" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="5-10L">₹5 - 10 Lakhs</SelectItem>
                  <SelectItem value="10-15L">₹10 - 15 Lakhs</SelectItem>
                  <SelectItem value="15-25L">₹15 - 25 Lakhs</SelectItem>
                  <SelectItem value="25L+">₹25 Lakhs+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Main Page Component
export default function KioskKingPage() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenForm={() => setFormOpen(true)} />
      <HeroSection onOpenForm={() => setFormOpen(true)} />
      <TrustSection />
      <ExperienceSection />
      <MenuSection />
      <WhySection onOpenForm={() => setFormOpen(true)} />
      <FounderSection />
      <TestimonialsSection />
      <LocationSection />
      <GallerySection />
      <Footer onOpenForm={() => setFormOpen(true)} />
      <FranchiseFormModal open={formOpen} onOpenChange={setFormOpen} />
    </main>
  )
}
