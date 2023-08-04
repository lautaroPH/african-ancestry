import AboutSection from '@/components/AboutSection';
import HowItWorkSection from '@/components/HowItWorkSection';
import IntroductionSection from '@/components/IntroductionSection';
import ProductSection from '@/components/ProductSection';
import ReviewsSection from '@/components/ReviewsSection';
import WhySection from '@/components/WhySection';
import ChooseSection from '@/components/ChooseSection';
import CelebrateSection from '@/components/CelebrateSection';
import PrivacySection from '@/components/PrivacySection';
import QuestionsSection from '@/components/QuestionsSection';
import FindOutSection from '@/components/FindOutSection';

export default function Home() {
  return (
    <main className="z-10">
      <IntroductionSection />
      <AboutSection />
      <WhySection />
      <ProductSection />
      <ReviewsSection />
      <HowItWorkSection />
      <ChooseSection />
      <CelebrateSection />
      <PrivacySection />
      <QuestionsSection />
      <FindOutSection />
    </main>
  );
}
