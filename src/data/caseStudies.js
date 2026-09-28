// Central metadata for the five flagship case studies.
// Body copy for each case study page is still pending Kay's finalized text
// (see /case-studies/*.jsx placeholders) — this file drives the homepage
// cards and nav only.

export const caseStudies = [
  {
    slug: 'capstone',
    title: 'UW Capstone',
    subtitle: 'Layoff & financial-hardship navigation app',
    methods: ['Research', 'Design', 'IA', 'Concept Testing'],
    blend: 'research+design',
  },
  {
    slug: 'appa-health',
    title: 'Appa Health',
    subtitle: 'Barriers to care for families of kids with disabilities',
    methods: ['Research', 'Synthesis', 'Stakeholder Interviews'],
    blend: 'research',
  },
  {
    slug: 'aiembodied',
    title: 'AiEmbodied',
    subtitle: 'Workflow-automation builder redesign',
    methods: ['UX Design', 'Usability Testing', 'Figma'],
    blend: 'design',
  },
  {
    slug: 'nerdwallet',
    title: 'NerdWallet',
    subtitle: 'Insurance review content template',
    methods: ['Content Design', 'Research Partnership'],
    blend: 'content+research',
  },
  {
    slug: 'vrchat',
    title: 'VR Chat',
    subtitle: 'Tutorial & VR Buddy safety onboarding',
    methods: ['Research', 'Usability Testing', 'Prototyping'],
    blend: 'research+design',
  },
];

// Reserve pieces — shown only in the lightweight "Additional Work" strip,
// not as full case studies. Kept intentionally minimal.
export const additionalWork = [
  {
    title: 'Garden Society site redesign',
    note: 'Visual communication class project — Figma-heavy visual/UI redesign, done solo',
  },
  {
    title: 'NerdWallet Product Cards',
    note: 'Content design exploration',
  },
  {
    title: 'Seattle Seaplanes IA',
    note: 'Information architecture redesign',
  },
  {
    title: 'UW Parking Portal',
    note: 'Usability study',
  },
];
