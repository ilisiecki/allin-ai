import LandingHero from "@/components/layout/app/landing-hero";
import LandingNavbar from "@/components/layout/app/landing-navbar";

export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
