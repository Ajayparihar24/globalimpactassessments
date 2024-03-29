import ContractInformation from "@/components/landing/ContractInformation";
import Hero from "@/components/landing/Hero";
import Team from "@/components/landing/Team";
import WhereWeServe from "@/components/landing/WhereWeServe";
import WhoWeAre from "@/components/landing/WhoWeAre";
import WhoWeServe from "@/components/landing/WhoWeServe";
import WhyUs from "@/components/landing/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="md:mt-[480px] mt-[320px] ">
        <WhoWeAre />
        <WhoWeServe />
        <WhereWeServe />
        <WhyUs />
        <Team />
        <ContractInformation />
      </div>
    </>
  );
}
