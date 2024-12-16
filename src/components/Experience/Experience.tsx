import React from 'react';
import TimelineItem from './TimelineItem';
import { experiences } from './ExperienceData';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and key achievements"
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}