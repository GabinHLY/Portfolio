import React from 'react';
import { Code2, Database, Globe, Layout } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'HTML, CSS, Javascript, React, VueJS, NuxtJS, TypeScript',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Node.js, PHP, MySQL, MongoDB',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Tools',
    description: 'Wordpress, Prestashop, Directus',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
          I’m a curious and creative person, always looking for new challenges to improve my skills and push my limits. I enjoy exploring unique technical solutions and working on projects that combine innovation and impact.

Outside of development, I’m interested in sports and videogames, which inspires my creativity and thinking every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}