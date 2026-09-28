import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function AmazonAds() {
  return (
    <CaseStudyLayout
      title="Amazon Ads: Content Research"
      slug="amazon-ads"
      facts={[
        { label: 'Client', value: 'Amazon Ads' },
        { label: 'My Role', value: 'Researcher (Help Content Developer)' },
        { label: 'Timeline', value: 'Ongoing' },
        { label: 'Methods', value: 'A/B Testing, Feedback Analysis' },
      ]}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          I lead UX research at Amazon Ads, using A/B experimentation and customer feedback analysis to
          improve content quality and reduce unnecessary customer contact. I'm currently running a study
          using direct customer feedback to identify and improve low-performing, high-traffic content.
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Specifics are confidential, but I'm glad to walk through the approach in conversation.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
