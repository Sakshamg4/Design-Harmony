import React from 'react';

const cardData = [
  {
    title: 'Sales',
    description: 'Personalize your pitch with video outreach to close more deals.',
    bgColor: 'bg-green-50',
    image: 'https://cdn.sanity.io/images/pvn35iyy/production/1fbc589ca61c81668ab593338e1574803b244594-582x480.jpg?auto=format&dpr=1'
  },
  {
    title: 'Engineering',
    description: 'Add visual context to your code to accelerate your sprints.',
    bgColor: 'bg-pink-50',
    image: 'https://cdn.sanity.io/images/pvn35iyy/production/0f64f6e8166dba475a323d474d9760efc9fcd093-580x480.jpg?auto=format&dpr=1'
  },
  {
    title: 'Customer support',
    description: 'Troubleshoot over video to reach resolutions faster.',
    bgColor: 'bg-blue-50',
    image: 'https://cdn.sanity.io/images/pvn35iyy/production/7398089afbd2eb07a0a9ae57683cc6b1579b2b65-580x480.jpg?auto=format&dpr=1'
  },
  {
    title: 'Design',
    description: 'Share ideas and provide feedback over video to enhance designs.',
    bgColor: 'bg-indigo-50',
    image: 'https://cdn.sanity.io/images/pvn35iyy/production/9351d769309a81c96600ccca75914e94ac6a9c91-580x480.jpg?auto=format&dpr=1'
  }
];

const VideoCards = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Video messaging for all use cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className={`${card.bgColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="aspect-w-4 aspect-h-3 mb-6">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCards;