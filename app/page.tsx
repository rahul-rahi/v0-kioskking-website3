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
import {
  MapPin,
  Star,
  Users,
  TrendingUp,
  ChevronDown,
  Instagram,
  Check,
  Crown,
  Settings,
  IndianRupee,
  BadgeIndianRupee,
  Clock3,
  ShieldCheck,
  Repeat
} from "lucide-react"

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
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl": "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">

      <img

        src="/KIOSKKINGLOGO.png"

        alt="KIOSKKING"

        className="h-16 md:h-20 w-auto transition-all duration-300"

      />

</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium tracking-wide text-white/80 hover:text-primary transition-all duration-300">About Us</a>
          <a href="#whyinvest" className="text-sm font-medium tracking-wide text-white/80 hover:text-primary transition-all duration-300">Why Invest</a>
          <a href="#businessmodel" className="text-sm font-medium tracking-wide text-white/80 hover:text-primary transition-all duration-300">Business Model</a>
          <a href="#roi" className="text-sm font-medium tracking-wide text-white/80 hover:text-primary transition-all duration-300">ROI & Investment</a>
          <a href="#locations" className="text-sm font-medium tracking-wide text-white/80 hover:text-primary transition-all duration-300">Growth Plan</a>
          <a href="#locations" className="text-sm font-medium tracking-wide text-white/80 hover:text-primary transition-all duration-300">Support</a>
          </nav>
        <Button 
          onClick={onOpenForm}
          className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
        >
          Become a Franchise Partner
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
          <span className="text-primary">Building India's Next Premium</span>
          <br />
          <span className="text-foreground">Street Food Franchise Network</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-200 text-pretty">
          Launch your own KIOSKKING outlet with a proven business model, high-margin products, premium branding, and complete operational support.
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


function AboutSection() {

  const { ref, isInView } = useInView()

  const pillars = [

    "Premium Branding",

    "High Margin Menu",

    "Technology Enabled",

    "Standardized SOPs",

    "Scalable Format",

    "Centralized Marketing"

  ]
  return (
    <section
      id="about"
      ref={ref}
      className="py-28 bg-secondary/10"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >

            <span className="text-primary uppercase tracking-[0.3em] text-sm">
              About KIOSKKING
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              Building India's Most Loved Premium Street Food Brand
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              KIOSKKING was founded with a simple vision:
              transform India's street-food culture into a
              modern, premium and scalable business model.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              By combining trending products, standardized
              operations, technology-enabled management and
              strong branding, we are creating a franchise
              opportunity built for long-term growth.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our goal is to empower entrepreneurs across
              India with a business model that is affordable,
              profitable and scalable.
            </p>

          </div>

          {/* Right Side */}

          <div
  className={`transition-all duration-700 delay-200 ${
    isInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
  <div className="relative h-[550px] rounded-3xl overflow-hidden border border-primary/20">

    <Image
      src="/FounderImage.jpeg"
      alt="Founder KIOSKKING"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute bottom-0 left-0 p-8">

      <div className="text-primary text-sm uppercase tracking-[0.3em] mb-2">
        Founder
      </div>

      <h3 className="text-3xl font-bold text-white">
        Arjun Singh Chamyal
      </h3>

      <p className="text-white/80 mt-2">
        Founder & CEO, KIOSKKING
      </p>

    </div>

  </div>
</div>

        </div>
      </div>
      <div className="container mx-auto px-6">

        <div className="flex flex-wrap gap-4 mt-10">

          {pillars.map((pillar) => (

            <div

              key={pillar}

              className="px-5 py-3 rounded-full border border-primary/30 bg-card/50"

            >

              {pillar}

            </div>

          ))}

        </div>

      </div>
      
    </section>
  )
}


// Trust/Numbers Section
function TrustSection() {
  const { ref, isInView } = useInView()
  
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Orders Served"
    },
    {
      icon: IndianRupee,
      value: "65%+",
      label: "Gross Margin"
    },
    {
      icon: Clock3,
      value: "18 Months",
      label: "Average Payback"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Standardized SOPs"
    }
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

// WhyInvestSection Section
function WhyInvestSection() {
  const { ref, isInView } = useInView()
  const businessModel = [
    {
      icon: Crown,
      title: "Premium Product Mix",
      metric: "12+ Products",
      description:
        "A carefully curated menu designed to maximize customer demand and profitability."
    },
    {
      icon: Settings,
      title: "Low Operational Complexity",
      metric: "2–3 Staff",
      description:
        "Simple preparation processes require minimal infrastructure and manpower."
    },
    {
      icon: IndianRupee,
      title: "Multiple Revenue Streams",
      metric: "6+ Categories",
      description:
        "Generate revenue from beverages, snacks, combos, add-ons and seasonal offerings."
    },
    {
      icon: Repeat,
      title: "Strong Repeat Customers",
      metric: "High Retention",
      description:
        "Trend-driven products and premium experiences encourage repeat visits."
    }
  ]
  return (
    <section id="whyinvest" ref={ref} className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6">

        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-6 text-primary transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Built for Profitable Franchise Growth
        </h2>

        <p
          className={`text-center text-muted-foreground mb-16 max-w-xl mx-auto transition-all duration-700 delay-100 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Every aspect of the KIOSKKING model is engineered to balance profitability, operational efficiency, and long-term scalability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  {businessModel.map((item, index) => {
    const Icon = item.icon

    return (
      <div
        key={item.title}
        className="
        bg-card/70
        backdrop-blur-xl
        border
        border-primary/20
        rounded-2xl
        p-8
        hover:border-primary/50
        hover:-translate-y-2
        transition-all
        duration-300
        "
      >
        <Icon className="w-10 h-10 text-primary mb-5" />

        <h3 className="text-xl font-bold text-primary mb-2">
          {item.title}
        </h3>

        <div className="text-2xl font-bold text-foreground mb-3">
          {item.metric}
        </div>

        <p className="text-muted-foreground text-sm">
          {item.description}
        </p>
      </div>
    )
  })}

</div>

      </div>
    </section>
  )
}
// BusinessModel Section
function BusinessModel() {
  const { ref, isInView } = useInView()

  const revenueDrivers = [

      {
        title: "Boba Drinks",
        image: "/images/Boba.jpeg",
        metric: "High Customer Demand",
        description: "Premium beverages with strong margins and repeat purchases."
      },
      {
        title: "Cold Coffee",
        image: "/images/gallery-1.jpg",
        metric: "High Margin",
        description: "High-demand beverage category with consistent daily sales."
      },
      {
        title: "Shakes",
        image: "/images/gallery-2.jpg",
        metric: "Popular Upsell",
        description: "Popular among young customers and ideal for upselling."
      },
      {
        title: "Momos",
        image: "/images/Momos.jpeg",
        metric: "High Repeat Purchase",
        description: "One of the strongest repeat-order categories."
      },
      {
        title: "Burgers",
        image: "/images/paneer-burger.jpg",
        metric: "Popular Add-On",
        description: "Increases average order value and combo sales."
      },
      {
        title: "Combos",
        image: "/images/peri-peri-fries.jpg",
        metric: "Highest Ticket Size",
        description: "Drives higher customer spending and profitability."
      }
  ]

  return (
    <section id="businessmodel" ref={ref} className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Revenue Drivers That Power Every KIOSKKING Outlet
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our product portfolio is designed to maximize profitability, encourage repeat purchases, and create a scalable franchise business model.
        </p>
        <div className="mt-16">

  

</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
  {revenueDrivers.map((driver, index) => (
    <div
      key={driver.title}
      className={`bg-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={driver.image}
          alt={driver.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-primary">
          {driver.title}
        </h3>
      </div>

      {/* Revenue Metric */}
      <div className="p-6 flex flex-col flex-1">

      <div className="mb-4">

      <div className="text-2xl md:text-3xl font-bold text-primary min-h-[70px] flex items-center">  
      {driver.metric}
      </div>

      </div>

      <p className="text-muted-foreground leading-relaxed flex-1">
          {driver.description}
        </p>

      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}

function ROISection()
{
  const { ref, isInView } = useInView()

  return (
    <section id="roi" ref={ref} className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Attractive ROI with Scalable Growth Potential
        </h2>
        <p className={`text-muted-foreground mb-10 max-w-xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          With a starting investment of ₹8–15L and an average payback period of 18–24 months, KIOSKKING offers a compelling opportunity for entrepreneurs seeking a profitable and scalable franchise business.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

  <div className="bg-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
    <div className="text-primary text-3xl font-bold mb-3">
      ₹8–15L
    </div>

    <h3 className="font-semibold mb-2">
      Investment Range
    </h3>

    <p className="text-muted-foreground text-sm">
      Flexible entry point depending on outlet format and location.
    </p>
  </div>

  <div className="bg-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
    <div className="text-primary text-3xl font-bold mb-3">
      18–24
    </div>

    <h3 className="font-semibold mb-2">
      Months Payback
    </h3>

    <p className="text-muted-foreground text-sm">
      Expected investment recovery period under standard operating conditions.
    </p>
  </div>

  <div className="bg-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
    <div className="text-primary text-3xl font-bold mb-3">
      High
    </div>

    <h3 className="font-semibold mb-2">
      Gross Margin
    </h3>

    <p className="text-muted-foreground text-sm">
      High-margin categories designed for profitability and repeat purchases.
    </p>
  </div>

  <div className="bg-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
    <div className="text-primary text-3xl font-bold mb-3">
      100%
    </div>

    <h3 className="font-semibold mb-2">
      Operational Support
    </h3>

    <p className="text-muted-foreground text-sm">
      Training, SOPs, marketing guidance, and technology support included.
    </p>
  </div>

</div>

<div className="mt-16 max-w-4xl mx-auto">
  <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">

    <h3 className="text-2xl font-bold text-primary mb-4">
      Why the Numbers Matter
    </h3>

    <p className="text-muted-foreground leading-relaxed">
      KIOSKKING combines a relatively low investment requirement with
      high-margin product categories, operational simplicity, and strong
      repeat-customer potential. This creates a business model designed
      for sustainable profitability and long-term franchise growth.
    </p>

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
      title: "Proven Product Market Fit",
      description: "Stand out with a brand that exudes quality and sophistication in every detail. Already validated."
    },
    {
      title: "High Margin Menu",
      description: "Our menu features trending items that customers actively seek and love."
    },
    {
      title: "Technology Enabled",
      description: "Streamlined processes designed for efficiency without compromising quality using POS + Analytics."
    },
    {
      title: "Scalable Format",
      description: "A concept that resonates with the modern Kiosk or Café."
    },
    {
      title: "Low Investment",
      description: "A concept that is cheaper as compared to cafes."
    },
    {
      title: "Centralized Branding",
      description: "Professional marketing."
    },
  ]

  return (
    <section id="why-us" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Why Investors Choose KIOSKKING
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
            Become a Franchise Partner
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
        Our Mission & Vision
        </h2>
        <blockquote className={`text-xl md:text-2xl text-foreground leading-relaxed italic transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          &ldquo;KIOSKKING was built to transform India's most loved premium street food chain, starting from Uttarakhand and expanding nationwide through passionate franchise partners.&rdquo;
        </blockquote>
        <div
  className={`mt-12 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
    isInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>

  <div className="bg-card/50 border border-primary/20 rounded-xl p-6">
    <div className="text-primary text-sm mb-2">
      Founded
    </div>

    <div className="text-2xl font-bold">
      2025
    </div>
  </div>

  <div className="bg-card/50 border border-primary/20 rounded-xl p-6">
    <div className="text-primary text-sm mb-2">
      Headquarters
    </div>

    <div className="text-laege font-bold">
      Haldwani (Hydle Gate, Kathgodam, Nainital, Uttarakhand 263126)
    </div>
  </div>

  <div className="bg-card/50 border border-primary/20 rounded-xl p-6">
    <div className="text-primary text-sm mb-2">
      Vision
    </div>

    <div className="text-2xl font-bold">
      100 Outlets
    </div>

    <div className="text-muted-foreground text-sm">
      By 2030
    </div>
  </div>

</div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const { ref, isInView } = useInView()

  const successStories = [
    {
      metric: "3,000+",
      title: "Monthly Customers",
      description:
        "Strong customer demand and repeat visits continue to drive growth at our flagship outlet."
    },
    {
      metric: "4.7★",
      title: "Customer Rating",
      description:
        "Consistently positive customer feedback reinforces the strength of the KIOSKKING brand."
    },
    {
      metric: "100%",
      title: "Scalable Model",
      description:
        "Designed with standardized operations that can be replicated across multiple locations."
    }
  ]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {successStories.map((successStories, index) => (
            <div 
              key={successStories.title}
              className={`bg-card border border-border rounded-lg p-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              <div className="text-4xl font-bold text-primary mb-4">
  {successStories.metric}
</div>

<h3 className="text-xl font-semibold text-foreground mb-3">
  {successStories.title}
</h3>

<p className="text-muted-foreground">
  {successStories.description}
</p>
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
    <section id="locations" ref={ref} className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-primary transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         Expansion Roadmap
        </h2>
        <p className={`text-muted-foreground mb-10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Our expansion strategy is focused on building a strong regional presence before scaling nationwide through franchise partnerships.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mt-12"><div className="bg-card/70 border border-primary/20 rounded-2xl p-6">
  <div className="text-primary text-2xl font-bold mb-3">
    2026
  </div>

  <h3 className="font-semibold mb-2">
    Foundation Phase
  </h3>

  <p className="text-muted-foreground text-sm">
    Strengthen operations and brand presence in Haldwani.
  </p>
</div>

<div className="bg-card/70 border border-primary/20 rounded-2xl p-6">
  <div className="text-primary text-2xl font-bold mb-3">
    2027
  </div>

  <h3 className="font-semibold mb-2">
    Regional Expansion
  </h3>

  <p className="text-muted-foreground text-sm">
    Launch new outlets in Nainital and Kaichi Dham.
  </p>
</div>

<div className="bg-card/70 border border-primary/20 rounded-2xl p-6">
  <div className="text-primary text-2xl font-bold mb-3">
    2028
  </div>

  <h3 className="font-semibold mb-2">
    Metro Entry
  </h3>

  <p className="text-muted-foreground text-sm">
    Expand into Delhi NCR and other high-potential markets.
  </p>
</div>

<div className="bg-card/70 border border-primary/20 rounded-2xl p-6">
  <div className="text-primary text-2xl font-bold mb-3">
    2030
  </div>

  <h3 className="font-semibold mb-2">
    National Growth
  </h3>

  <p className="text-muted-foreground text-sm">
    Target 100 outlets across India through franchise partnerships.
  </p>
</div>
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
        Building India's Next Premium Street Food Franchise Network.
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
      console.error("[KIOSKKING] Error submitting form:", error)
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
      <AboutSection />
      <TrustSection />
      <WhyInvestSection />
      <BusinessModel />
      <ROISection />
      <WhySection onOpenForm={() => setFormOpen(true)} />
      <FounderSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer onOpenForm={() => setFormOpen(true)} />
      <FranchiseFormModal open={formOpen} onOpenChange={setFormOpen} />
    </main>
  )
}
