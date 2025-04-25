import React from 'react'

const Contact = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            Get in Touch
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button className="w-full py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact