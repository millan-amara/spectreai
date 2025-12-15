import { ClipboardCheck, Upload, Users, CheckCircle, Shield, Clock, Award, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Consultation',
      description: 'We discuss your project requirements and objectives'
    },
    {
      number: '02',
      icon: <Upload className="w-8 h-8" />,
      title: 'Data Submission',
      description: 'You upload your data through our secure portal'
    },
    {
      number: '03',
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Processing',
      description: 'Our team processes your data with precision'
    },
    {
      number: '04',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Multiple rounds of review and validation'
    },
    {
      number: '05',
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Delivery',
      description: 'Receive your processed data in desired format'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Confidentiality',
      description: 'Enterprise-grade security with GDPR compliance'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Fast Turnaround',
      description: 'Standard delivery within 24-48 hours'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Guarantee',
      description: '99% accuracy rate with free revisions'
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {' '}It Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process designed to deliver exceptional results for your data service needs
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="text-purple-600 mr-4">{step.icon}</div>
                        <div>
                          <div className="text-sm font-semibold text-purple-600 mb-1">Step {step.number}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Circle on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <span className="font-bold text-gray-900">{step.number}</span>
                  </div>

                  {/* Empty div for spacing */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Spectre</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering excellence in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-purple-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'What types of files do you accept?',
                a: 'We accept all common file formats including PDF, DOC, TXT, MP3, MP4, WAV, JPG, PNG, and more. For large datasets, we provide secure FTP access.'
              },
              {
                q: 'How do you ensure data security?',
                a: 'We use enterprise-grade encryption, secure data transfer protocols, and strict access controls. All team members sign comprehensive NDAs.'
              },
              {
                q: 'What is your turnaround time?',
                a: 'Standard turnaround is 24-48 hours. Express services are available for urgent projects. Exact timing depends on project complexity and volume.'
              },
              {
                q: 'Do you offer volume discounts?',
                a: 'Yes, we offer tiered pricing and volume discounts for large projects. Contact us for a custom quote based on your specific needs.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us today to discuss your project requirements
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;