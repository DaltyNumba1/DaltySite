export type Role = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const resumePdf = '/resume.pdf';

export const summary =
  `Software developer and IT professional with over four years of experience across software development, enterprise systems, and data-driven
applications. Strong background in regulated industries like healthcare technology, with adaptability across full stack
development, systems integration, and technical problem-solving. Seeking a new role to leverage technical expertise, contribute
to meaningful projects, and continue professional growth in a collaborative environment.`;

export const experience: Role[] = [
  {
    title: 'Contract Software Developer',
    company: 'Menlo Innovations',
    location: 'Ann Arbor, MI',
    start: 'March 2026',
    end: 'April 2026',
    bullets: [
      `Developed web and desktop applications as part of a collaborative software team using Menlo's pair programming and iterative
agile methodology.`,
      `Contributed to a data visualization tool using Matplotlib with the Qt6 library to model and render scientific data collected by
NASA's IMAP space satellite, enabling researchers to explore complex datasets interactively.`,
      `Developed a web application that integrated with the Salesforce framework to support client-facing business workflows.`,
    ],
  },
  {
    title: 'Software Developer',
    company: 'Epic',
    location: 'Verona, WI',
    start: 'June 2022',
    end: 'November 2025',
    bullets: [
      `Full stack developer on the Resolute Professional Billing team, building and maintaining web applications within Epic's
Hyperspace enterprise product used by healthcare organizations nationwide in a highly regulated industry.`,
      `Led multiple projects for the "Web Transition" company-wide initiative, designing and implementing modernized versions of
existing activities using the .NET framework, React, TypeScript, and C#.`,
      `Maintained quality and stability across a vast enterprise codebase as part of the team's Bug Fix Squad, triaging, diagnosing,
and resolving defects in production software.`,
      `Built and managed data models and ETL processes using SQL to support customer reporting needs, ensuring accurate and
timely delivery of billing and operational data.`,
      `Led on-site customer visits for research and immersion purposes, gathering requirements and translating clinical workflows into
technical solutions.`,
    ],
  },
  {
    title: 'Contract IT Developer',
    company: 'Lansing Board of Water and Light',
    location: 'Lansing, MI',
    start: 'September 2021',
    end: "March 2022",
    bullets: [
      `After completing summer internship, was asked to continue employment during the school year along with receiving a
promotion to a contract developer role.`,
      `Tested other developer's projects by writing unit tests and automated end-to-end tests using Selenium, improving code
coverage and reducing regression issues.`,
      `Contributed to the development of an Enterprise Service Bus that integrated data transfer across multiple internal systems
within the organization.`,
    ]
  },
  {
    title: 'IT Intern',
    company: 'Lansing Board of Water and Light',
    location: 'Lansing, MI',
    start: 'May 2021',
    end: "August 2021",
    bullets: [
      `Developed and deployed web applications used by both customers and internal staff for utility account management and
service requests.`,
      `Developed console applications that automated data-intensive workflows, reducing manual effort and improving processing
efficiency for other staff members.`,
    ]
  },
];

export const education: Education[] = [
  {
    degree: 'B.S. in Computer Science',
    school: 'Michigan State University',
    location: 'East Lansing, MI',
    start: 'August 2018',
    end: 'April 2022',
    details: [`Awarded the MSU Federal Credit Union Praxis Award for the Snagit Template Creator capstone project, recognizing the most
technically challenging software engineering effort.`],
  },
];

export const skills: SkillGroup[] = [
  /*{
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Node.js', 'Vite', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'Postgres', 'AWS', 'Linux'],
  },*/
];
