// Central metadata for the flagship case studies shown on the homepage and
// in the nav's Work dropdown. NerdWallet is temporarily removed from this
// list (not deleted — src/pages/case-studies/NerdWallet.jsx and its route
// still exist, just unlinked) — add it back here when ready.
//
// To show a thumbnail on a homepage card, add an `image: '/images/work/<file>'`
// field to that case study below, and put the image file in
// public/images/work/. Cards without an `image` field just show text, same
// as today.

export const caseStudies = [
  {
    slug: 'amazon-ads',
    title: 'Amazon Ads',
    subtitle: 'Content research, ongoing',
    description: 'Using A/B experimentation and customer feedback analysis to improve content quality and reduce unnecessary customer contact.',
    methods: ['A/B Testing', 'Customer Feedback Analysis'],
    blend: 'research',
  },
  {
    slug: 'capstone',
    title: "Dub's Research Hub",
    subtitle: 'From profile problem to collaboration platform',
    description: 'Reframing a profile-discoverability brief into a full collaboration platform, grounded in interviews across the research ecosystem.',
    methods: ['Research', 'Design', 'IA', 'Concept Testing'],
    blend: 'research+design',
    image: '/images/work/capstone/hifi-home.png',
  },
  {
    slug: 'aiembodied',
    title: 'AI Embodied',
    subtitle: 'Redesigning a no-code AI workflow builder',
    description: 'Simplifying a cluttered, technical workflow builder into something approachable for non-coders, without losing its power.',
    methods: ['UX Design', 'IA', 'Usability Testing Protocol'],
    blend: 'design',
  },
  {
    slug: 'appa-health',
    title: 'Appa Health',
    subtitle: 'Understanding school user needs for a mental health platform',
    description: 'Interviews and survey work with school staff gatekeepers for a teen mental-health mentorship platform.',
    methods: ['Interviews', 'Survey', 'Thematic Analysis'],
    blend: 'research',
  },
  {
    slug: 'vrchat',
    title: 'VRChat',
    subtitle: 'Designing a safer onboarding experience',
    description: 'Equipping new users with the skills to navigate a social VR platform and make real connections within their first week.',
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
