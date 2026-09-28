// Central metadata for the five flagship case studies.
// Body copy for each case study page is still pending Kay's finalized text
// (see /case-studies/*.jsx placeholders) — this file drives the homepage
// cards and nav only.

export const caseStudies = [
  {
    slug: 'capstone',
    title: "Dub's Research Hub",
    subtitle: 'From profile problem to collaboration platform',
    methods: ['Research', 'Design', 'IA', 'Concept Testing'],
    blend: 'research+design',
  },
  {
    slug: 'appa-health',
    title: 'Appa Health',
    subtitle: 'Understanding school user needs for a mental health platform',
    methods: ['Interviews', 'Survey', 'Thematic Analysis'],
    blend: 'research',
  },
  {
    slug: 'aiembodied',
    title: 'AiEmbodied',
    subtitle: 'Redesigning a no-code AI workflow builder',
    methods: ['UX Design', 'IA', 'Usability Testing Protocol'],
    blend: 'design',
  },
  {
    slug: 'nerdwallet',
    title: 'NerdWallet',
    subtitle: 'Insurance review template redesign',
    methods: ['Content Design', 'Research Partnership'],
    blend: 'content+research',
  },
  {
    slug: 'vrchat',
    title: 'VRChat',
    subtitle: 'Designing a safer onboarding experience',
    methods: ['Research', 'Contextual Inquiry', 'Prototyping'],
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
