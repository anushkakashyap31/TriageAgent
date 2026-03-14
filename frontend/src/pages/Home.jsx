/**
 * Home Page
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BarChart3, Zap, Shield, Brain, Clock } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Classification',
      description: 'Automatically classify messages by urgency and intent using advanced AI',
    },
    {
      icon: Zap,
      title: 'Named Entity Recognition',
      description: 'Extract critical information like names, dates, amounts, and IDs',
    },
    {
      icon: MessageSquare,
      title: 'Smart Response Generation',
      description: 'Generate contextually accurate draft responses instantly',
    },
    {
      icon: Clock,
      title: '10-20x Faster',
      description: 'Reduce message processing time from minutes to seconds',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track performance metrics and gain actionable insights',
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Enterprise-grade reliability with comprehensive error handling',
    },
  ];
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          AI-Powered Triage Agent
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Automate your non-profit communication triage with intelligent AI classification,
          entity extraction, and response generation
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/triage">
            <Button variant="primary" size="lg" icon={MessageSquare}>
              Start Triaging
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" size="lg" icon={BarChart3}>
              View Dashboard
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Features Grid */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Powerful Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hoverable>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-blue-50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">3 sec</p>
            <p className="text-gray-700">Average Processing Time</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
            <p className="text-gray-700">Classification Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">10-20x</p>
            <p className="text-gray-700">Faster Than Manual</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">
          Start triaging messages with AI in seconds
        </p>
        <Link to="/triage">
          <Button variant="secondary" size="lg">
            Try It Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;