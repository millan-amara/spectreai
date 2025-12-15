import { CheckCircle, FileText, Languages, Tag, Image, Database, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Tag className="w-8 h-8" />,
      title: 'Data Annotation',
      description: 'Precise labeling and tagging for machine learning training data',
      features: [
        'Image & Video Annotation',
        'Text Classification',
        'Bounding Box & Polygon',
        'Semantic Segmentation'
      ]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Audio Transcription',
      description: 'Accurate conversion of audio to text with timestamping',
      features: [
        'Multiple Speaker Identification',
        'Time-coded Transcription',
        'Industry-specific Terminology',
        'Quality Assurance Checks'
      ]
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: 'Translation Services',
      description: 'Professional translation across 50+ languages',
      features: [
        'Document Translation',
        'Website Localization',
        'Technical Translation',
        'Certified Translations'
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Text Transcription',
      description: 'Convert handwritten or printed text to digital format',
      features: [
        'Handwritten Text Recognition',
        'Document Digitization',
        'Data Extraction',
        'Format Preservation'
      ]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Image Processing',
      description: 'Image enhancement and data extraction services',
      features: [
        'OCR Processing',
        'Image Enhancement',
        'Data Extraction',
        'Quality Control'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Processing',
      description: 'Bulk data processing and cleaning services',
      features: [
        'Data Cleaning',
        'Data Entry',
        'Data Validation',
        'Format Conversion'
      ]
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Comprehensive
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of data services designed to meet the needs of modern businesses. 
              From AI training data to document processing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the pricing model that works best for your project requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay-as-you-go</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $0.10<span className="text-lg text-gray-600">/unit</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>No minimum commitment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Perfect for small projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Flexible scaling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Plan</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $999<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 10,000 units</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Dedicated manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                Custom
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited volume</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom workflows</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>24/7 premium support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us for a personalized quote tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;