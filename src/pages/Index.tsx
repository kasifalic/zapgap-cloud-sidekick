
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Cog, Cloud, Users, Target, Gauge, Lock, Github, Linkedin, Twitter, MessageCircle, Sparkles, Brain, Cpu, Network } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [email, setEmail] = useState("");

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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-dark border-b border-white/10" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                alt="ZapGap Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Platform</a>
              <a href="#features" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Features</a>
              <a href="#use-cases" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Use Cases</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Pricing</a>
              <a href="#company" className="text-gray-300 hover:text-[#3ABCF7] transition-all duration-300 font-medium">Company</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-[#3ABCF7] hover:bg-white/10 border border-white/20">
                Sign In
              </Button>
              <Button className="btn-futuristic">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particles-bg">
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
                Your AI Cloud Ops Sidekick
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
              Bridge the gap between complex infrastructure and effortless operations with next-generation AI automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-400">
              <Button size="lg" className="btn-futuristic text-xl px-12 py-6">
                <Sparkles className="w-6 h-6 mr-3" />
                Join the Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 neo-brutalism"
              >
                <Brain className="w-6 h-6 mr-3" />
                Explore AI Features
              </Button>
            </div>

            {/* Futuristic Hero Visual */}
            <div className="mt-20 relative animate-slide-up delay-600">
              <div className="modern-card p-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-8 text-[#3ABCF7]">
                  <div className="relative">
                    <Cpu className="w-16 h-16 animate-pulse-glow" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#8B2FF8] rounded-full animate-ping"></div>
                  </div>
                  <div className="text-2xl font-bold animate-shimmer bg-gradient-to-r from-[#3ABCF7] via-white to-[#8B2FF8] bg-clip-text text-transparent bg-[length:200%_100%]">
                    AI Assistant Processing...
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-[#3ABCF7] rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-[#5B7CF7] rounded-full animate-bounce delay-100"></div>
                    <div className="w-4 h-4 bg-[#8B2FF8] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
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
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCases[activeUseCase].gradient} rounded-xl flex items-center justify-center`}>
                      <useCases[activeUseCase].icon className="w-6 h-6 text-white" />
                    </div>
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
                  <div className="text-4xl font-black gradient-text glow-intense">
                    {useCases[activeUseCase].impact}
                  </div>
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
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8 text-shadow-glow">
            Join ZapGap Beta
          </h2>
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
            <Button 
              type="submit"
              className="btn-futuristic text-lg px-10 py-6"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                alt="ZapGap Logo" 
                className="h-10 w-auto mb-6 brightness-0 invert"
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
          </div>
          
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
