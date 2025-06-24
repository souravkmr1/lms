import React, { useState } from 'react';
import { 
  BookOpen, 
  Trophy, 
  FileText, 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Download,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Award,
  ChevronDown,
  User,
  Play,
  Code
} from 'lucide-react';

function App() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Introduction to Python: getting Started",
      lessons: 13,
      completed: false
    },
    {
      id: 2,
      title: "Python Conditional Statement and Loops",
      lessons: 13,
      completed: false
    }
  ];

  const resources = [
    {
      icon: Target,
      title: "Skill Test",
      subtitle: "Test Your Python Skills Now",
      description: "Assess your knowledge with our comprehensive Python skill assessment",
      cta: "Take Free Skill Test",
      gradient: "from-blue-500 to-indigo-600",
      stats: "15 min • 25 Questions",
      badge: "Most Popular"
    },
    {
      icon: FileText,
      title: "Interview Ebook",
      subtitle: "Download 50+ Python Interview Questions",
      description: "Get the most asked Python interview questions with detailed answers",
      cta: "Get the Free Ebook",
      gradient: "from-teal-500 to-cyan-600",
      stats: "120 Pages • PDF Format",
      badge: "New"
    },
    {
      icon: Code,
      title: "DSA Practice",
      subtitle: "DSA Practice for Interviews",
      description: "Practice essential DSA problems, build your logic, and strengthen your foundation in programming — one problem at a time.",
      cta: "Solve Challenges Now",
      gradient: "from-purple-500 to-pink-600",
      stats: "Daily Practice • Beginner to Advanced",
      badge: "Trending"
    }
  ];

  const discountSteps = [
    {
      icon: BookOpen,
      title: "Complete the Free Course",
      subtitle: "Complete all lessons",
      discount: "10%"
    },
    {
      icon: Video,
      title: "Upload Video Testimonial",
      subtitle: "Post Free Course Review",
      discount: "10%"
    },
    {
      icon: Users,
      title: "Refer Someone",
      subtitle: "Get 10% discount",
      discount: "10%"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Python Programming Course For Beginners</h1>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Subscription Expiry: Wed, May 13, 2037
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Overall Progress (0%)</div>
              <div className="text-sm text-gray-500">Completed 0 out of 26 Lessons</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex border-b">
                <button className="flex items-center px-6 py-3 bg-blue-50 text-blue-600 border-b-2 border-blue-600 font-medium">
                  <Play className="w-4 h-4 mr-2" />
                  Video Course
                </button>
                <button className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Certificate
                </button>
              </div>

              {/* Course Modules */}
              <div className="p-6 space-y-4">
                {modules.map((module) => (
                  <div key={module.id} className="border rounded-lg">
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-gray-600">{module.id}</span>
                        </div>
                        <span className="font-medium text-gray-900">Module {module.id}. {module.title}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-4">Lessons ({module.lessons})</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedModule === module.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    {expandedModule === module.id && (
                      <div className="border-t bg-gray-50 p-4">
                        <div className="text-sm text-gray-600">
                          Module content will be displayed here...
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Unlock More Resources Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">Unlock More Free Resources</h2>
                    <p className="text-blue-100 mt-1">Accelerate your learning journey with our complete ecosystem</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Skill Test
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Interview Ebooks
                  </div>
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    DSA Practice
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {resources.map((resource, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -top-2 right-4 z-10">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {resource.badge}
                        </span>
                      </div>
                      <div className={`relative bg-gradient-to-br ${resource.gradient} p-6 rounded-xl text-white h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                        <div className="flex items-center justify-between mb-4">
                          <resource.icon className="w-8 h-8" />
                          <div className="text-xs bg-white/20 px-2 py-1 rounded">
                            {resource.stats}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                        <p className="text-sm font-medium text-white/90 mb-3">{resource.subtitle}</p>
                        <p className="text-xs text-white/75 mb-6 leading-relaxed">{resource.description}</p>
                        <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                          {resource.cta}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Stories */}
                <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Success Stories</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">15K+</div>
                      <div className="text-sm text-gray-600">Skill Tests Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50K+</div>
                      <div className="text-sm text-gray-600">Ebooks Downloaded</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">8K+</div>
                      <div className="text-sm text-gray-600">DSA Problems Solved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Existing Masterclass Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Want to get a Test of our live Batch??</h2>
                <p className="text-lg text-gray-700">Join Our Free Master class!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-6 text-white overflow-hidden">
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    Master Class FREE
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Become a Job-Ready AI & ML Engineer Backed by Microsoft Azure</h3>
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      23rd May, 2025 at 06:30 PM IST
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-2" />
                    BY SHAILENDRA CHAUHAN
                    <br />
                    <span className="text-xs text-gray-400">Microsoft MVP, Founder & CEO-ScholarHat</span>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl p-6 text-white overflow-hidden">
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    Master Class FREE
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">.NET Solution Architect Certification</h3>
                    <div className="flex items-center text-sm text-gray-300 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      30th May 2025, 8:30 PM IST
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-2" />
                    BY SHAILENDRA CHAUHAN
                    <br />
                    <span className="text-xs text-gray-400">Microsoft MVP, Founder & CEO-ScholarHat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Discount Steps */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">3 Ways to Get 30% Discount on Live Training</h3>
              <div className="space-y-4">
                {discountSteps.map((step, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <step.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-600">{step.subtitle}</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{step.discount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Resume Learning</span>
                  <Play className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="font-medium">Take Quick Test</span>
                  <Target className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="font-medium">Download Resources</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;