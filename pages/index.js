import { SubHeader, Header, HeroSection, CardSection } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
       <main>
        <hr className="w-full " />
        <HeroSection />
        
       <hr className="w-full " />
        <CardSection />   
      </main> 
    </>
  );
}
