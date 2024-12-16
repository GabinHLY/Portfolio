import React from 'react';
import { ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
}

export default function TimelineItem({
  role,
  company,
  period,
  description,
  technologies,
  companyUrl,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200">
        <div className="absolute top-2 -left-[5px] h-3 w-3 rounded-full border-2 border-blue-500 bg-white" />
      </div>
      
      <div className="group">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
          <span className="text-gray-500">@</span>
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
            >
              {company}
              <ExternalLink size={16} />
            </a>
          ) : (
            <span className="text-gray-900">{company}</span>
          )}
        </div>
        
        <p className="text-sm text-gray-500 mb-3">{period}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}