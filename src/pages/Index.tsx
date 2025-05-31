import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Cog, Cloud, Users, Target, Gauge, Lock, Github, Linkedin, Twitter, MessageCircle, Sparkles, Brain, Cpu, Network, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Direct text transition component with smooth animation
const ModernTextTransition = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (!texts || texts.length <= 1) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [texts]);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto] drop-shadow-[0_0_8px_rgba(58,188,247,0.5)]">AI Agents</span>
      </div>
      <div className="font-mono text-xl md:text-2xl lg:text-2xl text-white flex items-center justify-center h-8 overflow-hidden">
        <span className="mr-2">for</span>
        <div className="relative overflow-hidden">
          <span 
            className={`text-gradient-animated font-bold transition-all duration-500 block ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {texts[currentIndex] || "Cloud Troubleshooting"}
          </span>
        </div>
      </div>
    </div>
  );
};


const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [email, setEmail] = useState("");
  
  // Scroll animation values
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useCases = [
    {
      title: "DevOps Teams",
      problem: "Spending hours troubleshooting infrastructure issues across multiple environments",
      solution: "ZapGap's AI assistant provides instant diagnostics and automated remediation",
      impact: "75% faster incident resolution",
      icon: Cog,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "SRE Teams", 
      problem: "Manual monitoring and reactive responses to system failures",
      solution: "Proactive monitoring with intelligent alerts and self-healing workflows",
      impact: "99.9% uptime guarantee",
      icon: Shield,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "IT Admins",
      problem: "Complex configuration management across hybrid cloud environments", 
      solution: "Unified control plane with natural language commands",
      impact: "50% reduction in admin overhead",
      icon: Network,
      gradient: "from-green-500 to-teal-400"
    },
    {
      title: "CTOs",
      problem: "Lack of visibility into infrastructure costs and performance",
      solution: "Real-time dashboards with AI-powered optimization recommendations", 
      impact: "30% cost savings on average",
      icon: Brain,
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-50">
        <div className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-700/30 to-blue-700/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-700/20 to-teal-700/10 blur-[100px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-pink-700/15 to-red-700/10 blur-[80px] animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                <motion.img 
                  src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                  alt="ZapGap Logo" 
                  className="h-20 w-auto brightness-0 invert relative"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Platform', href: '#platform' },
                { name: 'Features', href: '#features' },
                { name: 'Use Cases', href: '#use-cases' },
                { name: 'Company', href: '#company' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="relative px-4 py-2 text-gray-300 hover:text-white group overflow-hidden rounded-full transition-all duration-300"
                  style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3ABCF7]/20 to-[#8B2FF8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <span className="relative font-medium">{item.name}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-full opacity-0 group-hover:opacity-70 blur-sm transition duration-300"></div>
                <Button 
                  variant="ghost" 
                  className="relative text-gray-300 hover:text-white bg-black/30 hover:bg-black/50 border border-white/10 backdrop-blur-sm rounded-full px-6"
                  style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}
                >
                  Sign In
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg z-10">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        
        {/* Dynamic neural network animation with reduced visibility */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Neural network nodes */}
          <div className="absolute w-full h-full">
            {/* Static nodes */}
            <div className="absolute top-[15%] left-[20%] w-4 h-4 bg-gradient-to-r from-[#3ABCF7] to-[#5B7CF7] rounded-full blur-[2px] opacity-40 animate-[neural-pulse_2s_ease-in-out_infinite]"></div>
            <div className="absolute top-[30%] left-[40%] w-5 h-5 bg-gradient-to-r from-[#5B7CF7] to-[#8B2FF8] rounded-full blur-[2px] opacity-35 animate-[neural-pulse_2.5s_ease-in-out_infinite_0.3s]"></div>
            <div className="absolute top-[60%] left-[25%] w-3 h-3 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-full blur-[2px] opacity-40 animate-[neural-pulse_1.8s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute top-[20%] left-[70%] w-4 h-4 bg-gradient-to-r from-[#3ABCF7] to-[#5B7CF7] rounded-full blur-[2px] opacity-35 animate-[neural-pulse_2.2s_ease-in-out_infinite_0.7s]"></div>
            <div className="absolute top-[70%] left-[65%] w-5 h-5 bg-gradient-to-r from-[#5B7CF7] to-[#8B2FF8] rounded-full blur-[2px] opacity-40 animate-[neural-pulse_2.4s_ease-in-out_infinite_0.2s]"></div>
            <div className="absolute top-[45%] left-[80%] w-3 h-3 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-full blur-[2px] opacity-35 animate-[neural-pulse_1.9s_ease-in-out_infinite_0.4s]"></div>
            
            {/* Moving nodes */}
            <div className="absolute top-[25%] w-3 h-3 bg-[#3ABCF7] rounded-full blur-[2px] opacity-40 animate-[neural-travel_15s_linear_infinite]" style={{['--start-x' as string]: '-5%', ['--end-x' as string]: '105%'}}></div>
            <div className="absolute top-[55%] w-2 h-2 bg-[#5B7CF7] rounded-full blur-[2px] opacity-35 animate-[neural-travel_12s_linear_infinite_2s]" style={{['--start-x' as string]: '105%', ['--end-x' as string]: '-5%'}}></div>
            <div className="absolute top-[75%] w-3 h-3 bg-[#8B2FF8] rounded-full blur-[2px] opacity-40 animate-[neural-travel_18s_linear_infinite_4s]" style={{['--start-x' as string]: '-5%', ['--end-x' as string]: '105%'}}></div>
            <div className="absolute top-[35%] w-2 h-2 bg-[#3ABCF7] rounded-full blur-[2px] opacity-35 animate-[neural-travel_14s_linear_infinite_6s]" style={{['--start-x' as string]: '105%', ['--end-x' as string]: '-5%'}}></div>
            
            {/* Floating nodes with glow */}
            <div className="absolute top-[40%] left-[50%] w-6 h-6 bg-gradient-to-r from-[#3ABCF7]/30 to-[#8B2FF8]/30 rounded-full blur-md animate-[neural-glow_3s_ease-in-out_infinite] animate-[neural-float_20s_ease-in-out_infinite]" style={{['--float-x1' as string]: '50px', ['--float-y1' as string]: '-30px', ['--float-x2' as string]: '-40px', ['--float-y2' as string]: '20px', ['--float-x3' as string]: '20px', ['--float-y3' as string]: '40px'}}></div>
            <div className="absolute top-[65%] left-[40%] w-5 h-5 bg-gradient-to-r from-[#5B7CF7]/30 to-[#3ABCF7]/30 rounded-full blur-md animate-[neural-glow_4s_ease-in-out_infinite_1s] animate-[neural-float_25s_ease-in-out_infinite_2s]" style={{['--float-x1' as string]: '-60px', ['--float-y1' as string]: '-20px', ['--float-x2' as string]: '30px', ['--float-y2' as string]: '40px', ['--float-x3' as string]: '-20px', ['--float-y3' as string]: '-30px'}}></div>
          </div>
          
          {/* Neural connections */}
          <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
            {/* Static connections */}
            <line x1="20%" y1="15%" x2="40%" y2="30%" stroke="#3ABCF7" strokeWidth="0.5" className="animate-[connection-flow_4s_linear_infinite]" style={{strokeDasharray: '10 5'}} />
            <line x1="40%" y1="30%" x2="25%" y2="60%" stroke="#5B7CF7" strokeWidth="0.5" className="animate-[connection-flow_5s_linear_infinite_0.5s]" style={{strokeDasharray: '10 5'}} />
            <line x1="25%" y1="60%" x2="65%" y2="70%" stroke="#8B2FF8" strokeWidth="0.5" className="animate-[connection-flow_4.5s_linear_infinite_1s]" style={{strokeDasharray: '10 5'}} />
            <line x1="70%" y1="20%" x2="65%" y2="70%" stroke="#3ABCF7" strokeWidth="0.5" className="animate-[connection-flow_5.5s_linear_infinite_0.7s]" style={{strokeDasharray: '10 5'}} />
            <line x1="80%" y1="45%" x2="70%" y2="20%" stroke="#5B7CF7" strokeWidth="0.5" className="animate-[connection-flow_4.2s_linear_infinite_1.2s]" style={{strokeDasharray: '10 5'}} />
            <line x1="40%" y1="30%" x2="70%" y2="20%" stroke="#8B2FF8" strokeWidth="0.5" className="animate-[connection-flow_5.2s_linear_infinite_0.3s]" style={{strokeDasharray: '10 5'}} />
            <line x1="25%" y1="60%" x2="40%" y2="30%" stroke="#3ABCF7" strokeWidth="0.5" className="animate-[connection-flow_4.8s_linear_infinite_0.8s]" style={{strokeDasharray: '10 5'}} />
            <line x1="65%" y1="70%" x2="80%" y2="45%" stroke="#5B7CF7" strokeWidth="0.5" className="animate-[connection-flow_5.3s_linear_infinite_1.5s]" style={{strokeDasharray: '10 5'}} />
            
            {/* Data transfer points */}
            <circle cx="30%" cy="22%" r="1.5" fill="#3ABCF7" className="animate-[data-ping_2s_ease-in-out_infinite]" />
            <circle cx="50%" cy="45%" r="1.5" fill="#5B7CF7" className="animate-[data-ping_2.5s_ease-in-out_infinite_0.5s]" />
            <circle cx="45%" cy="65%" r="1.5" fill="#8B2FF8" className="animate-[data-ping_1.8s_ease-in-out_infinite_1s]" />
            <circle cx="75%" cy="35%" r="1.5" fill="#3ABCF7" className="animate-[data-ping_2.2s_ease-in-out_infinite_1.5s]" />
          </svg>
          
          {/* Moving connection lines */}
          <div className="absolute inset-0">
            <div className="absolute top-[25%] h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#3ABCF7]/40 to-transparent animate-[neural-travel_15s_linear_infinite]" style={{['--start-x' as string]: '-100%', ['--end-x' as string]: '100%'}}></div>
            <div className="absolute top-[55%] h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#5B7CF7]/40 to-transparent animate-[neural-travel_12s_linear_infinite_2s]" style={{['--start-x' as string]: '100%', ['--end-x' as string]: '-100%'}}></div>
            <div className="absolute top-[75%] h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#8B2FF8]/40 to-transparent animate-[neural-travel_18s_linear_infinite_4s]" style={{['--start-x' as string]: '-100%', ['--end-x' as string]: '100%'}}></div>
            <div className="absolute top-[35%] h-[0.5px] w-full bg-gradient-to-r from-transparent via-[#3ABCF7]/40 to-transparent animate-[neural-travel_14s_linear_infinite_6s]" style={{['--start-x' as string]: '100%', ['--end-x' as string]: '-100%'}}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-6xl mb-8 relative" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto]">Zap the Gap of Your Infrastructure</span>
                {/* Light ray animation */}
                <div className="absolute bottom-[-8px] h-[2px] bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-[light-ray_3s_ease-in-out_infinite]" style={{ transformOrigin: 'left center' }}></div>
              </div>
            </div>
            
            {/* Removed text as requested */}
            
            {/* Typewriter Animation for AI Agent Capabilities */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ModernTextTransition 
                texts={[
                  "Cloud Troubleshooting",
                  "Incident Resolution",
                  "Automating Deployments",
                  "Cost Optimization",
                  "Compliance Checks",
                  "Multi-Cloud Operations",
                  "Real-Time Monitoring",
                  "Auto-Remediation",
                  "Terraform Execution",
                  "CI/CD Management"
                ]}
              />
            </motion.div>
            
            {/* Modern Action Button */}
            <motion.div 
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <Button 
                  className="w-full md:w-auto bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] border-0 text-white font-bold rounded-xl px-12 py-7 text-lg shadow-[0_8px_30px_rgba(139,47,248,0.3)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3ABCF7]/20 to-[#8B2FF8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
                    <span>Join the Waitlist</span>
                  </div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Modern Interactive Terminal */}
            <motion.div 
              className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28ca41]"></div>
                </div>
                <div className="text-sm text-gray-400 font-mono">zapgap-terminal ~ infrastructure-scan</div>
                <div className="w-4"></div>
              </div>
              
              {/* Terminal Content */}
              <div className="bg-[#111]/90 backdrop-blur-md p-6 font-mono text-sm">
                <div className="flex items-center text-[#3ABCF7] mb-3">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>Initializing ZapGap infrastructure scanner...</span>
                </div>
                
                <div className="text-green-400 mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Connected to cloud environment</span>
                </div>
                
                <div className="text-yellow-400 mb-3 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span>Detected 3 infrastructure gaps in production</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-[#3ABCF7] mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-white font-semibold">AI model analyzing infrastructure patterns</span>
                </div>
                
                <div className="flex items-center text-[#8B2FF8] font-bold">
                  <span className="mr-3 text-purple-500">&gt;</span>
                  <span>Generating automated remediation plan...</span>
                  <span className="ml-1 animate-blink">|</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto]">Why DevOps Teams Choose ZapGap</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}>
              Revolutionary AI-powered automation that transforms cloud operations with enterprise-grade intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gauge,
                title: "Faster Incident Resolution",
                description: "AI-powered diagnostics cut resolution time by 75%",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: Cog,
                title: "Self-Service Automation", 
                description: "Empower teams with natural language workflows",
                gradient: "from-purple-500 to-pink-400"
              },
              {
                icon: Cloud,
                title: "Multi-Cloud & On-Prem Ready",
                description: "Unified operations across any infrastructure",
                gradient: "from-green-500 to-teal-400"
              },
              {
                icon: Lock,
                title: "Secure by Design",
                description: "Enterprise-grade security with zero-trust architecture",
                gradient: "from-orange-500 to-red-400"
              }
            ].map((benefit, index) => (
              <Card key={index} className="modern-card group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="mb-8 relative">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8]">{benefit.title}</span>
                  </h3>
                  <p className="text-gray-400 leading-relaxed" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Explainer */}
      <section id="platform" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto]">The ZapGap Platform</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}>
              Agent-Orchestrator-Cloud architecture that evolves with your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Context Graph",
                description: "AI-powered mapping of your entire infrastructure ecosystem with real-time dependency analysis",
                icon: Target,
                features: ["Real-time topology mapping", "Dependency analysis", "Performance correlation"]
              },
              {
                title: "ChatOps",
                description: "Natural language interface for complex operations with conversational AI that understands context",
                icon: MessageCircle,
                features: ["Natural language commands", "Context-aware responses", "Multi-platform integration"]
              },
              {
                title: "Workflow Automation",
                description: "Intelligent automation that learns from your patterns and optimizes continuously",
                icon: Cog,
                features: ["Self-learning workflows", "Pattern recognition", "Continuous optimization"]
              },
              {
                title: "Role-Based Access",
                description: "Granular permissions with enterprise-grade security and compliance automation",
                icon: Shield,
                features: ["Granular permissions", "Compliance automation", "Audit trails"]
              }
            ].map((feature, index) => (
              <Card key={index} className="modern-card group">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8]">{feature.title}</span>
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-300" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                            <div className="w-2 h-2 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-full mr-3 animate-pulse"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Highlights */}
      <section id="use-cases" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto]">Built for Every Cloud Team</span>
            </h2>
            <p className="text-xl text-gray-400" style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}>
              See how ZapGap transforms operations across different roles
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {useCases.map((useCase, index) => (
              <Button
                key={index}
                variant={activeUseCase === index ? "default" : "outline"}
                onClick={() => setActiveUseCase(index)}
                className={`${
                  activeUseCase === index
                    ? "btn-futuristic"
                    : "glass border-white/30 text-white hover:bg-white/10"
                } transition-all duration-300 text-lg px-8 py-4`}
                style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}
              >
                <useCase.icon className="w-5 h-5 mr-2" />
                {useCase.title}
              </Button>
            ))}
          </div>

          <Card className="max-w-6xl mx-auto modern-card overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${useCases[activeUseCase].gradient} rounded-xl flex items-center justify-center`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {(() => {
                        const IconComponent = useCases[activeUseCase].icon;
                        return (
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </motion.div>
                        );
                      })()}
                    </motion.div>
                    <h4 className="text-xl" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8]">Problem</span>
                    </h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{useCases[activeUseCase].problem}</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8]">ZapGap Solution</span>
                    </h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{useCases[activeUseCase].solution}</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400">Impact</span>
                    </h4>
                  </div>
                  <motion.div 
                    className="text-4xl font-black text-[#3ABCF7] glow-text-blue mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {useCases[activeUseCase].impact}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#7F5AF8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block">Cloud Infrastructure,</span>
            <br />
            <motion.span 
              className="text-white inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Simplified by AI
            </motion.span>
          </motion.h1>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            Be among the first to experience the future of cloud operations
          </p>
          
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 text-lg py-6 px-6 glass"
              required
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-futuristic w-full sm:w-auto text-lg py-6 px-8 relative overflow-hidden group">
                <span className="relative z-10">Get Early Access</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              </Button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="col-span-1 md:col-span-2">
              <motion.img 
                src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                alt="ZapGap Logo" 
                className="h-10 w-auto brightness-0 invert mb-6"
                initial={{ scale: 1.1, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              />
              <p className="text-gray-400 max-w-md leading-relaxed">
                Bridging the gap between complex infrastructure and effortless operations with next-generation AI automation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-[#3ABCF7] text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#platform" className="hover:text-[#3ABCF7] transition-colors">Platform</a></li>
                <li><a href="#pricing" className="hover:text-[#3ABCF7] transition-colors">Pricing</a></li>
                <li><a href="#features" className="hover:text-[#3ABCF7] transition-colors">Features</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-[#3ABCF7] text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#company" className="hover:text-[#3ABCF7] transition-colors">About</a></li>
                <li><a href="#legal" className="hover:text-[#3ABCF7] transition-colors">Legal</a></li>
                <li><a href="#contact" className="hover:text-[#3ABCF7] transition-colors">Contact</a></li>
              </ul>
            </div>
          </motion.div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 ZapGap. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#3ABCF7] transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3ABCF7] transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3ABCF7] transition-colors transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          className="w-16 h-16 rounded-full btn-futuristic glow-hover animate-pulse-glow"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
