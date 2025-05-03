import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('Generic flowchart')
  const [expandedTemplate, setExpandedTemplate] = useState(null)

  const templates = [
    {
      name: 'Generic flowchart',
      description: 'Visualize workflows and decisions effortlessly with Design Harmony\'s customizable Flowchart Template. Includes essential symbols to adapt to any process or system.',
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/Generic-flowchart-1.png'
    },
    {
      name: 'User Journey Map',
      description: 'Easily map out customer experiences with Design Harmony\'s customizable User Journey Map Template. Highlight pain points, track touchpoints, and uncover opportunities for improvement.',
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/User-Journey-Map-2.png'
    },
    {
      name: 'Product roadmap',
      description: "Plan your product's future with Design Harmony's customizable Product Roadmap Template. Clearly outline priorities, track progress, and keep your team aligned on shared goals.",
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/Product-roadmap-1.png'
    },
    {
      name: 'Retrospective',
      description: "Reflect and refine with Design Harmony's Start, Stop, Continue Retrospective Template. Capture insights, improve processes, and help your team grow—all with a fully customizable design.",
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/Retrospective-1.png'
    },
    {
      name: 'SWOT Analysis',
      description: "Evaluate your business strategy with Design Harmony's customizable SWOT Analysis Template. Pinpoint strengths, weaknesses, opportunities, and threats with ease for better decision-making.",
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/SWOT-Analysis.png'
    },
    {
      name: 'Impact vs Effort Matrix',
      description: "Prioritize projects efficiently with Design Harmony's customizable Impact Effort Matrix Template. Assess and allocate resources strategically to drive maximum impact and success.",
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/Impact-vs-Effort-Matrix.png'
    },
    {
      name: 'HEART framework',
      description: "Measure and improve user experience with Design Harmony's HEART Framework Template. Track Happiness, Engagement, Adoption, Retention, and Task success metrics for data-driven UX decisions.",
      image: 'https://www.visily.ai/wp-content/uploads/2025/01/HEART-framework.png'
    }
  ]

  const handleTemplateClick = (templateName) => {
    setSelectedTemplate(templateName)
    setExpandedTemplate(expandedTemplate === templateName ? null : templateName)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kickstart Your Ideas with Brainstorming Templates
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            Brainstorming doesn't have to be hard. With Design Harmony templates, you can dive right in—no fuss,
            <br />
            no blank screens, just easy tools to help your ideas flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Template List */}
          <div className="md:col-span-1">
            {templates.map((template) => (
              <div key={template.name} className="border-b border-white/10 group">
                <button
                  className={`w-full text-left py-3 transition-all duration-300 flex items-center justify-between ${
                    selectedTemplate === template.name
                      ? 'text-white font-medium'
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => handleTemplateClick(template.name)}
                >
                  <span>{template.name}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedTemplate === template.name ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedTemplate === template.name ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-white/60 pb-3 px-4 leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Template Preview */}
          <div className="md:col-span-3 bg-white/5 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300">
            {templates.find(t => t.name === selectedTemplate) && (
              <>
                <img
                  src={templates.find(t => t.name === selectedTemplate).image}
                  alt={selectedTemplate}
                  className="w-full rounded-lg mb-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Use this template
                  </button>
                  <Link 
                    to="/templates"
                    className="text-purple-300 hover:text-white transition-colors hover:underline"
                  >
                    Explore Brainstorming Templates
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates