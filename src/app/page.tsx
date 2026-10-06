import HeroBanner from "@/components/home/HeroBanner";
import WhoWeAre from "@/components/home/WhoWeAre";
import OurValues from "@/components/home/OurValues";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import TeamCarousel from "@/components/home/TeamCarousel";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";
import AppointmentForm from "@/components/home/AppointmentForm";
import MembershipsBar from "@/components/home/MembershipsBar";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <WhoWeAre />
      <OurValues />
      <PracticeAreasGrid />
      <TeamCarousel />
      <LatestNews />
      <Testimonials />
      <AppointmentForm />
      <MembershipsBar />
    </>
  );
}
