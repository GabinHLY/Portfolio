interface Experience {
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
    technologies: string[];
  }
  
  export const experiences: Experience[] = [
    {
      role: 'Internship in a company',
      company: 'Senteurs&Cie',
      period: 'Feb 2022 - May 2022',
      description: 'Creation of an e-commerce website with a back office that the company has since customized.',
      technologies: ['Wordpress'],
    },
    {
      role: 'Internship in a company', 
      company: 'SportAddict',
      period: 'Dec 2024 - Mar 2025',
      description: 'Creation of a website for a sports store.',
      technologies: ['Nuxt', 'Directus', 'TailWindCSS'],
    },
    {
      role: 'Internship in a company',
      company: 'onRuntime Studio',
      companyUrl: 'https://onruntime.com/fr',
      period: 'Mar 2025 - Jun 2025',
      description: 'Front-end of an app to get benefits during events or parties.',
      technologies: ['React', 'Typescript', 'Kitchn'],
    },
  ];