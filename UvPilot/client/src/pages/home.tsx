import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import GettingStarted from "@/components/getting-started";
import TutorialSection from "@/components/tutorial-section";
import MigrationSection from "@/components/migration-section";
import DeploymentSection from "@/components/deployment-section";
import ExamplesSection from "@/components/examples-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GettingStarted />
      <TutorialSection />
      <MigrationSection />
      <DeploymentSection />
      <ExamplesSection />
      <Footer />
    </div>
  );
}
