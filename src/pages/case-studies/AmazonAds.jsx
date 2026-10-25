import CaseStudyLayout from '../../components/CaseStudyLayout';

export default function AmazonAds() {
  return (
    <CaseStudyLayout
      title="Amazon Ads: Content Research"
      slug="amazon-ads"
      facts={[
        { label: 'Client', value: 'Amazon Ads' },
        {
          label: 'My Role',
          value: [
            'Own UX research for Ads content quality',
            'Design and run A/B tests',
            'Analyze customer feedback to prioritize fixes',
          ],
        },
        { label: 'Timeline', value: 'Ongoing' },
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
