import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { 
  Globe, 
  Palette, 
  Search, 
  Users, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Zap,
  Target,
  Award,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

import logoImage from './assets/images/lifelong-earner-logo.png';
import heroBackground from './assets/images/hero-background.jpg';
import teamImage from './assets/images/team-working.jpg';
import portfolioImage from './assets/images/portfolio-showcase.png';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Logo Design",
      description: "Create memorable brand identities that resonate with your target audience and stand out in the marketplace."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Build modern, responsive websites that convert visitors into customers with cutting-edge technology."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Grow your online presence with strategic content creation and community engagement across all platforms."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Dominate search results with organic SEO strategies that drive qualified traffic to your business."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies that increase your bottom line and accelerate business growth."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Brand Strategy",
      description: "Develop cohesive brand strategies that align with your business goals and market positioning."
    }
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "20+ Years Experience",
      description: "Combined decades of expertise in SEO, sales, and marketing"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Solutions",
      description: "Staying ahead with the latest AI tools and technologies"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proven Results",
      description: "Track record of increasing client bottom lines"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      text: "Lifelong Earner transformed our online presence. Our website traffic increased by 300% in just 3 months!",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "E-commerce Store",
      text: "The SEO optimization work was incredible. We're now ranking #1 for our main keywords.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Local Business",
      text: "Professional, responsive, and results-driven. Exactly what we needed to grow our business.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Lifelong Earner" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your
              <span className="block text-accent"> Lifelong Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Stop renting space at the top of Google. Let's build your online home so you earn your spot with expert web development, stunning design, and strategic digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                About Lifelong Earner
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                We're not just another digital agency. With over 20 years of combined experience in SEO, sales, and marketing, we help businesses build their lifelong digital legacy. Our team stays at the forefront of the AI landscape, ensuring your business leverages the latest technologies to stay competitive.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                Based in Orange County, CA, we manage multiple brands and social media accounts, providing comprehensive digital solutions that increase your bottom line through proven strategies and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <img 
                src={teamImage} 
                alt="Professional team working" 
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to grow your business and establish your online presence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full card-hover border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable growth and online success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <img 
              src={portfolioImage} 
              alt="Portfolio showcase" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Web Solutions</h3>
                <p className="text-lg opacity-90">Responsive, interactive websites that convert visitors into customers</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "300%", label: "Average Traffic Increase" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed their online presence with us
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Stop renting space at the top of Google. Let's build your online home so you earn your spot and grow your business organically.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your online presence? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Needed</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Website Development</option>
                      <option>Logo Design</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Management</option>
                      <option>Digital Marketing</option>
                      <option>Brand Strategy</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Orange County, CA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>hello@lifelongearner.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Available via contact form</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.youtube.com/watch?v=kpF5N6JkiHU" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Youtube className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://x.com/Lifelong_Earner" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.facebook.com/LifelongEarner" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                  <a href="https://www.instagram.com/lifelong.earner/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>20+ years combined experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>AI-powered solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Proven track record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Results-driven approach</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoImage} alt="Lifelong Earner" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-primary-foreground/80 mb-4">
                Building lifelong digital legacies through expert web development and strategic marketing.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/watch?v=kpF5N6JkiHU" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://x.com/Lifelong_Earner" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/LifelongEarner" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/lifelong.earner/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Logo Design</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">SEO Optimization</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Social Media</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
                <li><a href="https://linktr.ee/lifelongearner" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Linktree</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Orange County, CA</li>
                <li>hello@lifelongearner.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Lifelong Earner. All rights reserved. Building your digital legacy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

