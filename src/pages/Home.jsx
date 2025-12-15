import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart, Users, Shield, Clock, Zap, Globe, Database, Target, Lock, TrendingUp, Award, Headphones, FileText, Languages } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data Annotation',
      description: 'High-quality labeling for machine learning models with 99.9% accuracy guarantee. We handle image, video, text, and audio annotation for AI/ML training.',
      details: ['Bounding Box & Polygon', 'Semantic Segmentation', 'Object Detection', 'Text Classification']
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: 'Audio Transcription',
      description: 'Convert audio and video files to text with industry-leading accuracy. Perfect for interviews, meetings, podcasts, and multimedia content.',
      details: ['Multi-speaker Detection', 'Timestamping', 'Speaker Identification', 'Format Preservation']
    },
    {
      icon: <Languages className="w-10 h-10" />,
      title: 'Translation Services',
      description: 'Professional translation across 50+ languages by native speakers. Certified translations for legal, medical, and technical documents.',
      details: ['Document Translation', 'Website Localization', 'Technical Manuals', 'Legal Documents']
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Text Transcription',
      description: 'Digitize handwritten or printed documents with OCR technology. Perfect for archives, medical records, and historical documents.',
      details: ['Handwriting Recognition', 'Document Scanning', 'Data Extraction', 'Format Conversion']
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6" /> },
    { value: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { value: '50+', label: 'Languages Supported', icon: <Globe className="w-6 h-6" /> },
    { value: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { value: '48h', label: 'Avg. Turnaround', icon: <Zap className="w-6 h-6" /> },
    { value: '100%', label: 'Data Security', icon: <Lock className="w-6 h-6" /> }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Our team consists of industry experts with 5+ years experience in data processing and AI/ML projects.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Scalable Solutions',
      description: 'From small projects to enterprise-level volumes, we scale with your needs without compromising quality.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Quality Assurance',
      description: 'Multi-tier quality checks ensure every project meets our strict standards before delivery.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Secure & Confidential',
      description: 'Enterprise-grade security with GDPR compliance and strict NDAs for all projects.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const industries = [
    'Healthcare & Medical Research',
    'E-commerce & Retail',
    'Autonomous Vehicles',
    'Finance & Banking',
    'Legal Services',
    'Media & Entertainment',
    'Education & Research',
    'Manufacturing & Logistics'
  ];

  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-6">
              <span className="text-sm font-medium text-purple-700">Trusted by 200+ Companies Worldwide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent block mt-2">
                Data Into Value
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              High-quality annotation, transcription, and translation services to power your AI/ML projects 
              and business operations. Scale your data operations with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-lg"
              >
                Get Started
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-800 px-10 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center text-lg"
              >
                <PlayCircle className="mr-3" />
                What We Do (2 min)
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
              <div className="text-gray-400 font-semibold">Trusted by:</div>
              <div className="text-xl font-bold text-gray-300">TechCorp</div>
              <div className="text-xl font-bold text-gray-300">DataFlow</div>
              <div className="text-xl font-bold text-gray-300">AI Labs</div>
              <div className="text-xl font-bold text-gray-300">Global Inc</div>
              <div className="text-xl font-bold text-gray-300">Nexus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 text-purple-600 mb-4 group-hover:shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> Data Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end data services designed to accelerate your AI initiatives and streamline business operations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-center items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-purple-600 font-semibold mt-6 hover:text-purple-800"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Industry Leaders Choose
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> Spectre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver unmatched quality and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-6 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <div className="text-lg font-semibold text-gray-800">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From consultation to delivery, we make data processing effortless
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free project assessment' },
              { step: '02', title: 'Planning', desc: 'Custom workflow design' },
              { step: '03', title: 'Execution', desc: 'Quality-focused processing' },
              { step: '04', title: 'Delivery', desc: 'Secure data handover' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold mb-4 opacity-80">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about working with Spectre
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Spectre's annotation services helped us train our AI model 3x faster. Their accuracy and attention to detail are unparalleled.",
                author: "Sarah Chen",
                role: "AI Research Director, TechCorp",
                rating: 5
              },
              {
                quote: "We've processed over 500,000 audio files with Spectre. Their turnaround time and quality consistency are remarkable.",
                author: "Michael Rodriguez",
                role: "Operations Manager, MediaFlow",
                rating: 5
              },
              {
                quote: "The translation quality for our global expansion was exceptional. Spectre understood our industry-specific terminology perfectly.",
                author: "Emma Wilson",
                role: "Globalization Lead, RetailPro",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-8">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Accelerate Your Data Projects?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Join thousands of companies that trust Spectre for their critical data operations. 
            Get started with a free pilot project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-purple-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Free Pilot Project
              <ArrowRight className="ml-3 inline-block group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/how-it-works"
              className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-200">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add the missing icon component
const PlayCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

// Add the missing icon component
const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Home;