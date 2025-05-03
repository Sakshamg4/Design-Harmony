import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-6">
      <div className="flex items-center gap-2 text-white/80">
        <Link to="/" className="hover:text-white transition-colors">Homepage</Link>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-white">Brainstorming tool</span>
      </div>
    </div>
  )
}

export default Breadcrumb