import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs.tsx";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction.tsx";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing.tsx";
import { Services } from "./components/sections/Services.tsx";

function App() {
  return (
    <Layout title="CardHood">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;