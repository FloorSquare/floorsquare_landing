import LandingPage from '../components/LandingPage';
import { Problem, WhyUs, Audience, Areas, Roadmap, About, Faq, Contact, faqs } from '../components/Sections';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <main>
      <LandingPage
        problem={<Problem />}
        afterSteps={
          <>
            <WhyUs />
            <Audience />
            <Areas />
            <Roadmap />
          </>
        }
      >
        <About />
        <Faq />
        <Contact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </LandingPage>
    </main>
  );
}
