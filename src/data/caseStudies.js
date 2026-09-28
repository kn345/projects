// Central metadata for the flagship case studies shown on the homepage and
// in the nav's Work dropdown. NerdWallet is temporarily removed from this
// list (not deleted — src/pages/case-studies/NerdWallet.jsx and its route
// still exist, just unlinked) — add it back here when ready.

export const caseStudies = [
  {
    slug: 'amazon-ads',
    title: 'Amazon Ads',
    subtitle: 'Content research, ongoing',
    methods: ['A/B Testing', 'Customer Feedback Analysis'],
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
