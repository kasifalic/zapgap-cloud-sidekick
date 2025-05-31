
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Cog, Cloud, Users, Target, Gauge, Lock, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

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
      impact: "75% faster incident resolution"
    },
    {
      title: "SRE Teams",
      problem: "Manual monitoring and reactive responses to system failures",
      solution: "Proactive monitoring with intelligent alerts and self-healing workflows",
      impact: "99.9% uptime guarantee"
    },
    {
      title: "IT Admins",
      problem: "Complex configuration management across hybrid cloud environments",
      solution: "Unified control plane with natural language commands",
      impact: "50% reduction in admin overhead"
    },
    {
      title: "CTOs",
      problem: "Lack of visibility into infrastructure costs and performance",
      solution: "Real-time dashboards with AI-powered optimization recommendations",
      impact: "30% cost savings on average"
    }
  ];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    // Add toast notification here
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                alt="ZapGap Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-700 hover:text-[#3ABCF7] transition-colors">Platform</a>
              <a href="#features" className="text-gray-700 hover:text-[#3ABCF7] transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-700 hover:text-[#3ABCF7] transition-colors">Use Cases</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#3ABCF7] transition-colors">Pricing</a>
              <a href="#company" className="text-gray-700 hover:text-[#3ABCF7] transition-colors">Company</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-[#3ABCF7]">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] text-white hover:from-[#2AA8E3] hover:to-[#7B1FE8] transition-all duration-300 transform hover:scale-105">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              ZapGap – Your AI Cloud Ops Sidekick
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-300">
              Bridge the gap between complex infrastructure and effortless operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="bg-white text-[#8B2FF8] hover:bg-gray-100 text-lg px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#8B2FF8] text-lg px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Hero visual placeholder */}
            <div className="mt-16 relative">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
                <div className="flex items-center justify-center space-x-4 text-white">
                  <Zap className="w-8 h-8 animate-pulse" />
                  <span className="text-lg font-medium">AI Assistant Solving Cloud Issues...</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">
              Why DevOps Teams Choose ZapGap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your cloud operations with AI-powered automation and intelligent insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gauge,
                title: "Faster Incident Resolution",
                description: "AI-powered diagnostics cut resolution time by 75%"
              },
              {
                icon: Cog,
                title: "Self-Service Automation",
                description: "Empower teams with natural language workflows"
              },
              {
                icon: Cloud,
                title: "Multi-Cloud & On-Prem Ready",
                description: "Unified operations across any infrastructure"
              },
              {
                icon: Lock,
                title: "Secure by Design",
                description: "Enterprise-grade security with zero-trust architecture"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white hover:bg-gradient-to-br hover:from-[#3ABCF7]/5 hover:to-[#8B2FF8]/5">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Explainer */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">
              The ZapGap Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agent-Orchestrator-Cloud architecture that adapts to your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Context Graph",
                description: "AI-powered mapping of your entire infrastructure ecosystem",
                icon: Target
              },
              {
                title: "ChatOps",
                description: "Natural language interface for complex operations",
                icon: MessageCircle
              },
              {
                title: "Workflow Automation",
                description: "Intelligent automation that learns from your patterns",
                icon: Cog
              },
              {
                title: "Role-Based Access",
                description: "Granular permissions with enterprise-grade security",
                icon: Shield
              }
            ].map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3ABCF7]/10 to-[#8B2FF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative p-8">
                  <feature.icon className="w-12 h-12 text-[#3ABCF7] mb-4 group-hover:text-[#8B2FF8] transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Highlights */}
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#111111] mb-4">
              Built for Every Cloud Team
            </h2>
            <p className="text-xl text-gray-600">
              See how ZapGap transforms operations across different roles
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {useCases.map((useCase, index) => (
              <Button
                key={index}
                variant={activeUseCase === index ? "default" : "outline"}
                onClick={() => setActiveUseCase(index)}
                className={`${
                  activeUseCase === index
                    ? "bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] text-white"
                    : "border-[#3ABCF7] text-[#3ABCF7] hover:bg-[#3ABCF7] hover:text-white"
                } transition-all duration-300`}
              >
                {useCase.title}
              </Button>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-3">Problem</h4>
                  <p className="text-gray-600">{useCases[activeUseCase].problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-3">ZapGap Solution</h4>
                  <p className="text-gray-600">{useCases[activeUseCase].solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111111] mb-3">Impact</h4>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] bg-clip-text text-transparent">
                    {useCases[activeUseCase].impact}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join ZapGap Beta
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be among the first to experience the future of cloud operations
          </p>
          
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 text-[#111111] placeholder:text-gray-500"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-[#8B2FF8] hover:bg-gray-100 font-semibold px-8 transform hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/lovable-uploads/145c593f-1a1b-45a8-914e-d151ce53c695.png" 
                alt="ZapGap Logo" 
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 max-w-md">
                Bridging the gap between complex infrastructure and effortless operations with AI-powered automation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#3ABCF7]">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#platform" className="hover:text-[#3ABCF7] transition-colors">Platform</a></li>
                <li><a href="#pricing" className="hover:text-[#3ABCF7] transition-colors">Pricing</a></li>
                <li><a href="#features" className="hover:text-[#3ABCF7] transition-colors">Features</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#3ABCF7]">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#company" className="hover:text-[#3ABCF7] transition-colors">About</a></li>
                <li><a href="#legal" className="hover:text-[#3ABCF7] transition-colors">Legal</a></li>
                <li><a href="#contact" className="hover:text-[#3ABCF7] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 ZapGap. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#3ABCF7] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3ABCF7] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3ABCF7] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8] shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
