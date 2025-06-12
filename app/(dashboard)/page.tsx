import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Brain, Settings, Users, Zap, Shield } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border border-blue-200">
                  <Bot className="w-4 h-4 mr-2" />
                  AI Agent Platform
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Build Intelligent
                <span className="block gradient-text">AI Agents</span>
              </h1>
              <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Create, deploy, and manage powerful AI agents for your organization. 
                Transform customer support, automate workflows, and scale your business 
                with intelligent conversation AI.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:max-w-lg sm:mx-auto lg:mx-0">
                <Button
                  size="lg"
                  className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Building Agents
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-primary/30 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  View Live Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-teal-500" />
                  Enterprise Security
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-1 text-blue-500" />
                  Real-time Processing
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="card-hover">
                <Terminal />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Everything You Need to Build
              <span className="gradient-text"> Intelligent Agents</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful tools and features to create, customize, and deploy AI agents 
              that understand your business and delight your customers.
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-bg text-white mb-6">
                <Bot className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Conversation AI
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Advanced natural language processing with context awareness, 
                  emotion detection, and multi-turn conversation management.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-bg text-white mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Knowledge Management
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Upload documents, FAQs, and data sources to train your agents 
                  with your organization's specific knowledge and expertise.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-bg text-white mb-6">
                <Settings className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Customizable Workflows
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Design complex conversation flows, integrate with your tools, 
                  and customize agent behavior to match your brand voice.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-bg text-white mb-6">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Team Collaboration
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Multi-tenant architecture with role-based access control, 
                  team management, and collaborative agent development.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-bg text-white mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Real-time Analytics
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Monitor agent performance, track conversation metrics, and 
                  optimize your AI agents with detailed analytics and insights.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 group card-hover bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-bg text-white mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise Security
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Bank-level security with encryption, compliance features, 
                  and secure data processing for sensitive business information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Ready to Transform Your
                <span className="gradient-text"> Customer Experience?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands of organizations already using Isla Agent Platform 
                to automate customer support, streamline operations, and scale 
                their business with intelligent AI agents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-200 hover:border-primary/30 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 card-hover">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white mb-6">
                    <Bot className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Start Building Today
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create your first AI agent in minutes with our intuitive 
                    platform and comprehensive documentation.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                      No technical expertise required
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      Deploy in under 10 minutes
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mr-3"></div>
                      24/7 customer support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
