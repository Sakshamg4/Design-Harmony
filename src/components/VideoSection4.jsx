import React from 'react';
import bgImage from '../assets/visual-studio-code.webp';
import heroVideo from '../assets/hero-bubb.mp4';

const VideoSection4 = () => {
    return (
        <section className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Engage and connect with video
                        </h2>
                        <p className="text-lg text-gray-600">
                            Easily collaborate by adding emojis, comments, tasks and CTAs to your video
                            message. Empower remote teams to communicate better across timezones
                            using transcripts and captions in 50+ languages.
                        </p>
                        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                            Connect over video →
                        </button>
                    </div>

                    {/* Right Side */}
                    <div
                        style={{ backgroundImage: `url(${bgImage})` }}
                        className="relative bg-cover bg-center h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
                    >
                        <div className="p-4 rounded-lg absolute bottom-0 left-0 right-0">
                            <video
                                className="w-[130px] h-auto rounded-full shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={heroVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Code overlay element */}
                            <div className="absolute bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full">
                                Great point!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection4;