import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Music Player App',
    description: 'A simple and sleek app to enjoy your favorite songs. Experience an intuitive interface and smooth music playback, designed for all music lovers.',
    image: 'https://images.unsplash.com/photo-1615576446730-6d3000104d40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Typescript', 'Kitchn'],
    github: 'https://github.com/GabinHLY/Music-Player',
    
  },
  {
    title: 'SportAddict Website',
    description: "Your go-to place for all things sports! Explore a wide range of gear, clothing, and accessories to boost your performance, whether you're a beginner or a pro.",
    image: 'https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Nuxt', 'Directus'],
    //live: 'https://example.com',
  },
  {
    title: 'Gym App',
    description: 'A fitness app that helps you stay on track with your workout routine. Get personalized training plans, track your progress, and reach your fitness goals faster.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: [],
    
  },

  // {
  //   title: 'Gym App',
  //   description: 'A fitness app that helps you stay on track with your workout routine. Get personalized training plans, track your progress, and reach your fitness goals faster.',
  //   image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   tech: [],
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  // },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-xl bg-gray-900"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}