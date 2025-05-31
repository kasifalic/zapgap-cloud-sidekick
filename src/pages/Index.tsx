import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Cog, Cloud, Users, Target, Gauge, Lock, Github, Linkedin, Twitter, MessageCircle, Sparkles, Brain, Cpu, Network, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "glass-dark border-b border-white/10" 
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img 
                src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                alt="ZapGap Logo" 
                className="h-10 w-auto brightness-0 invert"
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Platform</a>
              <a href="#features" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Features</a>
              <a href="#use-cases" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Use Cases</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Pricing</a>
              <a href="#company" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Company</a>
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="text-gray-300 hover:text-[#3ABCF7] hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                  Sign In
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button className="btn-futuristic relative overflow-hidden group">
                  <span className="relative z-10">Join the Waitlist</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg z-10">
        <div className="absolute inset-0 gradient-primary opacity-20"></div>
        
        {/* Ultra-modern floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3ABCF7]/20 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B2FF8]/30 rounded-full blur-3xl animate-float-gentle delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5B7CF7]/20 rounded-full blur-2xl animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="animate-slide-up">
              <h1 className="text-6xl md:text-8xl font-display font-black mb-8 gradient-text text-shadow-glow">
                ZapGap
              </h1>
              <div className="text-3xl md:text-5xl font-bold text-white mb-6">
                Zap the Gap of Your Infrastructure
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
              Bridge the gap between complex infrastructure and effortless operations with next-generation AI automation.
            </p>
            
            {/* Modern 3D Action Buttons */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3ABCF7] to-[#5B7CF7] rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <Button 
                  className="w-full md:w-auto bg-gradient-to-r from-[#3ABCF7] to-[#5B7CF7] border-0 text-white font-bold rounded-xl px-10 py-7 text-lg shadow-[0_8px_30px_rgb(58,188,247,0.3)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3ABCF7]/20 to-[#5B7CF7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
                    <span>Get Early Access</span>
                  </div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#111]/50 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <Button 
                  variant="outline"
                  className="w-full md:w-auto bg-[#111]/80 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl px-10 py-7 text-lg relative overflow-hidden group-hover:border-white/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3ABCF7]/5 to-[#8B2FF8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Brain className="w-5 h-5 mr-3" />
                    <span>View Demo</span>
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
            <h2 className="text-5xl font-display font-black text-white mb-6 gradient-text">
              Why DevOps Teams Choose ZapGap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-5xl font-display font-black text-white mb-6 gradient-text">
              The ZapGap Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-full mr-3"></div>
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
            <h2 className="text-5xl font-display font-black text-white mb-6 gradient-text">
              Built for Every Cloud Team
            </h2>
            <p className="text-xl text-gray-400">
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
                    <h4 className="text-xl font-bold text-white">Problem</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{useCases[activeUseCase].problem}</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">ZapGap Solution</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{useCases[activeUseCase].solution}</p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Impact</h4>
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
