import { Zap, Shield, Cog, Cloud, Database, Network, Eye, Target, Cpu, Server, Lock, Workflow, GitBranch, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PlatformSection = () => {
  return (
    <section id="platform" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-6 relative" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto] relative">AI-Powered Cloud Platform
              {/* Light ray animation */}
              <div className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-[light-ray_3s_ease-in-out_infinite]" style={{ transformOrigin: 'left center' }}></div>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '0.01em' }}>
            Bringing true AI-driven intelligence into your cloud operations in a safe, scalable way
          </p>
        </div>

        {/* Platform Overview */}
        <div className="mb-20">
          <p className="text-gray-300 mb-10 leading-relaxed text-lg max-w-5xl mx-auto" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            ZapGap's platform is built to bring true AI-driven intelligence into your cloud operations in a safe,
            scalable way. Here we pull back the curtain on how ZapGap works under the hood to deliver a seamless
            assistant experience:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Agent-Based Architecture",
                description: "Deploy lightweight ZapGap Agents within your environment (cloud or on-premises). These agents act as secure delegates that execute actions close to your infrastructure, minimizing latency and keeping sensitive operations under your control.",
                icon: Server,
              },
              {
                title: "Central Orchestrator (AI Brain)",
                description: "At the core is ZapGap's intelligent orchestration engine powered by large language models and workflow logic. When you issue a request, the orchestrator interprets your intent, consults context, and safely executes the necessary steps via the agents.",
                icon: Cpu,
              },
              {
                title: "Context Graph & Knowledge Base",
                description: "ZapGap maintains an up-to-date understanding of your infrastructure and policies. It integrates with your configuration sources to build context – so it knows what 'web server cluster' means in your AWS account.",
                icon: Database,
              },
              {
                title: "Multi-Cloud, Hybrid by Design",
                description: "While ZapGap currently natively supports AWS, its design is cloud-agnostic. The platform uses a modular connector system – meaning Azure, GCP, Kubernetes clusters, or even on-prem servers can be plugged in seamlessly.",
                icon: Cloud,
              },
              {
                title: "Enterprise-Grade Security",
                description: "Security is woven throughout ZapGap's platform. All communication between the central AI service and on-site agents is encrypted. You can enforce role-based access control and approval workflows on sensitive actions.",
                icon: Shield,
              },
              {
                title: "Observability & Feedback",
                description: "The ZapGap platform provides full visibility into what the assistant is doing. A web dashboard and chat transcripts let you watch each step executed. It continually improves its performance by analyzing outcomes.",
                icon: Eye,
              },
            ].map((feature, index) => (
              <Card key={index} className="modern-card group">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    <div>
                      <h3 className="text-xl mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8]">{feature.title}</span>
                      </h3>
                      <p className="text-gray-400 leading-relaxed" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Platform Components */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 relative" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '0.02em' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-text-shimmer bg-[length:200%_auto] relative">Key Platform Components
                {/* Light ray animation */}
                <div className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#3ABCF7] via-[#5B7CF7] to-[#8B2FF8] animate-[light-ray_3s_ease-in-out_infinite]" style={{ transformOrigin: 'left center' }}></div>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "ZapGap Orchestrator",
                description: "The cloud-based AI engine that processes user requests, applies reasoning (using LLMs), and coordinates actions via agents. It's the 'brain' that turns a simple prompt into concrete results.",
                icon: Cpu,
                features: ["Natural language processing", "Multi-step reasoning", "Action sequencing"]
              },
              {
                title: "ZapGap Agents",
                description: "Deployable in your AWS account (and other environments in future releases), these agents securely interface with cloud APIs, Kubernetes clusters, and other services. They execute tasks on behalf of the orchestrator.",
                icon: Server,
                features: ["Secure execution", "Low-latency operations", "Environment-specific actions"]
              },
              {
                title: "Integration Connectors",
                description: "A library of connectors allows ZapGap to talk to various systems out-of-the-box – AWS services, DevOps tools, Chat platforms, and more. If it has an API, ZapGap can likely integrate with it.",
                icon: GitBranch,
                features: ["AWS service integrations", "DevOps tool connectors", "Chat platform support"]
              },
              {
                title: "Policy & Security Engine",
                description: "Administrators can define guardrails such as usage policies, approval requirements, or blacklisted actions. The platform enforces these rules automatically.",
                icon: Lock,
                features: ["Role-based access control", "Approval workflows", "Audit logging"]
              },
              {
                title: "Scalability & Resilience",
                description: "ZapGap's platform is cloud-native and scales as you grow. The agent mesh can handle multiple concurrent requests and heavy workloads, spinning up more instances as needed.",
                icon: Scale,
                features: ["Auto-scaling architecture", "High availability", "Fault tolerance"]
              }
            ].map((feature, index) => (
              <Card key={index} className="modern-card group">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3ABCF7] to-[#8B2FF8] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '0.01em' }}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ABCF7] to-[#8B2FF8]">{feature.title}</span>
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center justify-center text-gray-300" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
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
      </div>
    </section>
  );
};

export default PlatformSection;
